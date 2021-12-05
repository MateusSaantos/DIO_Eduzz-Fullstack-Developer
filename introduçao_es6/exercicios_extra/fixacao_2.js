//Exercicios de fixação
//2.0
//Diferença entre igual e identico
console.log(1 == "1"); //Não é uma boa prática
console.log(1 === "1");
console.log(1 === 1);

//2.1
//Atribuição de valores
var x = 100
var y = 10

console.log(x)
//Somar x + y
x += y
console.log(x)

//Subtrair x - y
x -= y
console.log(x)

//Multiplicar x * y
x *= y
console.log(x)

//Dividir x / y
x /= y
console.log(x)

//Inverter valor de x
console.log(-x)

//2.2
var nome = "Mateus"
var sobrenome = "Santos"
var mensagem = "Seu nome é: " + nome + " " + sobrenome
console.log(mensagem)

var mensagem = `Seu nome é: ${nome} ${sobrenome}`
console.log(mensagem)
