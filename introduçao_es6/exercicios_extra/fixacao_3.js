//Exercicios de fixação
//3.0

var alunos = ["Aline", "Gabriel", "Fernando", "Mateus", "Lucas", "Lucas", "Aline", "Aline"]

for(let x = 0; x < alunos.length; x++){
    const nome = alunos[x]
    //console.log(`O nome do aluno é: ${nome}`);
}

//Verificar se tem alunos com nomes iguais
for(let x = 0; x < alunos.length; x++){
    const compara = alunos[x];
    let contador = 0;
    for(let y = 0; y < alunos.length; y++){
        if(compara === alunos[y]){
            contador++
        }
    }

    if(contador > 1){
        console.log(`Existem ${contador} alunos com o nome ${compara}`);
    }
}


