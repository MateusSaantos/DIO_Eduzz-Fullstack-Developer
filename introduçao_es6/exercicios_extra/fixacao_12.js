//Exercicios de fixação
//Throw Try e Catch

function sum (a, b = a){
    if(a === undefined){
        throw new Error("É obrigatório informar ao menos um valor");
    } else {
        sum = a + b;
        return sum;
    }
}

try{
    console.log(sum());
} catch(err){
    console.log(err);
}