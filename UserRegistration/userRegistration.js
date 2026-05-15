//mini project 1
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
