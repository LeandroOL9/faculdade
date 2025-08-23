(() => {
  const aluno = document.getElementById('aluno'),
        notas = document.getElementById('nota'),
        alunosSpan = document.getElementById('alunos'),
        media = document.getElementById('result-med'),
        enviar = document.getElementById('enviar'),
        listaAlunos = document.getElementById('lista');

  let lista = [];
  let totalAlunos = 0;

  enviar.onclick = () => {
    const nome = aluno.value;
    const nota = parseFloat(notas.value);

    //atualiza a nota se existe
    let existe = false;
    for (let i = 0; i < totalAlunos; i++) {
      if (lista[i].nome === nome) {
        lista[i].nota = nota;
        existe = true;
        break;
      }
    }

    if (!existe) {
      lista[totalAlunos] = {nome: nome, nota: nota};
      totalAlunos++;
    }

    alunosSpan.textContent = totalAlunos;

    let somaNotas = 0;
    for (let i = 0; i < totalAlunos; i++) {
      somaNotas += lista[i].nota;
    }
    media.textContent = (somaNotas / totalAlunos).toFixed(2);

    aluno.value = "";
    notas.value = "";

    
  };
})();