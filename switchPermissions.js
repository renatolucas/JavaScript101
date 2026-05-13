//Exercise 07
const role = "admin";

switch(role){
    case "admin": {
        console.log("You can edit everything.");
        break;
    }
    case "editor":{
        console.log("You can edit content.");
        break;
    }
    case "customer": {
        console.log("You can view purchases.");
        break;
    }
    default: {
        console.log("Undefinied role.")
    }
}