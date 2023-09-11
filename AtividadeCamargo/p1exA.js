const readline = require('readline'); //módulo de leitura importado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout              //interface da entrada e saída de dados
});

const opiniao = {
    3: [],
    2: [],
    1: []                             //crio objeto "opiniao" que guarda a opiniao e a idade dos leitores
  };
const leitor = [];
const cidades = new Map();            //crio objetos leitor e cidades que guardam suas resectivas informações

function RealizarPesquisa() {         //função para armazenar os dados dos usuarios com o método "rl.question"
  rl.question('Em qual cidade o leitor mora? ', (cidade) => {
    rl.question('Qual a idade do leitor? ', (idade) => {
      rl.question('Qual a nota do leitor de 1 a 3 sendo: 3 ótimo ,2 bom e 1 regular? ', (nota) => {
        const idadeInt = parseInt(idade);
        const opiniaoInt = parseInt(nota);

        leitor.push({ idade: idadeInt, cidade, opiniao1: opiniaoInt }); 
        opiniao[opiniaoInt].push(idadeInt); //adiciono array leitor que recebe as informações dos leitores e opiniao que recebe as notas 1,2 ou 2 além da idade

        if (!cidades.has(cidade)) {         
          cidades.set(cidade, 0);
        }
        cidades.set(cidade, cidades.get(cidade) + 1); //verifica se a cidade está atualizada, adicionando-a a contagem final

        if (leitor.length < 4) { //MUDAR O 4 PARA 16!!!
          RealizarPesquisa();                         //verifica se o numero de leitores é maior que 16 , caso não for retorna a fução "RealizarPesquisa"
        } else {
          CalculareMostrar();                         //caso for maior que 16 continuará indo para a função "CalculareMostrar"
          rl.close();
        }
      });
    });
  });}
function CalculareMostrar() {                        //função que calcula e exibe na tela a pesquisa
  const MediaIdade = calcularMedia(opiniao[3]);      //objeto para calcular a média dos leitores que tiveram como opinião "3"
  const QuantidadeRegular = opiniao[1].length;       // obj para quantidade de opinião "1"
  const PorcentagemBom = (opiniao[2].length / leitor.length) * 100; //obj q calcula a porcentagem da opinião "2"

  console.log(`A média das idades dos leitores que responderam "ótimo" é: ${MediaIdade.toFixed(2)}`);
  console.log(`A quantidade de leitores que responderam regular é: ${QuantidadeRegular}`);                
  console.log(`A porcentagem de leitores que responderam bom entre todos os leitores é: ${PorcentagemBom.toFixed(2)}%`); //saída

  console.log('Porcentagem de leitores para cada cidade:');
  cidades.forEach((qtd, cidade) => {
    const porcentagemCidade = (qtd / leitor.length) * 100;        //calcula porcentagem das pessoas de cada cidade
    console.log(`${cidade}: ${porcentagemCidade.toFixed(2)}%`);
  });
}

function calcularMedia(arr) {           //função para somar todas as idades no array
  const soma = arr.reduce((total, idade) => total + idade, 0);
  return arr.length > 0 ? soma / arr.length : 0;   //verifica se o array está vazio para calcular a média, caso estiver retorna 0 para evitar divisão por 0
}
RealizarPesquisa();
