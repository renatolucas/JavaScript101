//Exercises 24 and 25
const calc = require("./calculatorModule");
const validator = require("./validations");

console.log(calc.sum(1,1));

const user = {
  name: "Renato",
  age: 29,
  email: "renato@email.com"
};

if(validator.nameValidation(user.name) && validator.ageValidation(user.age) && validator.emailValidation(user.email)){
    console.log("Valid user");
}else {
    console.log("Invalid user");
}