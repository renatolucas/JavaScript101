//Exercise 11
let balance = 0;
const withdrawal = 10;
do {
    if(balance > 0){
        balance -= withdrawal;
        console.log(`New balance: ${balance}`)
    } else{
        console.log("Insufficient balance");
    }

} while (balance > 0)