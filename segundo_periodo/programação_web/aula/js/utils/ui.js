const cardProductEmpty = () => {
    return `
        <p class="col-12 text-center alert alert-warning">
            Nenhum produto encontrado com os filtros e termos de busca atuais.
        </p>
    `;
};

const updateStatus = (text, type) => {
    const statusMessage = document.querySelector('#status-message');

    if (!statusMessage) return; 

    if (type === 'none') {
        statusMessage.classList.add('d-none');
    } else {
        statusMessage.textContent = text;
        statusMessage.className = `alert alert-${type} text-center`;
        statusMessage.classList.remove('d-none');
    }
};

const cardProduct = (product) => {
    const col = document.createElement('div');
    col.classList.add('col');

col.innerHTML = `
    <div class="card shadow-sm h-100">
        <img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text text-truncate">${product.description}</p>
            <p class="card-text fw-bold text-success">R$ ${product.price.toFixed(2)}</p>
            <div class="d-flex justify-content-between align-items-center mt-auto">
                <div class="btn-group">
                    <button 
                        type="button" 
                        class="btn btn-sm btn-success add-to-cart"
                        data-id="${product.id}"
                        data-title="${product.title}"
                        data-image="${product.image}"
                        data-price="${product.price}"
                    >
                        + Carrinho
                    </button>
                    <button type="button" class="btn btn-sm btn-success">Detalhes</button>
                </div>
            </div>    
        </div>
    </div>
`;


    return col;
};

const buttonCategory = (category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-btn list-group-item list-group-item-action';
    button.dataset.category = category;
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    return button;
};

export { cardProductEmpty, updateStatus, cardProduct, buttonCategory };
