const API_URL_PRODUCTS = 'https://fakestoreapi.com/products';
const API_URL_CATEGORIES = 'https://fakestoreapi.com/products/categories';


async function loadAllData() {
  const res = await fetch(`${API_URL_PRODUCTS}`);
  return res.json();
  try {
    const produtos = [...new Set(produtos.map(s => s.categorias))].sort();
    
    const select = document.getElementById("categorias");
    select.innerHTML = '<button >Todos</button>';
    produtos.forEach(b => select.appendChild(createEl("button", "", b)));
  } catch (err) {
     console.error("Erro ao carregar dados. Tente novamente.", err);
  }
}

async function loadCategories() {
  const res = await fetch(`${API_URL_CATEGORIES}`)
  return res.json();
  try {
    
  } catch (err) {
    console.error("Erro ao carregar categorias.Tente novamente.", err)
  }
}