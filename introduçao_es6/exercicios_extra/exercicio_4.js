//Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas
//são do sexo masculino e quantas pessoas são do sexo feminino. Mostre também qual é a maior altura
//e se essa altura é de um homem ou uma mulher.

const person = [{
    name: "Fernando",
    gender: "M",
    height: 1.80
},
{
    name: "Ana",
    gender: "F",
    height: 1.60
},
{
    name: "Gabriel",
    gender: "M",
    height: 1.90
},
{
    name: "Bruna",
    gender: "F",
    height: 1.82
},
{
    name: "Flavia",
    gender: "F",
    height: 1.70
}]

const male = person.filter(genderPerson => genderPerson.gender === "M");
console.log("Pessoas do sexo masculino: " + male.length);

const female = person.filter(genderPerson => genderPerson.gender === "F");
console.log("Pessoas do sexo feminino: " + female.length);