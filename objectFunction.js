//Exercise 14
const produto = {
    name: "Notebook",
    price: 3000,
    discount: 10
}

function calculateFinalPriceWithDiscount(produto){
    const finalPrice = produto.price - (produto.price * (produto.discount / 100));
    return finalPrice;
}

console.log(`Final price: ${calculateFinalPriceWithDiscount(produto)}`);