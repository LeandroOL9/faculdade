(function () {
    'use strict';
    
    const cotacoes = [
        { code: "BRL", pais: "Brasil", brl: 1 },
        { code: "USD", pais: "Eua", brl: 5.42 },
        { code: "EUR", pais: "Alemanha", brl: 5.80 },
        { code: "GBP", pais: "Reino Unido", brl: 6.80 },
        { code: "JPY", pais: "Japão", brl: 0.035 }
    ];

    const form = document.querySelector('form');
    const origem = document.querySelector('#origem');
    const destino = document.querySelector('#destino');
    const legenda = document.querySelector('#legenda');
    const resultado = document.querySelector('#resultado');
    const valor = document.querySelector('#valor');
    const btntroca = document.querySelector('#troca');
    const btnatualizar = document.querySelector('#btnatualizar');

    form.addEventListener("submit", (event) => {
        event.preventDefault();
    });

    btnatualizar.addEventListener("click", () => {});

    function converterparacotacoes(rates){
        for (const code of Object.keys(rates)){
            const valorporreal = rates(code);
        }
    }
    async function buscarCotacoes() {
        try {
            btnatualizar.textContent = "Atualizando";
            const url = "https://api.frankfurter.app/latest?base=BRL";
            const resposta = await fetch(url);
            if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
            const dados = await resposta.json();
            const novasCotacoes = converterparacotacoes(dados.rates);
            btnatualizar.textContent = "Atualizar cotacoes"
        } catch (erro) {
            btnatualizar.textContent = "Atualizar Cotacoes";
        }
    }

    function atualizarcotacoes() {
        const origemAtual = origem.value;
        const destinoAtual = destino.value;

        origem.innerHTML = "";
        destino.innerHTML = "";

        cotacoes.forEach(cotacao => {
            console.log(cotacao);
            const label = `${cotacao.code} - ${cotacao.pais}`;

            const optionOrigem = document.createElement("option");
            optionOrigem.value = cotacao.code;
            optionOrigem.textContent = label;

            const optionDestino = document.createElement("option");
            optionDestino.value = cotacao.code;
            optionDestino.textContent = label;

            origem.appendChild(optionOrigem);
            destino.appendChild(optionDestino);
        });

        origem.value = origemAtual ? origemAtual : "BRL";
        destino.value = destinoAtual ? destinoAtual : "BRL";
    }

    atualizarcotacoes();
})();