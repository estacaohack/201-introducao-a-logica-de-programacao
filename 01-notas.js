/**
  Criar um programa que calcula a média de um aluno e determina se ele foi
  aprovado ou não, baseado nos seguintes critérios:

  - Duas provas e um trabalho, sendo a segunda prova com peso 2
  - A média de aprovação é 7
*/

let prova1 = 8;
let prova2 = 5;
let trabalho = 6;

let media = (prova1 + prova2 * 2 + trabalho) / 4;

//console.log(media); //descomentar para ver a média

if(media >= 7){
	console.log('Aluno foi aprovado');
} else {
	console.log('Aluno foi reprovado');
}
