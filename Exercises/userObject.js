//Exercise 19
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