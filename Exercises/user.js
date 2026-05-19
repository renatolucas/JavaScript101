//Exercise 01
const name = "Renato Lucas";
let age =  29;
let email = "renato@email.com";
let active = true;

console.log(`User ${name}, ${age} years old, e-mail: ${email}, is active: ${active}`);
active = false;
console.log(`User ${name}, ${age} years old, e-mail: ${email}, is active: ${active}`);

/*
Está correto.

Só faria pequenos ajustes de intenção:

const name = "Renato Lucas";
const age = 29;
const email = "renato@email.com";
let active = true;

Como age e email não mudam, faz mais sentido usar const.

Versão revisada:

const name = "Renato Lucas";
const age = 29;
const email = "renato@email.com";
let active = true;

console.log(`User ${name}, ${age} years old, e-mail: ${email}, is active: ${active}`);

active = false;

console.log(`User ${name}, ${age} years old, e-mail: ${email}, is active: ${active}`);

Comentário técnico: const não significa “valor eterno do universo”. Significa que aquela variável não pode receber outra atribuição.
*/