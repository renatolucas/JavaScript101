//Exercise 10
let attempts = 0;
const correctPassword = "123456";
let typedPassword = "12345";

while(typedPassword !== correctPassword && attempts < 3){
    console.log("Wrong password");
    attempts++;
    if(attempts === 2){
        typedPassword = correctPassword;
    }
}

if (typedPassword === correctPassword){
    console.log("Correct password")
}else {
    console.log("Login blocked")
}