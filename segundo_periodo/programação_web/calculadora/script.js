function limpar(){
    const Clear = document.getElementById('visor');
    Clear.value = 0; 
}
function apagarUltimo(){
    const visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1) || "0";
}
function executarExpr(){
    const visor = document.getElementById('visor');

        visor.value = eval(visor.value);

}
function AddInExp(valor){
    const visor = document.getElementById('visor');
    var expr = visor.value === "0" ? "" : visor.value;
    visor.value = expr + valor;
}

function AddEventBtns() {
    const btns = document.querySelectorAll('.btn-n');
    if (btns && btns.length > 0) {
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                let { value, acao, operacao } = btn.dataset;
                
                if(acao && acao === 'limpar'){
                    return limpar();
                }
                if(acao && acao === 'igual'){
                    return executarExpr();
                }
                if(acao && acao === 'apagar'){
                    return apagarUltimo();
                }
                if(operacao){
                    return AddInExp(operacaoSimbolo(operacao));
                }
                if(value){
                    return AddInExp(value);
                }
            });
        });
    }
}

function operacaoSimbolo(operacao){
    switch(operacao){
        case 'soma': return '+';
        case 'subtrai': return '-';
        case 'divide': return '/';
        case 'multplica': return '*';
        default: return '';
    }
}

AddEventBtns();
