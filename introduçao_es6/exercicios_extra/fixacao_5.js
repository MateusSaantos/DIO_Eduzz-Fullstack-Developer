//Exercicios de fixação

//Callback
function myName(lastName){
    console.log("Mateus");
    lastName();
}

myName( 
    () =>{
    console.log("Santos");
})



