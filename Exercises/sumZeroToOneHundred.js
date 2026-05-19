//Exercise 09
let sum = 0;
for (let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);

/*
Pequeno ajuste ao enunciado

O exercício pedia somar de 1 até 100. Então, para ficar exatamente alinhado:

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(`The sum is: ${sum}`);

Saída:

The sum is: 5050
Comentário técnico

Esta linha está perfeita:

sum += i;

Ela é equivalente a:

sum = sum + i;

Esse é um bom uso de operador de atribuição.

Avaliação:

Exercise 09: correto
Pequeno ajuste: começar em 1 para seguir exatamente o enunciado
Bom uso de +=
*/