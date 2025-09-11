const URL = "https://sistema-de-reservas-node-js-express.onrender.com/api";

function createEl(tag, classes = "", text = "") {
  const el = document.createElement(tag);
  if (classes) el.className = classes;
  if (text) el.textContent = text;
  return el;
}

async function fetchSalas() {
  const res = await fetch(`${URL}/rooms`);
  return res.json();
}

async function carregarPredios() {
  try {
    const salas = await fetchSalas();
    const blocos = [...new Set(salas.map(s => s.building))].sort();

    const select = document.getElementById("building");
    select.innerHTML = '<option value="">Todos</option>';
    blocos.forEach(b => select.appendChild(createEl("option", "", b)));
  } catch (err) {
    console.error("Erro ao carregar prédios", err);
  }
}

async function carregarRecursos() {
  try {
    const salas = await fetchSalas();
    const recursos = [...new Set(salas.flatMap(s => s.resources))];

    const container = document.getElementById("resources");
    container.innerHTML = "<legend class='font-semibold'>Recursos:</legend>";
    recursos.forEach(r => {
      const id = r.toLowerCase().replace(/\s+/g, "-");
      const label = createEl("label", "flex items-center gap-2");
      const input = createEl("input");
      input.type = "checkbox";
      input.value = r;
      input.id = id;
      label.append(input, document.createTextNode(r));
      container.appendChild(label);
    });
  } catch (err) {
    console.error("Erro ao carregar recursos", err);
  }
}

async function carregarSalas(filtros = {}) {
  try {
    let salas = await fetchSalas();

    if (filtros.building) salas = salas.filter(s => s.building === filtros.building);
    if (filtros.minCap) salas = salas.filter(s => s.capacity >= filtros.minCap);
    if (filtros.maxCap) salas = salas.filter(s => s.capacity <= filtros.maxCap);
    if (filtros.resources?.length) {
      salas = salas.filter(s => filtros.resources.every(r => s.resources.includes(r)));
    }

    const ul = document.getElementById("salas");
    ul.innerHTML = "";
    salas.forEach(s => {
      const li = createEl("li", "border rounded p-4 bg-gray-900 text-white shadow");
      li.innerHTML = `
        <h3 class="font-bold text-lg">${s.name}</h3>
        <p><b>Prédio:</b> ${s.building}</p>
        <p><b>Capacidade:</b> ${s.capacity}</p>
        <p><b>Recursos:</b> ${s.resources.join(", ")}</p>
      `;
      ul.appendChild(li);
    });
  } catch (err) {
    console.error("Erro ao carregar salas", err);
  }
}

async function carregarReservas() {
  try {
    const res = await fetch(`${URL}/reservations`);
    const reservas = await res.json();
    const ul = document.getElementById("minhas-reservas");
    ul.innerHTML = "";

    reservas.forEach(r => {
      const li = createEl("li", "p-4 flex justify-between items-center");
      li.innerHTML = `
        <div>
          <p class="font-semibold">${r.title}</p>
          <p>${new Date(r.start).toLocaleString()} - ${new Date(r.end).toLocaleString()}</p>
          <p><b>Solicitante:</b> ${r.requester}</p>
        </div>
      `;
      const btn = createEl("button", "bg-red-600 text-white px-3 py-1 rounded", "Cancelar");
      btn.onclick = async () => {
        if (confirm("Deseja cancelar esta reserva?")) {
          await fetch(`${URL}/reservations/${r.id}`, { method: "DELETE" });
          carregarReservas();
        }
      };
      li.appendChild(btn);
      ul.appendChild(li);
    });
  } catch (err) {
    console.error("Erro ao carregar reservas", err);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  carregarPredios();
  carregarRecursos();
  carregarSalas();
  carregarReservas();

  document.getElementById("filtros").addEventListener("submit", e => {
    e.preventDefault();

    const minCap = Number(document.getElementById("min-capacidade").value);
    const maxCap = Number(document.getElementById("max-capacidade").value);

    if (minCap && maxCap && minCap > maxCap) return alert("O valor mínimo não pode ser maior que o máximo!");

    const building = document.getElementById("building").value;
    const resources = Array.from(document.querySelectorAll("#resources input:checked")).map(c => c.value);

    carregarSalas({ building: building || null, minCap: minCap || null, maxCap: maxCap || null, resources });
  });
});
