//mini project 2
const products = [];

function productRegister(name, price, category){
    if(price > 0 && name.length >= 2 && category.length > 0){
        const product = {name, price, category};
        products.push(product);
    }
    else {
        console.log(`Product ${name} invalid.`)
    }
}

function productsList(products){
    console.log("Products:")
    for(const product of products){
        console.log(`Product: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
        console.log("-------------------------")
    }

}


function productListByCategory(products, category){
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

productRegister("Notebook", 3000, "electronic");
productRegister("Mouse", 100, "accessory");
productRegister("Keyboard", 200, "accessory");

productsList(products);
productListByCategory(products, "accessory");