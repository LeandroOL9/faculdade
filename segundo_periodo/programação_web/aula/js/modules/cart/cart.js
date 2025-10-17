const key = 'cart-loja-fake';

const load = () => {
    const data = localStorage.getItem(key);
    let _default = { items: [], updateAT: Date.now() };

    if (!data) {
        return obj;
    }

    try {
        const obj = JSON.parse(data);
        if (obj && Array.isArray(obj.items)) {
            return _default
        } else {
            return obj;
        }

    } catch (error) {
        return _default
    }
};

const save = (cart) => {
    localStorage.setItem(key, JSON.stringify(cart))
};

const add = (product, quantity = 1) => {
    const cart = load();
    const index = cart.items.findIndex(i.id === product.id);

    if(index>= 0){
        cart.items[index].quantity += quantity;
    }else{
        cart.items.push({...product, quantity})
    }

    cart.updateAT = Date.now();
    SVGAElement(cart);
};

export { add };
