/*
Exercício 20 — Array de objetos

Crie um array de produtos:

const produtos = [
  { name: "Notebook", price: 3000, category: "eletrônico" },
  { name: "Mouse", price: 100, category: "acessório" },
  { name: "Teclado", price: 200, category: "acessório" },
  { name: "Monitor", price: 1200, category: "eletrônico" }
];

Faça:

Imprima o name de todos os produtos.
Some o preço total dos produtos.
Imprima apenas os produtos da category "acessório".
Imprima apenas produtos com preço maior que 500.

Use for e if.
*/

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

console.log("Products prices > 500:")
for(const product of products) {
    if(product.price > 500){
        console.log(product.name);
    }
}
