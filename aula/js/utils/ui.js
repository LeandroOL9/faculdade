const cardProductEmpty = () => {
    return '<p class="col-12 text-center alert alert-warning" >Nenhum produto encontrado com os filtos e termos de busca atuais.</p>'
}

const updateStatus = (Text, type)=>{
    const statusMenssage = document.querySelector('#status-message');
    if(type === 'none'){
        statusMenssage.classList.add('d-none');
    }else{
        statusMenssage.textContent = Text;
        statusMenssage.className = `alert alert-${type} text-center`;
        statusMenssage.classList.remove('d-nome');
    }
}
const cardProduct = (product) => {
    const col = document.createElement('div');
    col.classList.add('col')
    col.innerHTML = `<div class="card shadow-sm"><img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
    <div class="card-body">
    <h5 class="card-title">${product.title}</h5></div>
    </div>`
    return col;
}

export { cardProductEmpty, updateStatus, cardProduct } ;