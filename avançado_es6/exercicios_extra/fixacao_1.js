//Exercicios de fixação
//1.0

var  corCidade = ["Cinza", "Marrom", "Preto", "Branco"]

var corNatureza = ["Verde", "Azul", "Branco", "Rosa", "Marrom", "Amarelo"]

var cores = [...corCidade, ...corNatureza]

//FIltrar uma cor
var resp = cores.filter(filtro => (filtro === "Cinza"))
console.log(resp);

//Filtrar todos que começam com a letra A
var letra = cores.filter(filtro => (filtro.charAt(0) === "A"))

letra.forEach((retoro) =>  {
    console.log(retoro)
})





