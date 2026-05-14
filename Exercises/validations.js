//Exercise 25
module.exports = {
    emailValidation,
    ageValidation,
    nameValidation
};

function emailValidation(email){
    return email.includes("@")
}

function ageValidation(age){
    return age > 0 && typeof age === 'number'
}

function nameValidation(name){
    return typeof name === 'string'
}

