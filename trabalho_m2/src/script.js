(() => {
  const ESTOQUE_CARROS = [
    { id: 101, modelo: "Honda Civic LX", ano: 2023, preco: 125000.50, status: "DISPONIVEL", vendedor: null,
      identificacao: " CHASSI: br359B202300459x / PLACA: XYZ-7I19 / STATUS: OK " },
    { id: 102, modelo: "CHEVROLET Tracker LTZ", ano: 2024, preco: 142800.00, status: "VENDIDO", vendedor: "José Silva",
      identificacao: " CHASSI: bc457C202400111y / PLACA: ABC-1234 / STATUS: FECHADO " },
    { id: 103, modelo: "Volkswagen T-Cross Highline", ano: 2022, preco: 138000.75, status: "NEGOCIACAO", vendedor: null,
      identificacao: " CHASSI: br901D202200222z / PLACA: BRA-9A01 / STATUS: PENDENTE " },
    { id: 104, modelo: "Hyundai HB20 Comfort Plus", ano: 2025, preco: 95500.00, status: "DISPONIVEL", vendedor: null,
      identificacao: " CHASSI: kr123E202500333w / PLACA: HYU-5J55 / STATUS: OK " },
    { id: 105, modelo: "Ford Ka SE Plus", ano: 2018, preco: 45200.00, status: "DISPONIVEL", vendedor: null,
      identificacao: " CHASSI: us400F201800444q / PLACA: FOR-8220 / STATUS: PENDENTE " },
    { id: 106, modelo: "Fiat Mobi Like", ano: 2024, preco: 69990.00, status: "VENDIDO", vendedor: "Maria Souza",
      identificacao: " CHASSI: it777G202400555p / PLACA: FIA-2B24 / STATUS: FECHADO " },
    { id: 107, modelo: "Jeep Renegade Limited", ano: 2023, preco: 155000.00, status: "NEGOCIACAO", vendedor: null,
      identificacao: " CHASSI: us888H202300666k / PLACA: JPE-6J66 / STATUS: PENDENTE " },
    { id: 108, modelo: "Nissan Kicks Advance", ano: 2021, preco: 110000.00, status: "VENDIDO", vendedor: "Carlos Dantas",
      identificacao: " CHASSI: ja999I202100777j / PLACA: NIK-7777 / STATUS: FECHADO " },
    { id: 109, modelo: "Toyota Corolla Altis", ano: 2024, preco: 185000.90, status: "DISPONIVEL", vendedor: null,
      identificacao: " CHASSI: ja111J202400888h / PLACA: TOY-4F88 / STATUS: OK " },
    { id: 110, modelo: "Caoa Chery Tiggo 5x", ano: 2023, preco: 120000.00, status: "DISPONIVEL", vendedor: null,
      identificacao: " CHASSI: ch222K202300999g / PLACA: TIG-3C99 / STATUS: OK " },
  ];

  const tbody = document.querySelector('tbody');

  const apresenta = (lista = ESTOQUE_CARROS) => {
    tbody.innerHTML = "";
    lista.sort((a, b) => b.preco - a.preco);

    lista.forEach(carro => {
      const tr = document.createElement('tr');
      const info = [
        carro.modelo,
        carro.ano,
        carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        carro.status,
        carro.vendedor || "-"
      ];
      info.forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });

      const tdIdent = document.createElement('td');
      const btnIdent = document.createElement('button');
      btnIdent.textContent = "Analisar ID";
      btnIdent.className = "btn btn-sm btn-info";
      btnIdent.addEventListener("click", () => {
        console.log("Identificação do carro:", carro.identificacao);
      });
      tdIdent.appendChild(btnIdent);
      tr.appendChild(tdIdent);

      const tdAcoes = document.createElement('td');
      if (carro.status === "DISPONIVEL" || carro.status === "NEGOCIACAO") {
        const btnVender = document.createElement('button');
        btnVender.textContent = "Vender";
        btnVender.className = "btn btn-sm btn-success";
        btnVender.addEventListener("click", () => venderCarro(carro.id));
        tdAcoes.appendChild(btnVender);
      } else if (carro.status === "VENDIDO") {
        tdAcoes.textContent = "Fechado";
      }
      tr.appendChild(tdAcoes);

      tbody.appendChild(tr);
    });
  };

  const aplicarFiltros = () => {
    let filtrados = [...ESTOQUE_CARROS];
    const modelo = document.getElementById('modelo').value.toLowerCase();
    const preco = parseFloat(document.getElementById('preco').value);
    const status = document.getElementById('status').value;

    if (modelo) {
      filtrados = filtrados.filter(c =>
        c.modelo.toLowerCase().includes(modelo) ||
        c.ano.toString().includes(modelo)
      );
    }
    if (!isNaN(preco)) {
      filtrados = filtrados.filter(c => c.preco <= preco);
    }
    if (status) {
      filtrados = filtrados.filter(c => c.status === status);
    }

    apresenta(filtrados);
  };

  const venderCarro = (carId) => {
    const carro = ESTOQUE_CARROS.find(c => c.id === carId);
    const nome = prompt("Digite o nome do vendedor:");
    if (nome) {
      carro.status = "VENDIDO";
      carro.vendedor = nome;
      aplicarFiltros();
    }
  };

  document.getElementById('filtros').addEventListener("submit", e => {
    e.preventDefault();
    aplicarFiltros();
  });
  document.getElementById('filtros').addEventListener("reset", () => aplicarFiltros());

  apresenta();
})();