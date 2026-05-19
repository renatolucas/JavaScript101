//Exercise 17
const grades = [8,7,10,6,9];
let sumGrades = 0;

for (const gradle of grades) {
    sumGrades += gradle;
}

let average = sumGrades / grades.length;
console.log(`Average: ${average}`);

if(average >= 7){
    console.log("Approved");
} else {
    console.log("Failed");
}

/*
Muito bom. A lógica está correta: você percorreu o array, somou as notas, calculou a média e aplicou a regra de aprovação.

Seu código funciona e a saída será:

Average: 8
Approved
Principal ajuste: typo no nome da variável

Você escreveu:

const gradles = [8,7,10,6,9];
let sumGradles = 0;

for (const gradle of gradles) {
  sumGradles += gradle;
}

O correto em inglês seria:

grades
grade
sumGrades

gradle é outra coisa: é uma ferramenta de build muito usada no ecossistema Java/Kotlin.

Versão revisada
const grades = [8, 7, 10, 6, 9];
let sumGrades = 0;

for (const grade of grades) {
  sumGrades += grade;
}

const average = sumGrades / grades.length;

console.log(`Average: ${average}`);

if (average >= 7) {
  console.log("Approved");
} else {
  console.log("Failed");
}
Pequena melhoria

Como average não muda depois de calculada, prefira const:

const average = sumGrades / grades.length;

Avaliação:

Exercise 17: correto
Melhorias: corrigir gradles/gradle para grades/grade e usar const para average
Bom uso de for...of e cálculo de média
*/
