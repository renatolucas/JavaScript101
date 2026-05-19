//Exercise 13
function validateUser(name, age, email) {
  const isNameValid = name.length >= 3;
  const isAgeValid = age >= 18;
  const isEmailValid = email.includes("@");

  return isNameValid && isAgeValid && isEmailValid;
}

console.log(validateUser("Renato", 29, "renato@email.com"));
console.log(validateUser("Jo", 29, "jo@email.com"));
console.log(validateUser("Ana", 17, "ana@email.com"));
console.log(validateUser("Carlos", 25, "carlos.email.com"));

/*
Correto. Sua função valida exatamente as três regras do exercício:

function validateUser(name, age, email) {
  if (name.length >= 3 && email.includes("@") && age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(validateUser("Renato", 29, "renato@email.com"));

Saída:

true
Pequena melhoria

Quando uma condição já gera true ou false, você pode retornar a própria expressão:

function validateUser(name, age, email) {
  return name.length >= 3 && email.includes("@") && age >= 18;
}

Isso é equivalente ao seu código.

A expressão:

name.length >= 3 && email.includes("@") && age >= 18

já retorna true ou false.

Sobre a vírgula final

Você escreveu:

console.log(validateUser('Renato', 29 , 'renato@email.com',));

Essa vírgula depois do último argumento é permitida em JavaScript:

validateUser("Renato", 29, "renato@email.com",)

Mas neste momento eu evitaria para manter o código mais limpo:

console.log(validateUser("Renato", 29, "renato@email.com"));
Versão revisada
function validateUser(name, age, email) {
  return name.length >= 3 && email.includes("@") && age >= 18;
}

console.log(validateUser("Renato", 29, "renato@email.com"));
console.log(validateUser("Jo", 29, "jo@email.com"));
console.log(validateUser("Ana", 17, "ana@email.com"));
console.log(validateUser("Carlos", 25, "carlos.email.com"));

Saída esperada:

true
false
false
false
Versão mais didática para back-end

Em aplicações reais, às vezes é melhor separar as regras em variáveis:

function validateUser(name, age, email) {
  const isNameValid = name.length >= 3;
  const isAgeValid = age >= 18;
  const isEmailValid = email.includes("@");

  return isNameValid && isAgeValid && isEmailValid;
}

Essa versão é mais fácil de debugar e evoluir.

Por exemplo, no futuro você poderia trocar:

const isEmailValid = email.includes("@");

por uma validação mais robusta.

Avaliação:

Exercise 13: correto
Melhoria principal: retornar a expressão booleana diretamente
Boa lógica com && e includes()
*/
