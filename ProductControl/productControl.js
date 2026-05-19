//mini project 2
const products = [];

function registerProduct(name, price, category){
    if(price > 0 && name.length >= 2 && category.length > 0){
        const product = {name, price, category};
        products.push(product);
    }
    else {
        console.log(`Product ${name} invalid.`)
    }
}

function listProducts(products){
    console.log("Products:")
    for(const product of products){
        console.log(`Product: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
        console.log("-------------------------")
    }

}


function listProductsByCategory(products, category){
    console.log(`Products in the ${category} category:`)
    for(const product of products){
        if (product.category === category){
            console.log(`Product: ${product.name}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("-------------------------")
        }
    }
}

registerProduct("Notebook", 3000, "electronic");
registerProduct("Mouse", 100, "accessory");
registerProduct("Keyboard", 200, "accessory");

listProducts(products);
listProductsByCategory(products, "accessory");

/*
Muito bom. O mini-projeto 2 está quase completo e bem estruturado. Você separou responsabilidades em funções, usou array de objetos, validação, for...of e filtro por categoria.

Só faltou uma função pedida no enunciado:

calculateTotalInventory()

Ou seja, calcular o valor total dos produtos cadastrados.

O que está correto

Sua validação está boa:

if (price > 0 && name.length >= 2 && category.length > 0)

Seu cadastro também está correto:

const product = { name, price, category };
products.push(product);

E a listagem por categoria está correta:

if (product.category === category) {
Melhorias principais
1. Nome das funções

Você escreveu:

productRegister
productsList
productListByCategory

Funcionam, mas em inglês natural eu usaria verbos:

registerProduct
listProducts
listProductsByCategory
calculateTotalInventory

Funções geralmente representam ações, então nomes com verbo ficam melhores.

2. Não precisa passar products como parâmetro

Como products já existe no escopo global do arquivo, você pode fazer:

function listProducts() {
  for (const product of products) {
    // ...
  }
}

Em projetos maiores, passar como parâmetro pode ser uma boa prática. Mas neste exercício, o enunciado esperava funções usando o array global.

As duas abordagens são válidas.

3. Faltou calcular o total

Você precisa adicionar:

function calculateTotalInventory() {
  let total = 0;

  for (const product of products) {
    total += product.price;
  }

  console.log(`Total inventory value: $${total}`);
}
Versão revisada do seu código
const products = [];

function registerProduct(name, price, category) {
  if (price > 0 && name.length >= 2 && category.length > 0) {
    const product = { name, price, category };
    products.push(product);
    console.log(`Product ${name} registered successfully.`);
  } else {
    console.log(`Product ${name} is invalid.`);
  }
}

function listProducts() {
  console.log("Products:");

  for (const product of products) {
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
    console.log("-------------------------");
  }
}

function calculateTotalInventory() {
  let total = 0;

  for (const product of products) {
    total += product.price;
  }

  console.log(`Total inventory value: $${total}`);
}

function listProductsByCategory(category) {
  console.log(`Products in the ${category} category:`);

  for (const product of products) {
    if (product.category === category) {
      console.log(`Product: ${product.name}`);
      console.log(`Price: $${product.price}`);
      console.log(`Category: ${product.category}`);
      console.log("-------------------------");
    }
  }
}

registerProduct("Notebook", 3000, "electronic");
registerProduct("Mouse", 100, "accessory");
registerProduct("Keyboard", 200, "accessory");

listProducts();
calculateTotalInventory();
listProductsByCategory("accessory");

Saída esperada aproximada:

Product Notebook registered successfully.
Product Mouse registered successfully.
Product Keyboard registered successfully.
Products:
Product: Notebook
Price: $3000
Category: electronic
-------------------------
Product: Mouse
Price: $100
Category: accessory
-------------------------
Product: Keyboard
Price: $200
Category: accessory
-------------------------
Total inventory value: $3300
Products in the accessory category:
Product: Mouse
Price: $100
Category: accessory
-------------------------
Product: Keyboard
Price: $200
Category: accessory
-------------------------
Versão com early return

Uma versão mais profissional da função de cadastro seria:

function registerProduct(name, price, category) {
  const isValidProduct = price > 0 && name.length >= 2 && category.length > 0;

  if (!isValidProduct) {
    console.log(`Product ${name} is invalid.`);
    return;
  }

  const product = {
    name,
    price,
    category
  };

  products.push(product);

  console.log(`Product ${name} registered successfully.`);
}

Essa versão evita deixar o fluxo principal dentro de um if.

Avaliação
Mini Project 2: quase completo
Cadastro: correto
Listagem: correta
Filtro por categoria: correto
Faltou: calcularTotalEstoque / calculateTotalInventory
Melhorias: nomes com verbo e uso opcional de early return
*/
