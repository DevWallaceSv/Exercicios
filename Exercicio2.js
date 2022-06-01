//Faça um Programa que peça a idade e a altura de 5 pessoas,
//armazene cada informação no seu respectivo array.
//Imprima a média de idade e de altura.

const prompt = require('prompt-sync')();
console.clear();

console.log('Qual a sua idade(anos) e altura(m)');
console.log();

//Aqui ele cria as arrays.
const arrayIdade = []
const arrayAltura = []

//Aqui ele vai pedir a idade e a altura dos usuários.
let p1Idade = +prompt('Digite sua idade ');
let p1Altura = +prompt('Digite sua altura ');
console.log();

let p2Idade = +prompt('Digite sua idade ');
let p2Altura = +prompt('Digite sua altura ');
console.log();

let p3Idade = +prompt('Digite sua idade ');
let p3Altura = +prompt('Digite sua altura ');
console.log();

let p4Idade = +prompt('Digite sua idade ');
let p4Altura = +prompt('Digite sua altura ');
console.log();

let p5Idade = +prompt('Digite sua idade ');
let p5Altura = +prompt('Digite sua altura ');
console.log();

//Aqui ele vai empurrar os valores de idade para a array.
arrayIdade.push(
    p1Idade, 
    p2Idade, 
    p3Idade, 
    p4Idade, 
    p5Idade
    );
console.log('Array de idade');
console.log(arrayIdade);
console.log();

//Aqui ele vai empurrar os valores de altura para a array.
arrayAltura.push(p1Altura, 
    p2Altura, 
    p3Altura, 
    p4Altura, 
    p5Altura
    );
console.log('Array de altura');
console.log(arrayAltura);
console.log();

//Aqui ele vai somar as idades.
let mediaIdade = 
p1Idade + 
p2Idade + 
p3Idade +
p4Idade +
p5Idade;

//Aqui ele vai somar as alturas.
let mediaAltura = 
p1Altura + 
p2Altura + 
p3Altura + 
p4Altura + 
p5Altura;

//Aqui ele vai mostrar no terminal as médias.
console.log('Média de idade = ');
console.log(mediaIdade / 5);
console.log();

console.log('Média de altura = ');
console.log(mediaAltura / 5);



console.log();