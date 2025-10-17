import * as product from '../modules/product/product.js';
import * as ui from '../utils/ui.js';
import * as category from '../modules/category/category.js';
import * as cart from '../modules/cart/cart.js';

(() => {
    'use strict';

    let products = [];
    let currentCategory = 'all';

    const productList = document.querySelector('#product-list');
    const categoryFilters = document.querySelector('#category-filters');

    const renderProducts = (list) => {
        productList.innerHTML = '';
        if (list.length === 0) {
            ui.updateStatus('', 'none');
            productList.innerHTML = ui.cardProductEmpty();
            return;
        }
        list.forEach(prod => {
            const col = ui.cardProduct(prod);
            productList.appendChild(col);
        });
        addToCartEventListner();
    };
    
    const showProducts = async (filter = 'all') => {
        ui.updateStatus('Carregando produtos...', 'info');
        products = await product.get();

        ui.updateStatus('', 'none');
        if (filter === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === filter);
            renderProducts(filtered);
        }
    };

    const showCategories = async () => {
        const categories = await category.get();
        if (categories.length === 0) return;

        const allButton = ui.buttonCategory('all');
        allButton.textContent = 'Todos';
        categoryFilters.appendChild(allButton);

        categories.forEach(cat => {
            const button = ui.buttonCategory(cat);
            categoryFilters.appendChild(button);
        });

        addFilterEventListener();
    };

    const addFilterEventListener = () => {
        const buttons = document.querySelectorAll('.filter-btn');
        if (buttons.length === 0) return;

        buttons.forEach(btn => {
            btn.addEventListener('click', event => {
                const { category } = event.currentTarget.dataset;
                currentCategory = category;

                buttons.forEach(b => b.classList.remove('active'));
                event.currentTarget.classList.add('active');

                showProducts(category);
            });
        });
    };

const addToCartEventListner = () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    if (buttons.length > 0) {
        buttons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const { id, title, price, image } = event.currentTarget.dataset;
                cart.add(Number(id), title, Number(price), image);
            });
        });
    }
    };


    showProducts();
    showCategories();

})();
