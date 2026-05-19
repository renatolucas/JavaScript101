//Exercise 07
const role = "admin";

switch(role){
    case "admin": 
        console.log("You can edit everything.");
        break;

    case "editor":
        console.log("You can edit content.");
        break;

    case "customer": 
        console.log("You can view purchases.");
        break;

    default: 
        console.log("Undefined role.")
}

/*
Está correto. A estrutura do switch foi bem usada:

const role = "admin";

switch (role) {
  case "admin": {
    console.log("You can edit everything.");
    break;
  }
  case "editor": {
    console.log("You can edit content.");
    break;
  }
  case "customer": {
    console.log("You can view purchases.");
    break;
  }
  default: {
    console.log("Undefinied role.");
  }
}

Saída esperada:

You can edit everything.
Pequenas correções

Só há um erro de escrita:

Undefinied -> Undefined

Então:

console.log("Undefined role.");

Outra observação: os blocos {} dentro de cada case são opcionais. Seu código está válido, mas normalmente você verá assim:

const role = "admin";

switch (role) {
  case "admin":
    console.log("You can edit everything.");
    break;

  case "editor":
    console.log("You can edit content.");
    break;

  case "customer":
    console.log("You can view purchases.");
    break;

  default:
    console.log("Undefined role.");
}

Ambas as formas funcionam.

Atenção ao break

Você usou break corretamente.

Sem o break, o JavaScript continuaria executando os próximos casos. Isso é chamado de fallthrough.

Exemplo:

const role = "admin";

switch (role) {
  case "admin":
    console.log("Admin");
  case "editor":
    console.log("Editor");
  case "customer":
    console.log("Customer");
}

Saída:

Admin
Editor
Customer

Isso acontece porque, depois que ele encontra o primeiro case verdadeiro, ele continua até encontrar um break ou terminar o switch.

Versão final revisada
const role = "admin";

switch (role) {
  case "admin":
    console.log("You can edit everything.");
    break;

  case "editor":
    console.log("You can edit content.");
    break;

  case "customer":
    console.log("You can view purchases.");
    break;

  default:
    console.log("Undefined role.");
}
*/