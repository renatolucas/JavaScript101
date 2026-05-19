//Exercise 20
let totalPrice = 0;

const products = [
  { name: "Notebook", price: 3000, category: "electronic" },
  { name: "Mouse", price: 100, category: "accessory" },
  { name: "Keyboard", price: 200, category: "accessory" },
  { name: "Monitor", price: 1200, category: "electronic" }
];


for(const product of products) {
    console.log(product.name);
    totalPrice += product.price;
}

console.log(`Total price: ${totalPrice}`);

console.log("Just accessories:");
for(const product of products) {
    if(product.category === "accessory"){
        console.log(product.name);
    }
}

console.log("Products with price greater than 500:");
for(const product of products) {
    if(product.price > 500){
        console.log(product.name);
    }
}


/*
Você combinou bem:

array de objetos
for...of
if
acumulador
acesso a propriedades

Seu código está funcional:

let totalPrice = 0;

const products = [
  { name: "Notebook", price: 3000, category: "electronic" },
  { name: "Mouse", price: 100, category: "accessory" },
  { name: "Keyboard", price: 200, category: "accessory" },
  { name: "Monitor", price: 1200, category: "electronic" }
];

for (const product of products) {
  console.log(product.name);
  totalPrice += product.price;
}

console.log(`Total price: ${totalPrice}`);

console.log("Just accessories:");

for (const product of products) {
  if (product.category === "accessory") {
    console.log(product.name);
  }
}

console.log("Products prices > 500:");

for (const product of products) {
  if (product.price > 500) {
    console.log(product.name);
  }
}

Saída esperada:

Notebook
Mouse
Keyboard
Monitor
Total price: 4500
Just accessories:
Mouse
Keyboard
Products prices > 500:
Notebook
Monitor
Pequenos ajustes

Só faltou ponto e vírgula aqui:

console.log("Products prices > 500:")

O ideal:

console.log("Products prices > 500:");

Não é obrigatório, mas manter consistência ajuda.

Melhor nome para a mensagem

Esta frase:

console.log("Products prices > 500:");

Funciona, mas em inglês natural ficaria melhor assim:

console.log("Products with price greater than 500:");

ou:

console.log("Products over 500:");
Sobre let totalPrice

Aqui está correto usar let:

let totalPrice = 0;

Porque você altera o valor depois:

totalPrice += product.price;

Esse é exatamente o caso em que let faz sentido.

Versão revisada
let totalPrice = 0;

const products = [
  { name: "Notebook", price: 3000, category: "electronic" },
  { name: "Mouse", price: 100, category: "accessory" },
  { name: "Keyboard", price: 200, category: "accessory" },
  { name: "Monitor", price: 1200, category: "electronic" }
];

for (const product of products) {
  console.log(product.name);
  totalPrice += product.price;
}

console.log(`Total price: ${totalPrice}`);

console.log("Just accessories:");

for (const product of products) {
  if (product.category === "accessory") {
    console.log(product.name);
  }
}

console.log("Products over 500:");

for (const product of products) {
  if (product.price > 500) {
    console.log(product.name);
  }
}
Observação importante para back-end

Esse exercício já parece muito com lógica real de API.

Imagine que products veio de um banco de dados. Você frequentemente vai precisar:

listar registros
somar valores
filtrar por categoria
filtrar por preço

Por enquanto, fazer isso com for e if é ótimo, porque fortalece sua base. Mais à frente, isso também poderá ser feito com métodos como:

map()
filter()
reduce()
find()

Mas não pule para eles ainda. Sua base com for está ficando boa.

Avaliação:

Exercise 20: correto
Bom uso de array de objetos
Bom uso de acumulador
Boa lógica com filtros manuais
Pequenas melhorias apenas em texto e pontuação
*/
