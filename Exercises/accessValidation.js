//Exercise 04
const activeUser = true;
const userAdmin = false;
const age = 20;

if (activeUser && age >= 18){
    console.log("Access allowed");
} else {
    console.log("Access denied");
}

if(activeUser && userAdmin){
    console.log("Admin access allowed");
} else {
    console.log("Admin access denied")
}