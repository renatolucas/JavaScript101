//mini project 1
const users = [];

function registerUser(name, age, email){
    if(name.length >= 3 && age >= 18 && email.includes("@")){
        const active = true;
        const user = {name, age, email, active};
        users.push(user);
        console.log("Registration successful.")
    } else {
        console.error(`Error: ${name} is an invalid user`);
    }
}

registerUser("Renato", 29, "renato@email.com");
registerUser("Ana", 17, "ana@email.com");
registerUser("João", 25, "joao@email.com");

for (const user of users){
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log(user.active);
    console.log("--------------")
}

/*
Muito bom. O mini-projeto está funcional e já combina vários fundamentos importantes:

array
objeto
função
if/else
validação
push()
for...of

A saída esperada será algo próximo de:

Registration successful.
Error: Ana is an invalid user
Registration successful.
Renato
29
renato@email.com
true
--------------
João
25
joao@email.com
true
--------------
Pontos corretos

A validação principal está certa:

if (name.length >= 3 && age >= 18 && email.includes("@"))

Você criou um objeto usando shorthand property:

const user = { name, age, email, ativo };

Isso é equivalente a:

const user = {
  name: name,
  age: age,
  email: email,
  ativo: ativo
};

Esse é um recurso muito usado em JavaScript moderno.

Ponto crítico: falta declarar user no for

Você escreveu:

for (user of users) {

O correto é:

for (const user of users) {

Sem const, let ou var, você pode criar uma variável global acidental.

Versão correta:

for (const user of users) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
  console.log(user.ativo);
  console.log("--------------");
}

Esse é o mesmo ponto que apareceu no exercício 18 com o i.

Regra prática:

Sempre declare a variável do loop.
Consistência de idioma

Você está usando inglês no código, então eu trocaria:

const ativo = true;

por:

const active = true;

E no objeto:

const user = { name, age, email, active };
Nome da função

userRegistration é compreensível, mas como função normalmente representa uma ação, eu usaria verbo:

registerUser

Fica mais natural:

registerUser("Renato", 29, "renato@email.com");
Versão revisada
const users = [];

function registerUser(name, age, email) {
  if (name.length >= 3 && age >= 18 && email.includes("@")) {
    const active = true;
    const user = { name, age, email, active };

    users.push(user);

    console.log("Registration successful.");
  } else {
    console.error(`Error: ${name} is an invalid user.`);
  }
}

registerUser("Renato", 29, "renato@email.com");
registerUser("Ana", 17, "ana@email.com");
registerUser("João", 25, "joao@email.com");

for (const user of users) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
  console.log(user.active);
  console.log("--------------");
}
Versão um pouco mais profissional

Para código back-end, eu separaria a validação em uma variável:

const isValidUser = name.length >= 3 && age >= 18 && email.includes("@");

Assim:

const users = [];

function registerUser(name, age, email) {
  const isValidUser = name.length >= 3 && age >= 18 && email.includes("@");

  if (!isValidUser) {
    console.error(`Error: ${name} is an invalid user.`);
    return;
  }

  const user = {
    name,
    age,
    email,
    active: true
  };

  users.push(user);

  console.log("Registration successful.");
}

registerUser("Renato", 29, "renato@email.com");
registerUser("Ana", 17, "ana@email.com");
registerUser("João", 25, "joao@email.com");

for (const user of users) {
  console.log(user);
}

Aqui usamos early return:

if (!isValidUser) {
  console.error(...);
  return;
}

Ou seja: se for inválido, encerra a função imediatamente. Se passou pela validação, segue o fluxo principal.

Avaliação
Mini Project 1: correto
Ponto crítico: declarar const user no for...of
Melhorias: active em vez de ativo, registerUser em vez de userRegistration
Boa aplicação de array, objeto, função e validação
*/
