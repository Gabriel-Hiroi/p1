const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Insira um ano com 4 digitos para verificarmos se ele é bissexto: ', (ano) => {
  const eBisexto = (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)); //Calcula se o ano é bisexto verificando se é divisivel por 4, 100 e 400 respectivamente
  console.log(`${ano} ${eBisexto ? 'corresponde a' : 'não corresponde a'} um ano bissexto.`); //${ano} insere o ano do usuario e da a saída
  rl.close();
});