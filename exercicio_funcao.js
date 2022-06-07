/*
Exercicio 1 ----
Faça um programa, com uma função que necessite de três argumentos:
dois números e um sinal de operador matemático (+, -, * ou /).
Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
*/
const prompt = require('prompt-sync')();
console.clear();

function calculo(a, b, c){
    let result = 0;

    if (c == '+'){
        result = a + b;
    } else if (c == '-'){
        result = a - b;
    } else if (c == '*'){
        result = a * b;
    } else if (c == '/'){
        result = a / b;
    }  else {
        console.log('Operador inválido');
    }
  
        console.log(result);
}

let op = prompt ('Digite o operador: ');
let n1 = +prompt ('Digite um número: ');
let n2 = +prompt ('Digite outro número: ');

calculo(n1, n2, op);

console.log();