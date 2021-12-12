//Exercicios de fixação
//Arrow function
const text = () => {
    console.log("Arrow Function");
}

text();

const sum = (number1, number2) => {
    const total = number1 + number2;
    return total;
}

console.log(sum(1, 1));

//Na Arrow Function a elevação não ocorre
//myName();

//const myName = () =>{
//    console.log("Mateus");
//}