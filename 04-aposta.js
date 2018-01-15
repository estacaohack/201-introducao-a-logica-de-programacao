/**
  Crie um programa que simula um dado de 6 faces e compara o resultado
  de um lançamento com uma variável de aposta. Caso o resultado no dado
  seja o mesmo da variável de aposta, o jogador é vitorioso.
*/

let numero = Math.random() * 6;
let dado = Math.ceil(numero);
let chute = 4;

if(chute == dado){
	console.log(`O valor do dado foi ${dado}. Você venceu!`);
} else {
	console.log(`O valor do dado foi ${dado}. Você perdeu!`);
}
