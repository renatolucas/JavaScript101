/*
Exercício 24 — Criando módulo de calculadora

Crie dois arquivos:

calculadora.js
app.js

Em calculadora.js, crie funções:

somar
subtrair
multiplicar
dividir

Exporte essas funções usando:

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir
};

Em app.js, importe usando:

const calculadora = require("./calculadora");

Depois use:

console.log(calculadora.somar(10, 5));

Objetivo: entender require e module.exports.
*/
module.exports = {
  sum,
  sub,
  mult,
  div
};

function sum(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}