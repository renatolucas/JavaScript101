//mini project 3
const registeredUser = {
  email: "admin@email.com",
  password: "123456",
  active: true,
  role: "admin"
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

    switch (registeredUser.fole) {
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

    return true;
}

login("admin@email.com", "123456");

/*
Muito bom. Esse mini-projeto ficou correto e já mostra uma evolução clara no seu código.

Você usou bem:

objeto
função
if com early return
validação
switch
return

A saída será:

Login successful.
Total access.
Pontos fortes

Você aplicou muito bem o early return:

if (!registeredUser.active) {
  console.log(`User ${registeredUser.email} isn't active. Access denied`);
  return false;
}

E também:

if (registeredUser.email !== email || registeredUser.password !== password) {
  console.log("Password or e-mail incorrect. Access denied.");
  return false;
}

Isso deixa o fluxo principal mais limpo:

console.log("Login successful.");

Ou seja, quando o código chega nessa linha, você já sabe que:

o usuário está ativo
o e-mail está correto
a senha está correta

Esse é um ótimo padrão.

Principal ajuste: perfil

Como você está escrevendo o código em inglês, trocaria:

perfil: "admin"

por:

role: "admin"

Então:

switch (registeredUser.role) {

role é o termo mais comum para perfil/papel de usuário em sistemas.

Outro ajuste: retorno no sucesso

Hoje sua função retorna false quando falha, mas não retorna nada quando dá certo.

Em JavaScript, uma função sem return explícito retorna:

undefined

Então, apesar de imprimir "Login successful.", a função em si não devolve sucesso.

Melhor:

return true;

no final do login bem-sucedido.

Versão revisada
const registeredUser = {
  email: "admin@email.com",
  password: "123456",
  active: true,
  role: "admin"
};

function login(email, password) {
  if (!registeredUser.active) {
    console.log(`User ${registeredUser.email} isn't active. Access denied.`);
    return false;
  }

  if (registeredUser.email !== email || registeredUser.password !== password) {
    console.log("Password or e-mail incorrect. Access denied.");
    return false;
  }

  console.log("Login successful.");

  switch (registeredUser.role) {
    case "admin":
      console.log("Total access.");
      break;

    case "editor":
      console.log("Edit access.");
      break;

    case "customer":
      console.log("Read access.");
      break;

    default:
      console.log("Access not found.");
      break;
  }

  return true;
}

login("admin@email.com", "123456");
Versão um pouco melhor ainda

Você poderia separar a exibição de permissões em outra função:

const registeredUser = {
  email: "admin@email.com",
  password: "123456",
  active: true,
  role: "admin"
};

function showUserPermission(role) {
  switch (role) {
    case "admin":
      console.log("Total access.");
      break;

    case "editor":
      console.log("Edit access.");
      break;

    case "customer":
      console.log("Read access.");
      break;

    default:
      console.log("Access not found.");
      break;
  }
}

function login(email, password) {
  if (!registeredUser.active) {
    console.log(`User ${registeredUser.email} isn't active. Access denied.`);
    return false;
  }

  if (registeredUser.email !== email || registeredUser.password !== password) {
    console.log("Password or e-mail incorrect. Access denied.");
    return false;
  }

  console.log("Login successful.");
  showUserPermission(registeredUser.role);

  return true;
}

login("admin@email.com", "123456");

Essa separação é melhor porque agora cada função tem uma responsabilidade:

login -> valida o acesso
showUserPermission -> exibe a permissão

Esse é um raciocínio importante para back-end.

Avaliação
Mini Project 3: correto
Pontos fortes: bom uso de early return e switch
Melhorias: usar role em vez de perfil e retornar true no sucesso
Sugestão: separar permissões em uma função própria
*/
