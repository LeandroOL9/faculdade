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

const API_URL_PRODUCTS = 'https://fakestoreapi.com/products';
const API_URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';

let produtos = [];
let categorias = [];
let categoriaAtiva = null;

const produtosContainer = document.getElementById('produtos');
const categoriasContainer = document.getElementById('categorias');
const termoInput = document.getElementById('termo');
const form = document.getElementById('filtros');
const msg = document.getElementById('mensagem');

// -----------------------------------------
// 1. Carrega todos os produtos
// -----------------------------------------
function loadAllData() {
  msg.textContent = "Carregando produtos...";
  fetch(API_URL_PRODUCTS)
    .then(res => {
      if (!res.ok) throw new Error("Erro na resposta da API");
      return res.json();
    })
    .then(data => {
      produtos = data;
      renderProducts(produtos);
      msg.textContent = "";
    })
    .catch(err => {
      msg.textContent = "Erro ao carregar dados. Tente novamente.";
      console.error(err);
    });
}

// -----------------------------------------
// 2. Carrega categorias e gera botões
// -----------------------------------------
function loadCategories() {
  fetch(API_URL_CATEGORIES)
    .then(res => {
      if (!res.ok) throw new Error("Erro ao buscar categorias");
      return res.json();
    })
    .then(data => {
      categorias = data;
      renderCategories();
    })
    .catch(err => {
      console.error("Erro ao carregar categorias:", err);
    });
}

// -----------------------------------------
// 3. Renderiza categorias dinamicamente
// -----------------------------------------
function renderCategories() {
  categoriasContainer.innerHTML = "";

  const btnTodos = createButton("Todas", true);
  categoriasContainer.appendChild(btnTodos);

  categorias.forEach(cat => {
    const btn = createButton(cat);
    categoriasContainer.appendChild(btn);
  });
}

function createButton(texto, isAll = false) {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.className = "btn btn-outline-primary btn-sm";
  btn.addEventListener("click", e => {
    e.preventDefault();
    categoriaAtiva = isAll ? null : texto;
    aplicarFiltros();
  });
  return btn;
}

// -----------------------------------------
// 4. Renderiza produtos
// -----------------------------------------
function renderProducts(lista) {
  produtosContainer.innerHTML = "";

  if (!lista.length) {
    produtosContainer.innerHTML = "<p class='text-center opacity-75'>Nenhum produto encontrado.</p>";
    return;
  }

  lista.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-lg-4";

    col.innerHTML = `
      <div class="card bg-secondary bg-opacity-10 border border-secondary text-light h-100">
        <img src="${p.image}" class="card-img-top" alt="${p.title}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text small flex-grow-1">${p.description.substring(0, 80)}...</p>
          <p class="fw-bold">R$ ${p.price.toFixed(2)}</p>
          <button class="btn btn-outline-primary btn-sm mt-auto">Comprar</button>
        </div>
      </div>`;
    
    produtosContainer.appendChild(col);
  });
}

// -----------------------------------------
// 5. Aplicar filtros locais (categoria + texto)
// -----------------------------------------
function aplicarFiltros() {
  let filtrados = [...produtos];

  if (categoriaAtiva) {
    filtrados = filtrados.filter(p => p.category === categoriaAtiva);
  }

  const termo = termoInput.value.toLowerCase().trim();
  if (termo) {
    filtrados = filtrados.filter(p =>
      p.title.toLowerCase().includes(termo) ||
      p.description.toLowerCase().includes(termo)
    );
  }

  renderProducts(filtrados);
}

// -----------------------------------------
// 6. Listener do formulário de busca
// -----------------------------------------
form.addEventListener("submit", e => {
  e.preventDefault();
  aplicarFiltros();
});

// -----------------------------------------
// 7. Inicialização
// -----------------------------------------
loadAllData();
loadCategories();
