//Exercise 12
function sum (a, b){
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    if (b === 0){
        return "Error: division by zero";
    }
    return a / b;
}

console.log(sum(10, 5));       // 15
console.log(subtract(10, 5));  // 5
console.log(multiply(10, 5));  // 50
console.log(divide(10, 5));    // 2
console.log(divide(10, 0));    // Error: division by zero

/*
Muito bom. O exercício está correto.

Você criou as quatro funções, cada uma retorna o resultado, e tratou divisão por zero.

Seu código:

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
  if (b === 0) {
    return "Error: division by zero";
  } else {
    return a / b;
  }
}

let result = div(5, 0);
console.log(result);

Saída:

Error: division by zero
Pequenas melhorias

Como result não muda, prefira const:

const result = div(5, 0);

Além disso, depois de um return, o else não é obrigatório. Esta versão é mais comum em código profissional:

function div(a, b) {
  if (b === 0) {
    return "Error: division by zero";
  }

  return a / b;
}

Isso é chamado de early return: você trata o caso especial primeiro e depois deixa o fluxo principal mais limpo.

Sobre os nomes das funções

Os nomes estão compreensíveis:

sum
sub
mult
div

Mas, para código mais legível, eu usaria nomes completos:

sum
subtract
multiply
divide

Em inglês profissional, subtract, multiply e divide ficam mais naturais do que sub, mult e div.

Versão revisada
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

const result = divide(5, 0);

console.log(result);
Testes recomendados

Para validar melhor, teste todas as funções:

console.log(sum(10, 5));       // 15
console.log(subtract(10, 5));  // 5
console.log(multiply(10, 5));  // 50
console.log(divide(10, 5));    // 2
console.log(divide(10, 0));    // Error: division by zero

Avaliação:

Exercise 12: correto
Melhorias: usar const para result, aplicar early return e preferir nomes completos
*/