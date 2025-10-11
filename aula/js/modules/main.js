import * as product from '../modules/product/product.js';
import * as ui from '../utils/ui.js';
(()=>{
    'use strict';
    let products = [];
    const productlist = document.querySelector('#product-list')
    const showProducts = async () => {
        products = await product.get();
        if(products.length === 0){
            ui.updateStatus('','none')
            productlist.innerHTML = ui.cardProductEmpty();
            return;
        }
            ui.updateStatus('','none');
            products.forEach (product=> {
                const col = ui.cardProduct(product);
                productlist.appendChild(col);
            })
    }
    ui.updateStatus("Carregando produtos...", "info");
    showProducts();
})();