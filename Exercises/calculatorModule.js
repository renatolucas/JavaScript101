//exercise 24
function sum(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: division by zero";
  }

  return a / b;
}

module.exports = {
  sum,
  subtraction,
  multiply,
  divide
};

/*
Correto. Seu módulo está funcional.

Em calculatorModule.js:

module.exports = {
  sum,
  sub,
  mult,
  div
};

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

Em app.js:

const calc = require("./calculatorModule");

console.log(calc.sum(1, 1));

Saída:

2
Por que funciona mesmo exportando antes das funções?

Isso funciona porque você usou function declarations:

function sum(a, b) {
  return a + b;
}

Declarações de função sofrem hoisting, então podem ser referenciadas antes da declaração no código.

Ou seja, isso funciona:

console.log(sum(1, 1));

function sum(a, b) {
  return a + b;
}

Mas isto não funcionaria da mesma forma:

module.exports = {
  sum
};

const sum = function (a, b) {
  return a + b;
};

Nesse caso, daria erro porque sum ainda não foi inicializada no momento do module.exports.

Melhor organização

Apesar de funcionar, eu colocaria o module.exports no final do arquivo, porque fica mais legível:

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

module.exports = {
  sum,
  sub,
  mult,
  div
};

Essa ordem comunica melhor:

1. Defino as funções
2. Exporto as funções
Melhorando a divisão

Eu também trataria divisão por zero, como você já fez no exercício 12:

function div(a, b) {
  if (b === 0) {
    return "Error: division by zero";
  }

  return a / b;
}
Nomes mais profissionais

Você pode manter nomes curtos, mas para legibilidade eu usaria:

function sum(a, b) {}
function subtract(a, b) {}
function multiply(a, b) {}
function divide(a, b) {}

E exportaria assim:

module.exports = {
  sum,
  subtract,
  multiply,
  divide
};

No app.js:

const calculator = require("./calculatorModule");

console.log(calculator.sum(1, 1));
console.log(calculator.divide(10, 2));
Versão final recomendada

calculatorModule.js:

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: division by zero";
  }

  return a / b;
}

module.exports = {
  sum,
  subtract,
  multiply,
  divide
};

app.js:

const calculator = require("./calculatorModule");

console.log(calculator.sum(1, 1));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 2));
console.log(calculator.divide(10, 0));

Avaliação:

Exercise 24: correto
Bom uso de require e module.exports
Melhorias: exportar no final, tratar divisão por zero e preferir nomes completos
*/