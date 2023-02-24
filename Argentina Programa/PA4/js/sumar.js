//Tenemos que explicar que en JS, sino le pongo (parseInt(x)), me va a tomar una cadena de caracteres y no una suma de numero enteros (a+b)=caracteres, (parseInt(a)+parseInt(b)=numeros); 

document.getElementById("sumar").addEventListener("click", function(){
   
    let numeroA = document.getElementById("numero1").value;
    console.log("El valor de número A es: "+numeroA);
    let numeroB = document.getElementById("numero2").value;
    console.log("El valor de número B es: "+numeroB);
    let resultado = sumar(parseInt(numeroA),parseInt(numeroB));
    console.log("El resultado de la suma es "+resultado);

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("resultado-suma").style.display = "block";
});

function sumar(a,b){
    return a+b;
}

document.getElementById("multiplicar").addEventListener("click", function(){
   
    let numeroC = document.getElementById("numero3").value;
    console.log("El valor de número C es: "+numeroC);
    let numeroD = document.getElementById("numero4").value;
    console.log("El valor de número D es: "+numeroD);
    let resultado = multiplicar(parseInt(numeroC),parseInt(numeroD));
    console.log("El resultado de la suma es "+resultado);

    document.getElementById("resultado_1").innerHTML = resultado;
    document.getElementById("resultado-multiplicacion").style.display = "block";
});

function multiplicar(a,b){
    return a*b;
}