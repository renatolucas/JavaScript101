//Exercise 02
let baseSalary = 1000;
let bonus = 50;
const finalSalary = baseSalary + bonus;

console.log(`Final salary: R$ ${finalSalary}`);

/*
Funciona, mas ficou incompleto em relação ao enunciado original, porque faltou o discount.

Além disso, como baseSalary e bonus não mudam, podem ser const.

Uma versão melhor:

const baseSalary = 1000;
const bonus = 50;
const discount = 100;

const finalSalary = baseSalary + bonus - discount;

console.log(`Final salary: R$ ${finalSalary}`);

E uma versão usando operador de atribuição:

const baseSalary = 1000;
const bonus = 50;
const discount = 100;

let finalSalary = baseSalary;

finalSalary += bonus;
finalSalary -= discount;

console.log(`Final salary: R$ ${finalSalary}`);

Essa segunda versão treina melhor += e -=.
*/