//Exercise 10
let attempts = 0;
const correctPassword = "123456";
let typedPassword = "12345";

while(typedPassword !== correctPassword && attempts < 3){
    console.log("Wrong password");
    attempts++;
    if(attempts === 3){
        typedPassword = correctPassword;
    }
}

if (typedPassword === correctPassword){
    console.log("Correct password")
}else {
    console.log("Login blocked")
}

/*
Muito bom. Sua solução está correta e demonstra bem o uso de while, contador de tentativas e alteração de estado.

Seu código:

let attempts = 0;
const correctPassword = "123456";
let typedPassword = "12345";

while (typedPassword !== correctPassword && attempts < 3) {
  console.log("Wrong password");
  attempts++;

  if (attempts === 2) {
    typedPassword = correctPassword;
  }
}

if (typedPassword === correctPassword) {
  console.log("Correct password");
} else {
  console.log("Login blocked");
}

Saída esperada:

Wrong password
Wrong password
Correct password
Está correto, mas há uma pequena diferença em relação ao enunciado

O enunciado dizia para simular que na terceira tentativa a senha vira correta.

No seu código, ela vira correta quando:

attempts === 2

Ou seja, depois da segunda tentativa errada.

Não está errado para praticar while, mas para seguir exatamente o enunciado, seria:

if (attempts === 3) {
  typedPassword = correctPassword;
}

Porém, cuidado: se você fizer isso dentro do while, a senha muda depois de já ter imprimido "Wrong password" pela terceira vez.

Exemplo:

Wrong password
Wrong password
Wrong password
Correct password

Isso simula que a terceira tentativa foi digitada errada e só depois ficou correta. Não é tão realista.

Versão mais clara simulando tentativas

Uma forma melhor seria simular a senha digitada antes de validar:

let attempts = 0;
const correctPassword = "123456";
let typedPassword = "12345";

while (typedPassword !== correctPassword && attempts < 3) {
  attempts++;

  if (attempts === 3) {
    typedPassword = correctPassword;
  }

  if (typedPassword === correctPassword) {
    console.log("Correct password");
  } else {
    console.log("Wrong password");
  }
}

if (typedPassword !== correctPassword) {
  console.log("Login blocked");
}

Saída:

Wrong password
Wrong password
Correct password

Essa versão representa melhor:

Tentativa 1: senha errada
Tentativa 2: senha errada
Tentativa 3: senha correta
Versão ainda mais didática

Também dá para deixar explícito qual tentativa está acontecendo:

let attempts = 0;
const maxAttempts = 3;
const correctPassword = "123456";
let typedPassword = "12345";

while (typedPassword !== correctPassword && attempts < maxAttempts) {
  attempts++;

  if (attempts === 3) {
    typedPassword = "123456";
  }

  if (typedPassword === correctPassword) {
    console.log(`Attempt ${attempts}: Correct password`);
  } else {
    console.log(`Attempt ${attempts}: Wrong password`);
  }
}

if (typedPassword !== correctPassword) {
  console.log("Login blocked");
}
Ponto importante

Sua condição do while está muito boa:

while (typedPassword !== correctPassword && attempts < 3)

Ela significa:

Enquanto a senha estiver errada E ainda houver tentativas disponíveis, continue tentando.

Isso é exatamente a lógica esperada.

Avaliação:

Exercise 10: correto
Melhoria: ajustar a simulação para a senha correta acontecer na terceira tentativa
Bom uso de while, contador e condição composta
*/