//mini final project
const customers = [];
const products = [];
const orders = [];

function registerCustomer(name, email) {
  const isValidCustomer = name.length >= 3 && email.includes("@");

  if (!isValidCustomer) {
    console.log("Invalid customer.");
    return;
  }

  const customer = {
    name,
    email,
    active: true
  };

  customers.push(customer);

  console.log("Customer successfully registered.");
}

function registerProduct(name, price) {
  const isValidProduct = name.length >= 2 && price > 0;

  if (!isValidProduct) {
    console.log("Invalid product.");
    return;
  }

  const product = {
    name,
    price
  };

  products.push(product);

  console.log("Product successfully registered.");
}

function createOrder(customerEmail, productName, quantity) {
  let foundCustomer;
  let foundProduct;

  for (const customer of customers) {
    if (customer.email === customerEmail) {
      foundCustomer = customer;
    }
  }

  for (const product of products) {
    if (product.name === productName) {
      foundProduct = product;
    }
  }

  if (!foundCustomer) {
    console.log("Order invalid: customer not found.");
    return;
  }

  if (!foundCustomer.active) {
    console.log("Order invalid: inactive customer.");
    return;
  }

  if (!foundProduct) {
    console.log("Order invalid: product not found.");
    return;
  }

  if (quantity <= 0) {
    console.log("Order invalid: quantity must be greater than zero.");
    return;
  }

  const total = quantity * foundProduct.price;

  const order = {
    customer: foundCustomer.name,
    product: foundProduct.name,
    quantity,
    total,
    status: "pending"
  };

  orders.push(order);

  console.log("Order successfully registered.");
}

function listOrders() {
  for (const order of orders) {
    console.log();
    console.log("Order:");
    console.log(`Customer: ${order.customer}`);
    console.log(`Product: ${order.product}`);
    console.log(`Quantity: ${order.quantity}`);
    console.log(`Total: R$ ${order.total}`);
    console.log(`Status: ${order.status}`);
    console.log();
  }
}

registerCustomer("Renato", "renato@email.com");

registerProduct("Notebook", 3000);
registerProduct("Mouse", 100);

createOrder("renato@email.com", "Notebook", 1);
createOrder("renato@email.com", "Mouse", 2);

listOrders();

