//Exercise 18
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

/*
Está correto na lógica: você percorreu o array, verificou quais números são pares e adicionou no array evenNumbers.

Seu código gera:

[2, 4, 6, 8, 10]

Mas há um ponto muito importante:

for (i = 0; i <= numbers.length - 1; i++)

Você usou i sem declarar com let, const ou var.

Isso pode criar uma variável global acidental em JavaScript, dependendo do modo de execução. Em código profissional, isso é um problema sério.

O correto é:

for (let i = 0; i <= numbers.length - 1; i++)

ou, de forma mais comum:

for (let i = 0; i < numbers.length; i++)

A condição:

i < numbers.length

é mais usada do que:

i <= numbers.length - 1

As duas funcionam, mas i < numbers.length é mais idiomático.

Versão corrigida
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
Alternativa usando for...of

Como você não precisa do índice i, poderia usar:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

console.log(evenNumbers);

Essa versão fica mais limpa porque você trabalha diretamente com o valor de cada item.

Avaliação
Exercise 18: correto
Ponto crítico: declarar o i com let no for
Melhoria: usar i < numbers.length ou for...of
Bom uso de push()
*/
