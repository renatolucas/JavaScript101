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