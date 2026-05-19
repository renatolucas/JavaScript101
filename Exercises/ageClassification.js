//Exercise 05
const age = 17;

if (age >= 0 && age <= 12){
    console.log("Child: 0 to 12");
}else if(age >= 13 && age <= 17){
    console.log("Adolescent: 13 to 17");
}else if (age >= 18 && age <= 59){
    console.log("Adult: 18 to 59");
}else {
    console.log("Elderly: 60+");
}

/*
Boa. A estrutura geral está correta, mas há dois pontos importantes para corrigir.

Principal problema

Você escreveu:

if (age == 0 && age <= 12)

Essa condição só será verdadeira quando age for exatamente 0.

Exemplo:

const age = 5;

A lógica seria:

5 == 0  -> false
5 <= 12 -> true
false && true -> false

Então uma criança de 5 anos não cairia como Child.

O correto é:

if (age >= 0 && age <= 12)
Outro ajuste

Use === em vez de == como padrão.

Neste caso, nem precisamos comparar igualdade, mas vale a observação:

age == 0

permite coerção de tipo.

Exemplo:

"0" == 0 // true
"0" === 0 // false

Em código profissional JavaScript/TypeScript, prefira ===.

Versão corrigida
const age = 26;

if (age >= 0 && age <= 12) {
  console.log("Child: 0 to 12");
} else if (age >= 13 && age <= 17) {
  console.log("Adolescent: 13 to 17");
} else if (age >= 18 && age <= 59) {
  console.log("Adult: 18 to 59");
} else {
  console.log("Elderly: 60+");
}

Também corrigi:

Adut -> Adult
Versão um pouco melhor

Como as condições são sequenciais, você pode simplificar:

const age = 26;

if (age < 0) {
  console.log("Invalid age");
} else if (age <= 12) {
  console.log("Child: 0 to 12");
} else if (age <= 17) {
  console.log("Adolescent: 13 to 17");
} else if (age <= 59) {
  console.log("Adult: 18 to 59");
} else {
  console.log("Elderly: 60+");
}

Essa versão é mais limpa porque, depois que o código passou pelo primeiro if, você já sabe que a idade não caiu nos casos anteriores.

Por exemplo:

else if (age <= 17)

já significa implicitamente:

age > 12 && age <= 17
Correção
Exercise 05: quase correto
Erro principal: condição da faixa infantil
Melhoria: usar === como padrão e validar idade negativa
*/