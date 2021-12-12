//Exercicios de fixação

//Manipulando Array
const color = ["Black", "White", "Green", "Blue"]

//Contar posições do array
console.log(color.length);

//Adicionar um item ao final do array
color.push("Pink");
console.log(color);

//Adicionar um item ao inicio do array
color.unshift("Red");
console.log(color);

//Remover item no final do array
color.pop();
console.log(color);

//Remover item no inicio do array
color.shift();
console.log(color);

//Pegar partes especificas do array, não altera os dados do array
console.log(color.slice(1,3));

//Remover itens do array
console.log(color);
color.splice(0,3)
console.log(color);

