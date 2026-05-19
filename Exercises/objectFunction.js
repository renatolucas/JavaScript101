//Exercise 14
const product = {
    name: "Notebook",
    price: 3000,
    discount: 10
};

function calculateFinalPriceWithDiscount(product) {
  if (product.discount < 0 || product.discount > 100) {
    return "Invalid discount";
  }

  const discountAmount = product.price * (product.discount / 100);
  const finalPrice = product.price - discountAmount;

  return finalPrice;
}

console.log(`Final price: ${calculateFinalPriceWithDiscount(product)}`);

/*
Correto. A lógica do desconto está boa.

Seu código:

const produto = {
  name: "Notebook",
  price: 3000,
  discount: 10
};

function calculateFinalPriceWithDiscount(produto) {
  const finalPrice = produto.price - (produto.price * (produto.discount / 100));
  return finalPrice;
}

console.log(`Final price: ${calculateFinalPriceWithDiscount(produto)}`);

Saída:

Final price: 2700
Pequenos ajustes

Como você está treinando inglês, eu trocaria também o nome da variável produto para product, para manter consistência:

const product = {
  name: "Notebook",
  price: 3000,
  discount: 10
};

function calculateFinalPriceWithDiscount(product) {
  const finalPrice = product.price - product.price * (product.discount / 100);
  return finalPrice;
}

console.log(`Final price: ${calculateFinalPriceWithDiscount(product)}`);

Também faltou ponto e vírgula depois do objeto. Não é obrigatório, mas eu recomendo manter consistência:

const product = {
  name: "Notebook",
  price: 3000,
  discount: 10
};
Versão com nomes intermediários

Para ficar ainda mais legível:

const product = {
  name: "Notebook",
  price: 3000,
  discount: 10
};

function calculateFinalPriceWithDiscount(product) {
  const discountAmount = product.price * (product.discount / 100);
  const finalPrice = product.price - discountAmount;

  return finalPrice;
}

console.log(`Final price: ${calculateFinalPriceWithDiscount(product)}`);

Essa versão é melhor para leitura porque separa:

valor do desconto
preço final
Versão mais robusta

Pensando como back-end, você poderia validar se o desconto está em uma faixa aceitável:

const product = {
  name: "Notebook",
  price: 3000,
  discount: 10
};

function calculateFinalPriceWithDiscount(product) {
  if (product.discount < 0 || product.discount > 100) {
    return "Invalid discount";
  }

  const discountAmount = product.price * (product.discount / 100);
  const finalPrice = product.price - discountAmount;

  return finalPrice;
}

console.log(`Final price: ${calculateFinalPriceWithDiscount(product)}`);

Isso evita casos como:

discount: 150

ou:

discount: -10

Avaliação:

Exercise 14: correto
Melhorias: usar product em vez de produto e separar discountAmount para clareza
Boa aplicação de objeto, função e cálculo percentual
*/
