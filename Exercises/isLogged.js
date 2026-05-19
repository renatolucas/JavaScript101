//Exercise 06
const isLoggedIn = false;
const age = 18;

//isLoggedIn ? console.log("Welcome") : console.log("Log in");
//age >= 18 ? console.log("You are of legal age.") : console.log("You are underage.");

const loginMessage = isLoggedIn ? "Welcome" : "Log in";
const ageMessage = age >= 18 ? "You are of legal age." : "You are underage.";

console.log(loginMessage);
console.log(ageMessage);

/*

Está correto. Você usou o ternário adequadamente nos dois casos.

Seu código:

const isLoggedIn = false;
const age = 18;

isLoggedIn ? console.log("Welcome") : console.log("Log in");
(age >= 18) ? console.log("You are of legal age.") : console.log("You are underage.");

Saída esperada:

Log in
You are of legal age.
Pequena melhoria de estilo

Os parênteses aqui não são necessários:

(age >= 18) ? console.log("You are of legal age.") : console.log("You are underage.");

Pode ficar assim:

age >= 18 ? console.log("You are of legal age.") : console.log("You are underage.");

Mas eu faria de uma forma ainda melhor: usar o ternário para gerar um valor, não necessariamente para executar diretamente o console.log.

Exemplo:

const isLoggedIn = false;
const age = 18;

const loginMessage = isLoggedIn ? "Welcome" : "Log in";
const ageMessage = age >= 18 ? "You are of legal age." : "You are underage.";

console.log(loginMessage);
console.log(ageMessage);

Essa versão costuma ser mais legível e mais reutilizável.

Por quê?

O ternário é ideal para escolher entre dois valores:

const status = isLoggedIn ? "online" : "offline";

Quando você usa assim:

isLoggedIn ? console.log("Welcome") : console.log("Log in");

funciona, mas o ternário está sendo usado mais como um if/else compacto.

Não está errado, mas em código profissional eu preferiria:

const message = isLoggedIn ? "Welcome" : "Log in";
console.log(message);
Versão revisada
const isLoggedIn = false;
const age = 18;

const loginMessage = isLoggedIn ? "Welcome" : "Log in";
const ageMessage = age >= 18 ? "You are of legal age." : "You are underage.";

console.log(loginMessage);
console.log(ageMessage);

Avaliação:

Exercise 06: correto
Melhoria principal: usar ternário para retornar valores, não apenas para executar console.log
*/