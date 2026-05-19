//Exercise 04
const isUserActive = true;
const isAdmin = false;
const userAge = 20;

if (isUserActive && userAge >= 18){
    console.log("Access allowed");
} else {
    console.log("Access denied");
}

if(isUserActive && isAdmin){
    console.log("Admin access allowed");
} else {
    console.log("Admin access denied")
}


/*
A lógica está correta.

Só ajustaria nomes para ficarem mais naturais em inglês:

const isUserActive = true;
const isAdmin = false;
const userAge = 20;

Em inglês, para booleanos, é muito comum usar prefixos como:

is
has
can
should

Exemplos:

const isUserActive = true;
const isAdmin = false;
const hasPermission = true;
const canAccessAdminArea = false;

Versão revisada:

const isUserActive = true;
const isAdmin = false;
const userAge = 20;

if (isUserActive && userAge >= 18) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

if (isUserActive && isAdmin) {
  console.log("Admin access allowed");
} else {
  console.log("Admin access denied");
}

Você também poderia separar as condições em variáveis, o que deixa o código mais legível:

const isUserActive = true;
const isAdmin = false;
const userAge = 20;

const canAccessSystem = isUserActive && userAge >= 18;
const canAccessAdminArea = isUserActive && isAdmin;

if (canAccessSystem) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

if (canAccessAdminArea) {
  console.log("Admin access allowed");
} else {
  console.log("Admin access denied");
}

Essa abordagem é bem comum em código profissional.
*/