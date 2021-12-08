//Exercicios de fixação
//2.0

function soma (a, b){
    var soma = a + b
    return soma
}

var retorno = soma(5, 5);
console.log(retorno)

const soma2 = (a, b = a) => a + b

var retorno2 = soma2(6, 6)
console.log(retorno2);

function mult (a, b){
    var mult = a * b
    return mult
}

const mult2 = (a, b = a) =>{
    var mult = a * b
    return mult
}


console.log(resp = mult(6, 6))
console.log(resp = mult2(6))