//Exercise 13
function validateUser(name, age, email){
    if(name.length >= 3 && email.includes('@') && age >= 18){
        return true;
    }else{
        return false;
    }

}

console.log(validateUser('Renato', 29 , 'renato@email.com',));