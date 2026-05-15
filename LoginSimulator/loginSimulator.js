//mini project 3
const registeredUser = {
  email: "admin@email.com",
  password: "123456",
  active: true,
  perfil: "admin"
};

function login(email, password){
    if(!registeredUser.active){
        console.log(`User ${registeredUser.email} isn't active. Access denied`);
        return false;
    }

    if (registeredUser.email !== email || registeredUser.password !== password){
        console.log("Password or e-mail incorrect. Access denied.")
        return false;
    }

    console.log("Login successful.");

    switch (registeredUser.perfil) {
        case "admin":{
            console.log("Total access.")
            break;
        }
        
        case "editor": {
            console.log("Edit access.");
            break;
        }

        case "customer": {
            console.log("Read access.");
            break;
        }
    
        default:{
            console.log("Access not found.");
            break;
        }
            
    }
}

login("admin@email.com", "123456");