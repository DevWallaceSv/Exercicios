//Faça um Programa que leia 20 números inteiros e armazene-os num array.
//Armazene os números pares no array PAR e os números IMPARES no array IMPAR.
//Imprima os três vetores

const prompt = require('prompt-sync')();
console.clear();

let cont = 0;
let geral = [];
let par = [];
let impar = [];
let limite = 5;

while (cont < limite){
let numero = +prompt ('Digite um número ');
geral.push (numero);
cont++
if (numero % 2 == 0){
par.push (numero);
} else {
    impar.push (numero);
}
     }

console.log('geral');
console.log(geral);
console.log('par');
console.log(par);
console.log('impar');
console.log(impar);


console.log();