//Exercise 18
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (i = 0; i <= numbers.length - 1; i++){
    if (numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);