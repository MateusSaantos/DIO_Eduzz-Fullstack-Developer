//Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) 
//e quantas são menores.

const person = [{
    name: "Mateus",
    age: 23
},
{
    name: "Ana",
    age: 17
},
{
    name: "Flavia",
    age: 29
}
]

const larger = person.filter(peopleAge => (peopleAge.age > 18));
console.log("Maior de idade: " + larger.length);

const minor = person.filter(minorAge => minorAge.age < 18)
console.log("Menor de idade: " + minor.length);