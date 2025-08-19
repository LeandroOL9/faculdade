(() => {
const valor = document.getElementById('valor'),
      de = document.getElementById('de'),
      para = document.getElementById('para'),
      res = document.getElementById('resultado');

const taxas = {
    BRL:{USD:0.20,EUR:0.18,BRL:1},
    USD:{BRL:5,EUR:0.9,USD:1},
    EUR:{BRL:5.5,USD:1.1,EUR:1}
};

document.querySelector('button').onclick = () => {
    const v = parseFloat(valor.value);
    res.textContent =  (v * taxas[de.value][para.value]).toFixed(2);
};
})();