(() => {
    "use strict";

    const times = [
        {
            id: 1765,
            name: "Fluminense FC",
            shortName: "Fluminense",
            tla: "FLU",
            crest: "https://crests.football-data.org/1765.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1766,
            name: "CA Mineiro",
            shortName: "Mineiro",
            tla: "CAM",
            crest: "https://crests.football-data.org/1766.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1767,
            name: "Grêmio FBPA",
            shortName: "Grêmio",
            tla: "FBP",
            crest: "https://crests.football-data.org/1767.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1769,
            name: "SE Palmeiras",
            shortName: "Palmeiras",
            tla: "PAL",
            crest: "https://crests.football-data.org/1769.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1770,
            name: "Botafogo FR",
            shortName: "Botafogo",
            tla: "BOT",
            crest: "https://crests.football-data.org/1770.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1771,
            name: "Cruzeiro EC",
            shortName: "Cruzeiro",
            tla: "CRU",
            crest: "https://crests.football-data.org/1771.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1776,
            name: "São Paulo FC",
            shortName: "São Paulo",
            tla: "PAU",
            crest: "https://crests.football-data.org/1776.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1777,
            name: "EC Bahia",
            shortName: "Bahia",
            tla: "BAH",
            crest: "https://crests.football-data.org/1777.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1778,
            name: "SC Recife",
            shortName: "Recife",
            tla: "REC",
            crest: "https://crests.football-data.org/1778.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1779,
            name: "SC Corinthians Paulista",
            shortName: "Corinthians",
            tla: "COR",
            crest: "https://crests.football-data.org/1779.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1780,
            name: "CR Vasco da Gama",
            shortName: "Vasco da Gama",
            tla: "VAS",
            crest: "https://crests.football-data.org/1780.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1782,
            name: "EC Vitória",
            shortName: "Vitória",
            tla: "VIT",
            crest: "https://crests.football-data.org/1782.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1783,
            name: "CR Flamengo",
            shortName: "Flamengo",
            tla: "FLA",
            crest: "https://crests.football-data.org/1783.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 1837,
            name: "Ceará SC",
            shortName: "Ceará",
            tla: "CSC",
            crest: "https://crests.football-data.org/1837.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 3984,
            name: "Fortaleza EC",
            shortName: "Fortaleza",
            tla: "FEC",
            crest: "https://crests.football-data.org/3984.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 4245,
            name: "EC Juventude",
            shortName: "Juventude",
            tla: "JUV",
            crest: "https://crests.football-data.org/4245_large.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 4286,
            name: "RB Bragantino",
            shortName: "Bragantino",
            tla: "RBB",
            crest: "https://crests.football-data.org/4286.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 4364,
            name: "Mirassol FC",
            shortName: "Mirassol",
            tla: "MIR",
            crest: "https://crests.football-data.org/4364.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 6684,
            name: "SC Internacional",
            shortName: "Internacional",
            tla: "SCI",
            crest: "https://crests.football-data.org/6684.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        },
        {
            id: 6685,
            name: "Santos FC",
            shortName: "Santos",
            tla: "SAN",
            crest: "https://crests.football-data.org/6685.png",
            pontos: 0,
            partidasJogadas: 0,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        }
    ];
    const tbody = document.querySelector('tbody');
    const apresentartimes = () =>{
        tbody.innerHTML = "";
        times.forEach((time, index)=>{
            const tr = document.createElement('tr');
            const tdpos = document.createElement('td');
            tdpos.textContent = index + 1;

            const tdtime = document.createElement('td')
            tdpos.classList.add('d-flex', 'align-items-center','gap-2')
            const img = document.createElement('img');
            img.src = time.crest;
            img.alt = `Escudo do ${time.name}`;
            img.style.width = '30px';

            tdtime.appendChild(img);
            const spanmane = document.createElement('span');
            spanmane.textContent = time.name;
            tdtime.appendChild(spanmane);

            
            tr.appendChild(tdpos);
            tr.appendChild(tdtime);
            tbody.appendChild(tr);

            tr.appendChild(tdpos);
            tr.appendChild(tdtime)

            const estatisticas = [
                time.pontos,
                time.partidasJogadas,
                time.vitorias,
                time.empates,
                time.derrotas,
                time.golsMarcados,
                time.golsSofridos,
                time.saldoGols
            ]
            estatisticas.forEach(valor => {
                const td = document.createElement('td');
                td.textContent = valor;
                tr.appendChild(td);
            })

        });
    };
    apresentartimes();
})();