// public/js/index.js
const BASE_URL = "http://localhost:3000"; // ajuste se necessário

// -----------------------------
// Utilitário para criar elementos
// -----------------------------
function createEl(tag, classes = "", text = "") {
  const el = document.createElement(tag);
  if (classes) el.className = classes;
  if (text) el.textContent = text;
  return el;
}

// -----------------------------
// Carregar recursos dinâmicos
// -----------------------------
async function carregarRecursos() {
  try {
    const res = await fetch(`${BASE_URL}/rooms`);
    const salas = await res.json();

    const recursosSet = new Set();
    salas.forEach(s => s.resources.forEach(r => recursosSet.add(r)));

    const resourcesFieldset = document.getElementById("resources");
    resourcesFieldset.innerHTML = "<legend class='font-semibold'>Recursos:</legend>";

    recursosSet.forEach(recurso => {
      const id = recurso.toLowerCase().replace(/\s+/g, "-");

      const label = createEl("label", "flex items-center gap-2");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = recurso;
      input.id = id;

      label.appendChild(input);
      label.appendChild(document.createTextNode(recurso));
      resourcesFieldset.appendChild(label);
    });
  } catch (err) {
    console.error("Erro ao carregar recursos", err);
  }
}

// -----------------------------
// Carregar salas (com filtros)
// -----------------------------
async function carregarSalas(filtros = {}) {
  try {
    const res = await fetch(`${BASE_URL}/rooms`);
    let salas = await res.json();

    // aplica filtros
    if (filtros.building) {
      salas = salas.filter(s => s.building === filtros.building);
    }

    if (filtros.minCap) {
      salas = salas.filter(s => s.capacity >= filtros.minCap);
    }

    if (filtros.maxCap) {
      salas = salas.filter(s => s.capacity <= filtros.maxCap);
    }

    if (filtros.resources && filtros.resources.length > 0) {
      salas = salas.filter(s =>
        filtros.resources.every(r => s.resources.includes(r))
      );
    }

    const ul = document.getElementById("salas");
    ul.innerHTML = "";
    salas.forEach(s => {
      const li = createEl(
        "li",
        "border rounded p-4 bg-white shadow"
      );
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

// Carregar minhas reservas

async function carregarReservas() {
  try {
    const res = await fetch(`${BASE_URL}/reservations`);
    const reservas = await res.json();

    const ul = document.getElementById("minhas-reservas");
    ul.innerHTML = "";

    reservas.forEach(r => {
      const li = createEl(
        "li",
        "p-4 flex justify-between items-center"
      );
      li.innerHTML = `
        <div>
          <p class="font-semibold">${r.title}</p>
          <p>${new Date(r.start).toLocaleString()} - ${new Date(r.end).toLocaleString()}</p>
          <p><b>Solicitante:</b> ${r.requester}</p>
        </div>
      `;

      const btn = createEl(
        "button",
        "bg-red-600 text-white px-3 py-1 rounded",
        "Cancelar"
      );
      btn.onclick = async () => {
        if (confirm("Deseja cancelar esta reserva?")) {
          await fetch(`${BASE_URL}/reservations/${r.id}`, { method: "DELETE" });
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

// -----------------------------
// Inicialização
// -----------------------------
window.addEventListener("DOMContentLoaded", () => {
  carregarRecursos();
  carregarSalas();
  carregarReservas();

  // filtros
  document.getElementById("filtros").addEventListener("submit", (e) => {
    e.preventDefault();

    const minCap = Number(document.getElementById("min-capacidade").value);
    const maxCap = Number(document.getElementById("max-capacidade").value);

    if (minCap && maxCap && minCap > maxCap) {
      alert("O valor mínimo não pode ser maior que o máximo!");
      return;
    }

    const building = document.getElementById("building").value;
    const resources = Array.from(
      document.querySelectorAll("#resources input[type=checkbox]:checked")
    ).map(c => c.value);

    carregarSalas({
      building: building || null,
      minCap: minCap || null,
      maxCap: maxCap || null,
      resources
    });
  });
});
