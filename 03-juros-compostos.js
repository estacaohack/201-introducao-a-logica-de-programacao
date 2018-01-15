/**
  Crie um programa que calcula compostos simples baseado nos seguintes valores:

  - Valor emprestado: 300
  - Juros ao mês: 2,5%
  - Tempo de empréstimo: 6 meses
*/
let valorEmprestimo = 100000;
let juros = 0.025;
let tempo = 6;

let valorTotal = valorEmprestimo * (1 + juros) ** tempo;
let valorJuros = valorTotal - valorEmprestimo;

console.log(`O valor dos juros é R$ ${valorJuros} e o valor final é R$ ${valorTotal}`);
