//Exercicios de fixação
//4.0

var alunos = [{
    nome: "Bruno",
    sobrenome: "Farias",
    idade: 27,
    nota: 5
},
{
    nome: "Mateus",
    sobrenome: "Santos",
    idade: 28,
    nota: 10
},
{
    nome: "Aline",
    sobrenome: "Ferreira",
    idade: 17,
    nota: 8
}
]

//Quantidade de posições de um vetor
console.log(alunos.length)

//Filtrar informações, no exemplo alunos com mais de 18 anos
const filtro = alunos.filter(alunos => alunos.idade > 18)

console.log(`Alunos com mais de 18 anos`)
for(let x = 0; x < filtro.length; x++){
    console.log(filtro[x])
}

//Somar as notas com reduce
const somatotal = alunos.reduce((nota, alunos) => {
    nota += alunos.nota;
    console.log(`A soma que sai do reduce é: ${nota}`);
    return nota;
} ,0)

console.log(`A soma das notas é: ` + somatotal);

//Média da turma
//Pegando quantidade de alunos que tem no vetor
const quantidade = alunos.length

//Operação de média
const media = somatotal / quantidade
console.log(`A média da turma é: ${media}`);