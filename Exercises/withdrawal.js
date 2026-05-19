//Exercise 11
let balance = 30;
const withdrawal = 10;
do {
    if(balance >= withdrawal){
        balance -= withdrawal;
        console.log(`New balance: ${balance}`)
    } else{
        console.log("Insufficient balance");
    }

} while (balance > 0)

/*
Está correto. Você demonstrou bem a principal ideia do do while: o bloco executa pelo menos uma vez, mesmo que a condição já seja falsa desde o início.

Seu código:

let balance = 0;
const withdrawal = 10;

do {
  if (balance > 0) {
    balance -= withdrawal;
    console.log(`New balance: ${balance}`);
  } else {
    console.log("Insufficient balance");
  }
} while (balance > 0);

Saída:

Insufficient balance

Mesmo com:

balance = 0;

o código entra no do uma vez antes de verificar:

while (balance > 0)
Pequena melhoria de regra de negócio

Hoje você verifica:

if (balance > 0)

Mas isso permite um problema.

Exemplo:

let balance = 5;
const withdrawal = 10;

Como balance > 0 é verdadeiro, ele faria:

balance -= withdrawal;

Resultado:

New balance: -5

Para saque, a condição correta seria verificar se o saldo é maior ou igual ao valor do saque:

if (balance >= withdrawal)
Versão revisada
let balance = 0;
const withdrawal = 10;

do {
  if (balance >= withdrawal) {
    balance -= withdrawal;
    console.log(`New balance: ${balance}`);
  } else {
    console.log("Insufficient balance");
  }
} while (balance >= withdrawal);

Essa versão evita saldo negativo.

Versão para visualizar melhor o do while

Teste com saldo maior:

let balance = 30;
const withdrawal = 10;

do {
  if (balance >= withdrawal) {
    balance -= withdrawal;
    console.log(`New balance: ${balance}`);
  } else {
    console.log("Insufficient balance");
  }
} while (balance >= withdrawal);

Saída:

New balance: 20
New balance: 10
New balance: 0

Nesse caso, ele para quando não há mais saldo suficiente para outro saque.

Avaliação:

Exercise 11: correto
Melhoria principal: usar balance >= withdrawal em vez de balance > 0
Conceito de do while entendido corretamente
*/