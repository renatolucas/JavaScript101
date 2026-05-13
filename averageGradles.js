//Exercise 17
const gradles = [8,7,10,6,9];
let sumGradles = 0;

for (const gradle of gradles) {
    sumGradles += gradle;
}

let average = sumGradles / gradles.length;
console.log(`Average: ${average}`);

if(average >= 7){
    console.log("Approved");
} else {
    console.log("Failed");
}