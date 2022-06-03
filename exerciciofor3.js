// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

const prompt = require('prompt-sync')();
console.clear();

//Aqui ele pede um número pro usuário
let num = +prompt('Digite o número para ver a sua tabuada: ');

// i começa = 1 pra pular o 0
for (let i = 1; i <= 10; i++){
// o valor coletado com o usuário em num, será multiplicado pela quantidade indicada por i (nesse caso 10)
    console.log(num * i);
}

console.log();