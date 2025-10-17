const key = 'cart-loja-fake';

const load = () => {
    const data = localStorage.getItem(key);
    const _default = { items: [], updatedAt: Date.now() };

    if (!data) return _default;

    try {
        const obj = JSON.parse(data);
        if (obj && Array.isArray(obj.items)) {
            return obj;
        } else {
            return _default;
        }
    } catch (error) {
        return _default;
    }
};

const save = (cart) => {
    localStorage.setItem(key, JSON.stringify(cart));
};

const add = (id, title, price, image, quantity = 1) => {
    const cart = load();
    const index = cart.items.findIndex(i => i.id === id);

    if (index >= 0) {
        cart.items[index].quantity += quantity;
    } else {
        cart.items.push({ id, title, price, image, quantity });
    }

    cart.updatedAt = Date.now();
    save(cart);

};

export { add };
