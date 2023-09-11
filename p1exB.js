const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function CalcMedia(notas) {
    return notas.reduce((total, nota) => total + nota, 0) / notas.length;  //calcula a média das notas dos 5 testes com "reduce"
}
function CalcClassificacao(nota) {  //calcula a classificação
  const media = CalcMedia(nota);
  if (media >= 70) {         //se a média for maior ou igual a 70 continuar o código
    if (nota.includes(0)) {  //se houver uma nota 0 = reprovado
      return "Você foi reprovado";
    } else if (nota.includes(100)) {  //se houver uma nota 100 = A
      return "A";
    } else if (
      (nota[0] >= 70 && nota[1] >= 70 && nota[3] >= 70) && 
      nota[2] < 70 &&   // verifica se as notas dos testes 1 2 e 4 respectivamente estão maiores que 70 e os testes 3 e 5 estão menores que 70
      nota[4] < 70 
    ) {
      return "B";
    } else {         //se não C
      return "C";
    }
  } else {
    return "Você foi reprovado"; //se não for maior ou igual a 70 = reprovado
  }}

rl.question('Insira a nota do Exame I: ', (nota1) => {
  rl.question('Insira a nota do Exame II: ', (nota2) => {
    rl.question('Insira a nota do Exame III: ', (nota3) => {
      rl.question('Insira a nota do Exame IV: ', (nota4) => {
        rl.question('Insira a nota do Exame V: ', (nota5) => {        //saída
          const nota = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3), parseFloat(nota4), parseFloat(nota5)]; //notas armazenadas como floats e armazenadas em "notas"
          const classificacao = CalcClassificacao(nota);
          console.log(`Sua classificação final foi: ${classificacao}`);
          rl.close();
        });
      });
    });
  });});

