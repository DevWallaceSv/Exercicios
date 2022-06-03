// Peça ao usuário uma quantidade de linhas e 
// outra de colunas, e imprima essas informações na 
// forma de uma tabela 
// como no exemplo de 3 linhas e 4 colunas:

// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]


const prompt = require('prompt-sync')();
console.clear();

// Aqui ele pergunta pro usuário quantas linhas e quantas colunas ele quer colocar
let linhas = +prompt('Quantas linhas? ');
let colunas = +prompt('Quantas colunas? ');

// Aqui ele cria uma array pra armazenar os valores recebidos do usuário
let arrayLinhas = [];

// Aqui ele cria um for do geral que vai criar quantas linhas o usuário pediu sempre adicionando +1 pra cada novo teste
for (let i = 0; i < linhas; i++){
    let arrayColunas = [];

// Aqui ele cria um for pra ficar repetindo até chegar a quantidade de linhas pedida pelo usuário, com a quantidade de colunas recebidas pelo usuário
    for (let a = 0; a < colunas; a++){

// Aqui ele empurra pra array a quantidade de colunas recebidas do usuário
        arrayColunas.push(a + i);
    }

// Aqui ele empurra pra array a quantidade de linhas recebidas do usuário
    arrayLinhas.push(arrayColunas)
}

// Aqui ele usa o i of pra separar as arrays de linhas
for (let i of arrayLinhas){
    console.log(i)
}


console.log();