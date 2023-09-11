const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Preco = {
  'File Duplo': [24.9, 25.8],
  'Alcatra': [25.9, 26.8],
  'Picanha': [36.9, 37.8]
};
rl.question('Insira o tipo de carne (File Duplo, Alcatra ou Picanha): ', (TipoCarne) => {
  rl.question('Insira a quantidade (Kg): ', (KGInput) => {
    const KG = parseFloat(KGInput);

    rl.question('Você possui o Cartão Tabajara? (Digite "S" se possui, ou N caso contrário): ', (CartaoInput) => {
      const Cartao = CartaoInput.toUpperCase() === 'S'; //converte resposta CartaoInput para maiúsculas com toUpperCase() e a compara com 'S'
      if (!(TipoCarne in Preco)) {
        console.error('Produto inválido, verifique se o nome da carne está escrito corretamente.'); //verifica se o tipo da carne é valido
        rl.close();
        return;
      }
      const [PrecoNormal, PrecoCartao] = Preco[TipoCarne];
      const PrecoKG = Cartao ? PrecoCartao : PrecoNormal; //determina o preço por kg verificando se possui ou não o cartão
      const Total = PrecoKG * KG; //calcula valor total
      const Desconto = Cartao ? Total * 0.05 : 0;  //calcula desconto
      const aPagar = Total - Desconto; //calcula valor final

      console.log('CUPOM FISCAL');
      console.log(`Valor Total: R$ ${Total.toFixed(2)}`);
      console.log(`Carne: ${TipoCarne}`);
      console.log(`Quantidade: ${KG} Kg`);                                              //SAÍDA
      console.log(`Forma de pagamento: ${Cartao ? 'Cartão Tabajara' : 'Dinheiro'}`);
      console.log(`Desconto: R$ ${Desconto.toFixed(2)}`);
      console.log(`Valor final: R$ ${aPagar.toFixed(2)}`);
      rl.close();
    });
  });
});
