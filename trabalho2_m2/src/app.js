const API_URL_PRODUCTS = 'https://fakestoreapi.com/products';
const API_URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';

const produtosContainer = document.getElementById('produtos');
const categoriasContainer = document.getElementById('categorias');

let produtos = []; 
let categoriaAtiva = null; 

async function loadAllData() {
  produtosContainer.innerHTML = "<p class='text-center'>Carregando produtos...</p>";

  try {
    const res = await fetch(API_URL_PRODUCTS);
    produtos = await res.json();

    renderProducts(produtos);
  } catch (err) {
    produtosContainer.innerHTML = "<p class='text-center text-danger'>Erro ao carregar produtos.</p>";
    console.error("Erro ao carregar produtos:", err);
  }
}
async function loadCategories() {
  categoriasContainer.innerHTML = "<p class='text-center'>Carregando categorias...</p>";

  try {
    const res = await fetch(API_URL_CATEGORIES);
    const categorias = await res.json();

    categoriasContainer.innerHTML = "";

    const btnTodos = document.createElement("button");
    btnTodos.type = "button";
    btnTodos.textContent = "Todas";
    btnTodos.className = "btn btn-outline-primary btn-sm mb-2 me-2";
    btnTodos.addEventListener("click", () => {
      categoriaAtiva = null;
      renderProducts(produtos);
    });
    categoriasContainer.appendChild(btnTodos);

    categorias.forEach(cat => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = cat;
      btn.className = "btn btn-outline-primary btn-sm mb-2 me-2";
      btn.addEventListener("click", () => {
        categoriaAtiva = cat;
        const filtrados = produtos.filter(p => p.category === cat);
        renderProducts(filtrados);
      });
      categoriasContainer.appendChild(btn);
    });

  } catch (err) {
    categoriasContainer.innerHTML = "<p class='text-center text-danger'>Erro ao carregar categorias.</p>";
    console.error("Erro ao carregar categorias:", err);
  }
}
const renderProducts = (lista) => {
    produtosContainer.innerHTML = "";

    lista.forEach(produto => {
        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-lg-4";
        col.innerHTML = `
        <div class="card bg-secondary bg-opacity-10 border border-secondary text-light h-100">
            <img src="${produto.image}" class="card-img-top w-50 mx-auto" alt="${produto.title}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${produto.title}</h5>
                <p class="card-text small flex-grow-1">${produto.description.substring(0, 80)}...</p>
                <p class="fw-bold">R$ ${produto.price.toFixed(2)}</p>
                <button class="btn btn-outline-primary btn-sm mt-auto">Comprar</button>
            </div>
        </div>
        `;

        produtosContainer.appendChild(col);
    });
}

loadAllData();
loadCategories();
renderProducts();