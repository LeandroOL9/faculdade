(() => {
  const aluno = document.getElementById('aluno'),
        notas = document.getElementById('nota'),
        alunos = document.getElementById('alunos'),
        media = document.getElementById('result-med'),
        enviar = document.getElementById('enviar');

  let somaNotas = 0,
      totalAlunos = 0;

  enviar.onclick = () => {
    const nota = parseFloat(notas.value);

    totalAlunos++;
    somaNotas += nota;
    alunos.textContent = totalAlunos;
    media.textContent = (somaNotas / totalAlunos).toFixed(2);

    aluno.value = "";
    notas.value = "";
  };
})();