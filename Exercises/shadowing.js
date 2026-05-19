//Exercício 23 — Shadowing
const nome = "Global";

function mostrarNome() {
  const nome = "Local";
  console.log(nome);
}

mostrarNome();
console.log(nome);

/*
Responda:

Qual valor será impresso primeiro? Local
Qual valor será impresso depois? Global
Por quê? Além do fato de que a function mostrarNome() foi invocada antes do console.log, ao buscar uma variável ou constante com o identificador nome, a função encontrou uma dentro do próprio escopo, por isso retornou local.
         Caso não existisse dentro do seu próprio escopo, ela buscaria no escopo acima e encontraria a referência para var nome e printaria "global". No caso,a aplicação printaria global duas vezes, pois a última linha retorna a var global.

Objetivo: entender escopo local e global.
*/

/*
Perfeito. Sua resposta está correta e a explicação está muito boa.

Código:

const nome = "Global";

function mostrarNome() {
  const nome = "Local";
  console.log(nome);
}

mostrarNome();
console.log(nome);

Saída:

Local
Global
Por quê?

Quando esta função executa:

function mostrarNome() {
  const nome = "Local";
  console.log(nome);
}

o JavaScript procura o identificador nome primeiro no escopo local da função.

Ele encontra:

const nome = "Local";

Então imprime:

Local

Depois, fora da função, esta linha executa:

console.log(nome);

Agora o JavaScript está no escopo externo/global, onde encontra:

const nome = "Global";

Então imprime:

Global
Pequeno ajuste na sua explicação

Você escreveu:

encontraria a referência para var nome

No seu código, não é var, é const:

const nome = "Global";

Então o ideal seria dizer:

encontraria a referência para const nome no escopo externo

Ou, de forma mais geral:

encontraria a variável nome no escopo acima
Se não existisse nome dentro da função

Exemplo:

const nome = "Global";

function mostrarNome() {
  console.log(nome);
}

mostrarNome();
console.log(nome);

Saída:

Global
Global

Aqui não há shadowing, porque a função não tem uma variável local chamada nome.

Conceito importante

O que aconteceu no exercício é chamado de shadowing.

Shadowing acontece quando uma variável em um escopo interno tem o mesmo nome de uma variável em um escopo externo.

Exemplo:

const value = "outer";

function test() {
  const value = "inner";
  console.log(value);
}

test();
console.log(value);

Saída:

inner
outer

A variável interna “sombreia” a externa dentro daquele escopo.

Avaliação:

Exercise 23: correto
Conceito de shadowing entendido
Pequeno ajuste: no exemplo era const, não var
*/