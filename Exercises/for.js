//Exercise 08
for (let i = 1; i <= 10; i++){
   if(i % 2 === 0){
    console.log(i)
   }
}

/*
Está correto. Você resolveu as duas partes do exercício:

for (let i = 1; i <= 10; i++) {
  // console.log(i);

  if (i % 2 == 0) {
    console.log(i);
  }
}

Saída:

2
4
6
8
10
Pequena melhoria

Use === em vez de ==:

if (i % 2 === 0) {
  console.log(i);
}

Neste caso, i % 2 sempre será número, então == não vai causar problema prático. Mas é bom criar o hábito de usar ===.

Versão revisada
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
Alternativa mais direta

Como você quer apenas os pares, também poderia começar em 2 e incrementar de 2 em 2:

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

Essa versão é mais eficiente e expressa melhor a intenção: “percorrer apenas números pares”.

Avaliação:

Exercise 08: correto
Melhoria principal: trocar == por ===
Alternativa interessante: usar i += 2
*/