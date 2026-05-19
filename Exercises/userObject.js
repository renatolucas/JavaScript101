//Exercise 19
const user = {
    name: "Renato",
    age: 29,
    email: "renato@email.com",
    active: true
}

console.log(user.name);
console.log(user.email);
user.active = false;
user.profile = "admin";

console.log(user);

//Ainda que o objeto seja uma constante, suas propriedades podem ser alteradas, mas o objeto em si, não. Por exemplo, não é possível atribuir outro objeto ao objeto user, user = user2;

/*

Está correto. Você entendeu exatamente o ponto principal: const impede a reatribuição da variável, mas não torna o objeto imutável.

Seu código:

const user = {
  name: "Renato",
  age: 29,
  email: "renato@email.com",
  ativo: true
};

console.log(user.name);
console.log(user.email);

user.ativo = false;
user.profile = "admin";

console.log(user);

Saída aproximada:

Renato
renato@email.com
{
  name: 'Renato',
  age: 29,
  email: 'renato@email.com',
  ativo: false,
  profile: 'admin'
}
Pequena melhoria de consistência

Como você está usando inglês, trocaria:

ativo: true

por:

active: true

E depois:

user.active = false;

Versão revisada:

const user = {
  name: "Renato",
  age: 29,
  email: "renato@email.com",
  active: true
};

console.log(user.name);
console.log(user.email);

user.active = false;
user.profile = "admin";

console.log(user);

// Even though user is declared with const, its internal properties can be changed.
// What cannot happen is reassigning the variable to another object, for example:
// user = anotherUser;
Seu comentário está conceitualmente correto

Você escreveu:

//Ainda que o objeto seja uma constante, suas propriedades podem ser alteradas, mas o objeto em si, não. Por exemplo, não é possível atribuir outro objeto ao objeto user, user = user2;

Perfeito.

Só refinaria a frase assim:

// A variável user é constante, não o objeto em si.
// Por isso, podemos alterar propriedades internas,
// mas não podemos reatribuir user para outro objeto.

Exemplo:

const user = {
  name: "Renato"
};

user.name = "Lucas"; // permitido

user = {
  name: "Ana"
}; // erro

O erro seria:

TypeError: Assignment to constant variable.
Observação avançada

Se você quisesse impedir alterações nas propriedades, poderia usar:

Object.freeze(user);

Exemplo:

const user = {
  name: "Renato",
  active: true
};

Object.freeze(user);

user.active = false;

console.log(user);

Em modo estrito, isso pode gerar erro; fora dele, a alteração pode simplesmente não surtir efeito.

Avaliação:

Exercise 19: correto
Conceito de const com objetos entendido corretamente
Melhoria: manter os nomes em inglês, usando active em vez de ativo
*/