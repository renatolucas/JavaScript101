//Iniciando um projeto em node.js
//npm init -y

//Criando um require para ler dados do terminal
const rl = require("node:readline");

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let name;

prompt.question("Qual é o seu nome? ", answer => {
    name = answer;
    /*
    const age = Number.ParseInt(answer); //Transforma em int a resposta
    if (Number.isNan(age)){
        console.log("Você não digitou um número válido.");
    } else {
        console.log(`A sua idade é ${age}`);
        console.log(`Daqui 4 anos sua idade será ${age + 4}`);    
    }
    */
   prompt.close();//sempre fechar

})

prompt.on("close", () => {
    console.log("Seja bem vindo, ", name);
})

//Comentários - Não é recomendado comentar tudo. Perferível um código fácil de entender. Utilizar para testes e afins.
//Uma linha
/*
    bloco
*/
//Em uma parte do código
const sum = 1 + /*2 +*/ 3;

//Formatar cases decimais
const number = 14.52342;
console.log(number.toFixed(2));//14.52