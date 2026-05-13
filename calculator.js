//Exercise 12
function sum (a, b){
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function mult (a, b){
    return a * b;
}

function div (a, b){
    if (b === 0){
        return "Error: division by zero";
    }else{
        return a / b;
    }
}

let result = div(5,0);
console.log(result);