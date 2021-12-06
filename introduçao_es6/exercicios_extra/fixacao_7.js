//Exercicios de fixação
//7.0

var cores = ["Amarelo", "Verde", "Vermelho", "Branco", "Rosa", "Preto", "Violeta"]

//Posições do vetor
console.log(cores.length);

//Acessar itens
var primeiro = cores[0]
console.log(primeiro)

//Ler todo o vetor
cores.forEach((item) => {
    console.log(item)
});

//Inserindo uma cor nova no vetor
var novo = cores.push("Azul");

cores.forEach((retorno) => {
    console.log(retorno);
});

//Remover o item adicionado
var excluir = cores.pop()

cores.forEach((retorno2) => {
    console.log(retorno2);
})