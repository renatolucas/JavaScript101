//Exercise 05
const age = 26;

if (age == 0 && age <= 12){
    console.log("Child: 0 to 12");
}else if(age >= 13 && age <= 17){
    console.log("Adolescent: 13 to 17");
}else if (age >= 18 && age <= 59){
    console.log("Adut: 18 to 59");
}else {
    console.log("Elderly: 60+");
}