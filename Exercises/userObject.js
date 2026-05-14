/**
 Exercício 19 — Objeto usuário

Crie um objeto:

const usuario = {
  nome: "Renato",
  idade: 29,
  email: "renato@email.com",
  ativo: true
};

Faça:

Imprima o nome.
Imprima o email.
Altere ativo para false.
Adicione uma nova propriedade perfil com valor "admin".
Imprima o objeto completo.

Atenção: mesmo usando const, você consegue alterar propriedades internas do objeto. Explique isso com um comentário.
 */

const user = {
    name: "Renato",
    age: 29,
    email: "renato@email.com",
    ativo: true
}

console.log(user.name);
console.log(user.email);
user.ativo = false;
user.profile = "admin";

console.log(user);

//Ainda que o objeto seja uma constante, suas propriedades podem ser alteradas, mas o objeto em si, não. Por exemplo, não é possível atrinuir outro objeto ao objeto user, user = user2;