//Exercise 25
function validateEmail(email) {
  return typeof email === "string" && email.includes("@");
}

function validateAge(age) {
  return typeof age === "number" && age >= 18;
}

function validateName(name) {
  return typeof name === "string" && name.length >= 3;
}

module.exports = {
  validateEmail,
  validateAge,
  validateName
};

/*
Correto. Você entendeu bem a ideia de separar validações em um módulo e importar no app.js.

Seu código está funcional:

validations.js

module.exports = {
  emailValidation,
  ageValidation,
  nameValidation
};

function emailValidation(email) {
  return email.includes("@");
}

function ageValidation(age) {
  return age > 0 && typeof age === "number";
}

function nameValidation(name) {
  return typeof name === "string";
}

app.js

const validator = require("./validations");

const user = {
  name: "Renato",
  age: 29,
  email: "renato@email.com"
};

if (
  validator.nameValidation(user.name) &&
  validator.ageValidation(user.age) &&
  validator.emailValidation(user.email)
) {
  console.log("Valid user");
} else {
  console.log("Invalid user");
}

Saída:

Valid user
Melhorias importantes

No exercício original, as regras eram:

Nome deve ter pelo menos 3 caracteres
Idade deve ser maior ou igual a 18
Email deve conter "@"

Sua versão valida se:

name é string
age é number e maior que 0
email contém "@"

Então está correto estruturalmente, mas as regras ficaram mais fracas que o enunciado.

Por exemplo, este usuário passaria parcialmente na sua validação:

const user = {
  name: "A",
  age: 10,
  email: "a@email.com"
};

Mas deveria ser inválido.

Versão revisada

validations.js

function emailValidation(email) {
  return typeof email === "string" && email.includes("@");
}

function ageValidation(age) {
  return typeof age === "number" && age >= 18;
}

function nameValidation(name) {
  return typeof name === "string" && name.length >= 3;
}

module.exports = {
  emailValidation,
  ageValidation,
  nameValidation
};

app.js

const validator = require("./validations");

const user = {
  name: "Renato",
  age: 29,
  email: "renato@email.com"
};

const isValidUser =
  validator.nameValidation(user.name) &&
  validator.ageValidation(user.age) &&
  validator.emailValidation(user.email);

if (isValidUser) {
  console.log("Valid user");
} else {
  console.log("Invalid user");
}

Essa linha melhora a legibilidade:

const isValidUser =
  validator.nameValidation(user.name) &&
  validator.ageValidation(user.age) &&
  validator.emailValidation(user.email);

Em vez de colocar toda a condição diretamente dentro do if.

Melhorando os nomes

Se quiser nomes mais naturais em inglês, eu usaria:

validateEmail
validateAge
validateName

Em inglês, funções geralmente ficam bem com verbo no início.

Exemplo:

function validateEmail(email) {
  return typeof email === "string" && email.includes("@");
}

Então o uso fica mais natural:

validator.validateEmail(user.email)
validator.validateAge(user.age)
validator.validateName(user.name)
Versão final recomendada

validations.js

function validateEmail(email) {
  return typeof email === "string" && email.includes("@");
}

function validateAge(age) {
  return typeof age === "number" && age >= 18;
}

function validateName(name) {
  return typeof name === "string" && name.length >= 3;
}

module.exports = {
  validateEmail,
  validateAge,
  validateName
};

app.js

const validator = require("./validations");

const user = {
  name: "Renato",
  age: 29,
  email: "renato@email.com"
};

const isValidUser =
  validator.validateName(user.name) &&
  validator.validateAge(user.age) &&
  validator.validateEmail(user.email);

if (isValidUser) {
  console.log("Valid user");
} else {
  console.log("Invalid user");
}

Avaliação:

Exercise 25: estruturalmente correto
Bom uso de module.exports e require
Melhoria principal: aplicar exatamente as regras do enunciado
Boa separação de responsabilidade em módulo de validação
*/