//Exercício 21 — Escopo com let, const e var

//Analise o código abaixo antes de executar:

// if (true) {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);

/*
Responda antes de rodar:

O que será impresso? 10 seguido de erro
Qual linha dará erro? Linha 12
Por quê? A variável b e a constante c pertencem ao escopo no if. Dessa forma não é posssível acessá-las fora desse escopo. Casso fossem escopos aninhados, seria possívle pois o interpretador as buscaria no esscopo mais acima. 
         A variável a é printada pois ela é do tipo var, assim sendo, sofre hoisting e é içada ao escopo mais amplo tornando-se uma variável global.
Depois execute e valide sua resposta.
*/
//--------------------------------------------------------------------------------------
//Exercício 22 — Escopo de função

//Analise:

function testeEscopo() {
  var nome = "Renato";
  let idade = 29;
  const ativo = true;
}

console.log(nome);
console.log(idade);
console.log(ativo);

/*

Excelente. Sua análise do Exercise 21 está praticamente correta, com um ajuste conceitual importante sobre var.

Exercise 21

Código:

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);
console.log(b);
console.log(c);

Sua resposta:

O que será impresso? 10 seguido de erro

Correto.

A execução será:

10
ReferenceError: b is not defined

E esta linha nem chega a ser executada:

console.log(c);

Porque o programa para no erro anterior:

console.log(b);
Sobre let e const

Você explicou bem:

b e c pertencem ao escopo do if

Mais precisamente, let e const têm escopo de bloco.

Este bloco:

{
  var a = 10;
  let b = 20;
  const c = 30;
}

cria um escopo próprio para b e c.

Por isso:

console.log(b);
console.log(c);

fora do bloco gera erro.

Ajuste importante sobre var

Você escreveu:

A variável a é printada pois ela é do tipo var, assim sendo, sofre hoisting e é içada ao escopo mais amplo tornando-se uma variável global.

Aqui está quase certo, mas precisa de refinamento.

var não respeita escopo de bloco, mas respeita escopo de função.

Então, neste caso:

if (true) {
  var a = 10;
}

como o if está no escopo global do arquivo, a fica acessível fora do if.

Mas ela não vira “global” sempre.

Exemplo:

function test() {
  if (true) {
    var a = 10;
  }

  console.log(a); // 10
}

test();

console.log(a); // ReferenceError

Aqui a sobe para o escopo da função test, não para o escopo global.

A regra correta é:

var tem escopo de função, não escopo de bloco.

E:

let e const têm escopo de bloco.
Sobre hoisting

Também vale separar duas coisas:

1. Escopo

Define onde a variável pode ser acessada.

2. Hoisting

Define como declarações são tratadas na fase de criação do contexto de execução.

Exemplo com var:

console.log(a); // undefined

var a = 10;

O JavaScript interpreta de forma parecida com:

var a;

console.log(a); // undefined

a = 10;

Ou seja, a declaração é içada, mas a atribuição não.

Exercise 22

Código:

function testeEscopo() {
  var nome = "Renato";
  let idade = 29;
  const ativo = true;
}

console.log(nome);
console.log(idade);
console.log(ativo);

Antes de executar, a resposta correta é:

Nenhuma dessas variáveis existe fora da função.

A primeira linha já gera erro:

console.log(nome);

Erro:

ReferenceError: nome is not defined

E o programa nem chega a executar:

console.log(idade);
console.log(ativo);
Por quê?

Porque var, let e const declaradas dentro de uma função pertencem ao escopo da função.

Mesmo var não sai da função.

Exemplo:

function testeEscopo() {
  var nome = "Renato";
  let idade = 29;
  const ativo = true;

  console.log(nome);  // Renato
  console.log(idade); // 29
  console.log(ativo); // true
}

testeEscopo();

console.log(nome); // ReferenceError
Comparação direta entre Exercise 21 e 22
Bloco if
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // não executa

Dentro de bloco:

var escapa do bloco
let não escapa do bloco
const não escapa do bloco
Função
function testeEscopo() {
  var nome = "Renato";
  let idade = 29;
  const ativo = true;
}

console.log(nome);  // ReferenceError
console.log(idade); // não executa
console.log(ativo); // não executa

Dentro de função:

var não escapa da função
let não escapa da função
const não escapa da função
Regra para memorizar
var      -> escopo de função
let      -> escopo de bloco
const    -> escopo de bloco

E:

bloco = tudo entre { }
função = function, arrow function ou método

Exemplo de bloco:

if (true) {
}

for (...) {
}

while (...) {
}

{
}
Avaliação
Exercise 21: correto, com ajuste sobre var
Exercise 22: a resposta correta é que todas dão erro fora da função
Ponto central aprendido: var respeita função, mas não respeita bloco
*/