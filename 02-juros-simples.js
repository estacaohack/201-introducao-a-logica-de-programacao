/**
  Crie um programa que calcula juros simples baseado nos seguintes valores:

  - Valor emprestado: 300
  - Juros ao mês: 2,5%
  - Tempo de empréstimo: 6 meses
*/
let valorEmprestimo = 300;
let juros = 0.025;
let tempo = 6;

let valorJuros = valorEmprestimo * juros * tempo;
let valorTotal = valorJuros + valorEmprestimo;

console.log(`O valor dos juros é R$ ${valorJuros} e o valor final é R$ ${valorTotal}`);
