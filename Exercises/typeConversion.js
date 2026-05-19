//Exercise 03
console.log(textNumber + number); //concatenou como se fossem strings: resultou em uma string
console.log(textNumber - number);//fez uma conversão implícita do textNumber para number: resultou em um number
console.log(Number(textNumber) + number); // conversão explícita do textNumber: resultou em um number

/*
A explicação está correta. Muito boa.

Mas faltaram as declarações:

const textNumber = "10";
const number = 5;

Código completo:

const textNumber = "10";
const number = 5;

console.log(textNumber + number); 
// "105"
// The + operator performs string concatenation when one operand is a string.

console.log(textNumber - number);
// 5
// The - operator forces an implicit conversion from string to number.

console.log(Number(textNumber) + number);
// 15
// Number(textNumber) explicitly converts the string to a number before addition.

Aqui está um ponto importante para pensar como back-end:

"10" + 5 // "105"
"10" - 5 // 5

Isso pode gerar bug real em API, principalmente quando dados chegam como string via request, query params, body JSON ou variáveis de ambiente.

Exemplo:

const quantity = "2";
const price = 100;

console.log(quantity * price); // 200
console.log(quantity + price); // "2100"

Por isso, em back-end, conversão explícita é uma prática importante.
*/