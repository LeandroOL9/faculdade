const BASE_URL = "https://sistema-de-reservas-node-js-express.onrender.com/api";

async function carregarSalas() {
  try {
    const res = await fetch(`${BASE_URL}/rooms`);
    const salas = await res.json();
    const select = document.getElementById("salas");

    select.innerHTML = '<option value="">Selecione uma sala...</option>';
    salas.forEach(sala => {
      const opt = document.createElement("option");
      opt.value = sala.id;
      opt.textContent = `${sala.name} (${sala.building}) - ${sala.capacity} lugares`;
      select.appendChild(opt);
    });
  } catch (err) {
    alert("Erro ao carregar salas");
    console.error(err);
  }
}

document.getElementById("reserva").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const requester = document.getElementById("requester").value.trim();
  const roomId = document.getElementById("salas").value;

  if (!title || !start || !end || !requester || !roomId) {
    alert("Preencha todos os campos!");
    return;
  }
  if (new Date(end) <= new Date(start)) {
    alert("A data/hora de fim deve ser maior que a de início!");
    return;
  }

  const data = { title, start, end, requester, roomId };

  try {
    const res = await fetch(`${BASE_URL}/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Reserva criada com sucesso!");
      e.target.reset();
    } else {
      const err = await res.json();
      alert("Erro: " + (err.message || res.statusText));
    }
  } catch (err) {
    alert("Erro ao enviar reserva");
    console.error(err);
  }
});

carregarSalas();