/*
Excelente. Esse desafio final está bem encaminhado e, mais importante: seu próprio code review no comentário está muito bom. Você identificou exatamente os principais problemas que apareceriam em código real.

O projeto funciona no cenário feliz:

createOrder("renato@email.com", "Notebook", 1);
createOrder("renato@email.com", "Mouse", 2);

Mas quebra ou gera comportamento incorreto nos cenários inválidos.

Avaliação geral
Mini Final Project: parcialmente correto, com boa estrutura geral
Cadastro de clientes: quase correto
Cadastro de produtos: correto
Criação de pedidos: funciona no caso feliz, mas tem bugs em casos inválidos
Listagem: correta
Seu code review: muito bom
Principal problema em createOrder

Você declarou:

let email;
let customerName;

Depois:

if (email.length > 0 && prod.length > 0) {

Se o cliente não existir, email continua undefined.

Então isso quebra:

email.length

Erro:

TypeError: Cannot read properties of undefined

O mesmo vale para:

prod.length
Outro problema: cliente deveria ter active

O enunciado dizia que cada cliente deveria ter:

name
email
active

Mas você cadastrou:

const customer = { name, email };

O correto seria:

const customer = {
  name,
  email,
  active: true
};

E, ao criar pedido, validar:

if (!customer.active) {
  console.log("Inactive customer.");
  return;
}
Versão corrigida mantendo seu nível atual

Esta versão evita .find() por enquanto e mantém for, if, arrays e objetos, que era o objetivo da etapa:

const customers = [];
const products = [];
const orders = [];

function registerCustomer(name, email) {
  const isValidCustomer = name.length >= 3 && email.includes("@");

  if (!isValidCustomer) {
    console.log("Invalid customer.");
    return;
  }

  const customer = {
    name,
    email,
    active: true
  };

  customers.push(customer);

  console.log("Customer successfully registered.");
}

function registerProduct(name, price) {
  const isValidProduct = name.length >= 2 && price > 0;

  if (!isValidProduct) {
    console.log("Invalid product.");
    return;
  }

  const product = {
    name,
    price
  };

  products.push(product);

  console.log("Product successfully registered.");
}

function createOrder(customerEmail, productName, quantity) {
  let foundCustomer;
  let foundProduct;

  for (const customer of customers) {
    if (customer.email === customerEmail) {
      foundCustomer = customer;
    }
  }

  for (const product of products) {
    if (product.name === productName) {
      foundProduct = product;
    }
  }

  if (!foundCustomer) {
    console.log("Order invalid: customer not found.");
    return;
  }

  if (!foundCustomer.active) {
    console.log("Order invalid: inactive customer.");
    return;
  }

  if (!foundProduct) {
    console.log("Order invalid: product not found.");
    return;
  }

  if (quantity <= 0) {
    console.log("Order invalid: quantity must be greater than zero.");
    return;
  }

  const total = quantity * foundProduct.price;

  const order = {
    customer: foundCustomer.name,
    product: foundProduct.name,
    quantity,
    total,
    status: "pending"
  };

  orders.push(order);

  console.log("Order successfully registered.");
}

function listOrders() {
  for (const order of orders) {
    console.log();
    console.log("Order:");
    console.log(`Customer: ${order.customer}`);
    console.log(`Product: ${order.product}`);
    console.log(`Quantity: ${order.quantity}`);
    console.log(`Total: R$ ${order.total}`);
    console.log(`Status: ${order.status}`);
    console.log();
  }
}

registerCustomer("Renato", "renato@email.com");

registerProduct("Notebook", 3000);
registerProduct("Mouse", 100);

createOrder("renato@email.com", "Notebook", 1);
createOrder("renato@email.com", "Mouse", 2);

listOrders();
Melhorias aplicadas
1. Early return

Em vez de deixar tudo dentro de um if, a função interrompe quando encontra erro:

if (!foundCustomer) {
  console.log("Order invalid: customer not found.");
  return;
}

Isso deixa o fluxo principal mais limpo.

2. Cálculo só depois das validações

Antes você fazia:

const total = quantity * price;

antes de garantir que price existia.

Agora:

const total = quantity * foundProduct.price;

só acontece depois de validar que o produto foi encontrado.

3. Objeto mais consistente

Antes:

const order = { customerName, productName, quantity, total, status };

Agora:

const order = {
  customer: foundCustomer.name,
  product: foundProduct.name,
  quantity,
  total,
  status: "pending"
};

Fica mais próximo do domínio:

pedido tem cliente
pedido tem produto
pedido tem quantidade
pedido tem total
pedido tem status
Versão mais moderna usando .find()

Você mencionou isso no próprio comentário, e está correto. Mais à frente, você vai escrever assim:

const customers = [];
const products = [];
const orders = [];

function registerCustomer(name, email) {
  if (name.length < 3 || !email.includes("@")) {
    console.log("Invalid customer.");
    return;
  }

  customers.push({
    name,
    email,
    active: true
  });

  console.log("Customer successfully registered.");
}

function registerProduct(name, price) {
  if (name.length < 2 || price <= 0) {
    console.log("Invalid product.");
    return;
  }

  products.push({
    name,
    price
  });

  console.log("Product successfully registered.");
}

function createOrder(customerEmail, productName, quantity) {
  const customer = customers.find(customer => customer.email === customerEmail);
  const product = products.find(product => product.name === productName);

  if (!customer) {
    console.log("Order invalid: customer not found.");
    return;
  }

  if (!customer.active) {
    console.log("Order invalid: inactive customer.");
    return;
  }

  if (!product) {
    console.log("Order invalid: product not found.");
    return;
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    console.log("Order invalid: quantity must be a positive integer.");
    return;
  }

  const order = {
    customer: customer.name,
    product: product.name,
    quantity,
    total: product.price * quantity,
    status: "pending"
  };

  orders.push(order);

  console.log("Order successfully registered.");
}

function listOrders() {
  for (const order of orders) {
    console.log();
    console.log("Order:");
    console.log(`Customer: ${order.customer}`);
    console.log(`Product: ${order.product}`);
    console.log(`Quantity: ${order.quantity}`);
    console.log(`Total: R$ ${order.total}`);
    console.log(`Status: ${order.status}`);
  }
}

registerCustomer("Renato", "renato@email.com");

registerProduct("Notebook", 3000);
registerProduct("Mouse", 100);

createOrder("renato@email.com", "Notebook", 1);
createOrder("renato@email.com", "Mouse", 2);

listOrders();
Sobre seu comentário de code review

Seu comentário foi muito bom:

Bug grave: correto
Validacao de quantity: correto
Bug de cálculo com NaN: correto
Nome prod abreviado: correto
Uso de find: correto
Consistência de ponto e vírgula: correto

Isso mostra que você já está começando a pensar como alguém revisando código, não só como alguém tentando “fazer funcionar”.

Esse é um passo importante.

O que você consolidou nessa etapa

Você já praticou bem:

let / const
tipos primitivos
if / else
operadores lógicos
switch
for / while / do while
funções
IIFE
arrays
objetos
escopo
require / module.exports
validações simples
separação básica de responsabilidades

A próxima etapa natural seria aprender estes métodos de array:

find
filter
map
reduce
some
every

Eles vão deixar esses mini-projetos muito mais expressivos e próximos do JavaScript usado no dia a dia de back-end.



*/
