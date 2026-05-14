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
Antes de executar, responda:

Essas variáveis existem fora da função? Não existem. O código gerará erro já na linha 35
Por quê? A variável let e a constante respeitam o escopo e não podem ser acessadas por escopos externos, exceto em escopos aninhados.
         Variáveis do tipo var sofrem içamento e se tornam variáveis globais. Exceto no caso de escopo de funções que elas se comportam como as outras.

Depois rode o código.
*/