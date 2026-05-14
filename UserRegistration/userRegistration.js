/* 
Mini-projeto 1 — Sistema de cadastro de usuários

Crie um arquivo:

cadastroUsuarios.js

Você terá um array:

const usuarios = [];

Crie uma função:

cadastrarUsuario(nome, idade, email)

Regras:

Nome deve ter pelo menos 3 caracteres.
Idade deve ser maior ou igual a 18.
Email deve conter "@".
Se os dados forem inválidos, exiba uma mensagem de erro.
Se forem válidos, crie um objeto usuário e adicione no array usuarios.
Cada usuário deve ter:
nome
idade
email
ativo

Depois cadastre pelo menos 3 usuários.

Exemplo:

cadastrarUsuario("Renato", 29, "renato@email.com");
cadastrarUsuario("Ana", 17, "ana@email.com");
cadastrarUsuario("João", 25, "joao@email.com");

Depois imprima todos os usuários cadastrados.

*/

const users = [];

function userRegistration(name, age, email){
    if(name.length >= 3 && age >= 18 && email.includes("@")){
        const ativo = true;
        const user = {name, age, email, ativo};
        users.push(user);
        console.log("Registration successful.")
    } else {
        console.error(`Error: ${name} is an invalid user`);
    }
}

userRegistration("Renato", 29, "renato@email.com");
userRegistration("Ana", 17, "ana@email.com");
userRegistration("João", 25, "joao@email.com");

for (user of users){
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log(user.ativo);
    console.log("--------------")
}
