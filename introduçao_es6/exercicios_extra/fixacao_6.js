//Exercicios de fixação
//Constructor
function Student(name, age){
    this.name = name;
    this.age = age;

    this.registered = function registered(){
        const registered = true;
        return registered;
    }
}

const mateus = new Student("Mateus", 23);
console.log(mateus);

console.log(`NOME: ${mateus.name} IDADE: ${mateus.age} STATUS MATRÍCULA: ${mateus.registered()}`)

const ana = new Student("Ana", 24);

console.log(`NOME: ${ana.name} IDADE: ${ana.age} STATUS MATRÍCULA: ${ana.registered()}`)