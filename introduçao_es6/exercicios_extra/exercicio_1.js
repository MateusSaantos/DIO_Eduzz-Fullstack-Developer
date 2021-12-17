//Faça um programa que entre com cinco números e imprima o quadrado de cada número

const number = [1, 2, 3, 4, 5];

function square (value){
    value **= 2;
    return value;
}

for(let x in number){
    console.log(square(number[x]));
}

