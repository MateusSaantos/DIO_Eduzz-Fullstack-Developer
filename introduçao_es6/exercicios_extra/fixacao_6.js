//Exercicios de fixação
//.0

//Estruturas de repetição
var contador = 1 
var valor = 10

console.log("TABUADA DO 10")

do{
    valor *= contador
    console.log(`10 x ${contador} =  ${valor}`)
    contador++
    valor = 10
} while (contador <= 10){
    console.log("Fim")
}

var pessoas = [{
    nome: "Mateus",
    sexo : "M"
},
{
    nome: "Luana",
    sexo: "F"
},
{
    nome: "Bruna",
    sexo: "F"
}
]
var contador = 0

for (var dados in pessoas){
    console.log(pessoas[dados])
    console.log(dados)
}



