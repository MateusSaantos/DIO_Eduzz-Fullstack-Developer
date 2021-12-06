//Exercicios de fixação
//8.0

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function pares(valor){
    if (valor %2 === 0){
        return valor;
    }
}

function impares(valor){
    if (valor %2 != 0){
        return valor;
    }
}

var par = numeros.filter(pares);

var impar = numeros.filter(impares);

console.log("PARES")
par.forEach((retorno) => {
    console.log(retorno)
})

console.log("IMPARES");
impar.forEach((retorno) => {
    console.log(retorno)
})

