//Exercises 24 and 25
const calc = require("./calculatorModule");
const validator = require("./validations");

console.log(calc.sum(1,1));

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