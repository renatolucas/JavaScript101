//Exercise 15
((init) => {
    console.log(init)
})("System started")

((name) => {
    console.log(`Welcome, ${name}`);
})("Renato")

/*
Correto. Você usou IIFE com arrow function, e isso é totalmente válido.

Seu código:

((init) => {
  console.log(init);
})("System started");

let name = "Renato";

((name) => {
  console.log(`Welcome, ${name}`);
})("Renato");

Saída:

System started
Welcome, Renato
O que você fez corretamente

Você criou uma função anônima e executou imediatamente:

((init) => {
  console.log(init);
})("System started");

A estrutura é:

((parametro) => {
  // código
})(argumento);

Isso é uma IIFE: Immediately Invoked Function Expression.

Pequena melhoria

Esta variável ficou desnecessária:

let name = "Renato";

Porque você não usou ela. Você passou "Renato" diretamente para a IIFE:

((name) => {
  console.log(`Welcome, ${name}`);
})("Renato");

Então você poderia remover:

((name) => {
  console.log(`Welcome, ${name}`);
})("Renato");

Ou usar a variável:

const name = "Renato";

((userName) => {
  console.log(`Welcome, ${userName}`);
})(name);

Eu prefiro essa versão porque evita repetir o valor "Renato".

Ponto importante sobre escopo

Você fez algo interessante aqui:

let name = "Renato";

((name) => {
  console.log(`Welcome, ${name}`);
})("Renato");

O name dentro da IIFE é um parâmetro local. Ele “sombreia” o name externo.

Exemplo:

const name = "External Renato";

((name) => {
  console.log(name);
})("Internal Renato");

console.log(name);

Saída:

Internal Renato
External Renato

Isso acontece porque a IIFE cria seu próprio escopo.

Versão revisada
(() => {
  console.log("System started");
})();

const name = "Renato";

((userName) => {
  console.log(`Welcome, ${userName}`);
})(name);
Versão tradicional do enunciado

O enunciado sugeria a forma clássica com function:

(function () {
  console.log("System started");
})();

(function (userName) {
  console.log(`Welcome, ${userName}`);
})("Renato");

As duas formas estão corretas:

function expression IIFE: correta
arrow function IIFE: correta

Avaliação:

Exercise 15: correto
Melhoria principal: remover variável não usada ou passá-la como argumento
Bom entendimento de IIFE e escopo isolado
*/