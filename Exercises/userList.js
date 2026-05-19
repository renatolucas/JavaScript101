//Exercise 16
const users = ["Renato", "Lucas", "Ana", "Marcos"];

for (const user of users){
    console.log(user);
}

console.log(`Total users: ${users.length}`);
console.log(`First user: ${users[0]}`);
console.log(`Last user: ${users[users.length - 1]}`);

/*
Correto. Excelente uso de for...of.

Seu código:

const users = ["Renato", "Lucas", "Ana", "Marcos"];

for (const user of users) {
  console.log(user);
}

console.log(users.length);
console.log(users[0]);
console.log(users[users.length - 1]);

Saída esperada:

Renato
Lucas
Ana
Marcos
4
Renato
Marcos
O que ficou bom

Você usou:

for (const user of users)

Isso é muito adequado quando você quer percorrer os valores do array.

Comparando:

for (const user of users) {
  console.log(user);
}

é mais legível do que:

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

Para esse caso, for...of é uma ótima escolha.

Pequeno ajuste de escrita

Só tem um typo no comentário:

//Exerciese 16

O correto seria:

// Exercise 16
Pequena melhoria na saída

Para deixar o console mais descritivo:

const users = ["Renato", "Lucas", "Ana", "Marcos"];

for (const user of users) {
  console.log(user);
}

console.log(`Total users: ${users.length}`);
console.log(`First user: ${users[0]}`);
console.log(`Last user: ${users[users.length - 1]}`);

Saída:

Renato
Lucas
Ana
Marcos
Total users: 4
First user: Renato
Last user: Marcos
Observação importante

Esta linha está perfeita:

users[users.length - 1]

Como arrays começam no índice 0, o último elemento sempre está em:

array.length - 1

No seu caso:

users.length // 4
users[3]     // "Marcos"

Avaliação:

Exercise 16: correto
Bom uso de for...of
Boa forma de acessar o último elemento
*/
