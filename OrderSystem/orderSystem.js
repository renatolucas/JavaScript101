//mini final project
const customers = [];
const products = []
const orders = []

function customerRegister(name, email){
    if(name.length >= 3 && email.includes("@")){
        const customer = {name, email};
        customers.push(customer);
        console.log("Customer successfully registered.")
    }else{
        console.log("Invalid customer.")
    }
}

function productRegister(name, price){
    if(name.length >= 2 && price > 0){
        const product = {name, price};
        products.push(product);
        console.log("Product successfully registered.")
    }else{
        console.log("Invalid product.")
    }
}

function createOrder(customerEmail, productName, quantity){
    let email;
    let customerName;
    for(const customer of customers){
        if(customer.email === customerEmail){
            email = customerEmail;
            customerName = customer.name;
        }
    }

    let prod;
    let price;
    for(const product of products){
        if(product.name === productName){
            prod = productName;
            price = product.price;
        }
    }

    const total = quantity * price;
    const status = "pending"

    if(email.length > 0 && prod.length > 0){
        const order = {customerName, productName, quantity, total, status}
        orders.push(order);
        console.log("Order successfully registered.")
    }else{
        console.log("Order invalid.")
    }

}

function listOrders(){
    for(const order of orders){
        console.log();
        console.log("Order:");
        console.log(`Customer: ${order.customerName}`);
        console.log(`Product: ${order.productName}`);
        console.log(`Quantity: ${order.quantity}`);
        console.log(`Total: ${order.total}`);
        console.log(`Status: ${order.status}`);
        console.log();
    }
}


customerRegister("Renato", "renato@email.com");
productRegister("Notebook", 3000);
productRegister("Mouse", 100);

createOrder("renato@email.com", "Notebook", 1);
createOrder("renato@email.com", "Mouse", 2);

listOrders();