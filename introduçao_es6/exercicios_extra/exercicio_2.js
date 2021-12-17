//Digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

const[a, b, c, d, e] = [10, 20, 30, 40, 50];

function larger (a, b, c, d, e){
    constlarger = Math.max(a, b, c, d, e);
    return larger;
}

console.log(larger(a, b, c, d, e));

//Outra formar de fazer

const array = [10, 20, 30, 40, 50];

function otherLarger(array){
    const otherLarger = Math.max(...array);
    return otherLarger;
}

console.log(otherLarger(array));