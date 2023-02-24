/**console.log("Hola Mundo!");

let num_1 = 3;
let num_2 = 10;
let resultado = num_1+num_2;

console.log("La suma del número 1 y 2 es: "+resultado);
Esto era solo una prueba, para entender que todo este funcionando bien, a la hora de linkear el js.

EL QUE ESCRIBIMOS RECIÉN, ESTA BIEN HECHO! PERO HAY OTRAS FORMAS DE HACERLO, ESTA ES UNA DE ELLAS

document.getElementById("boton").onclick = function (){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
*/


document.getElementById("boton").addEventListener("click", function (){
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento listener";
})

document.getElementById("boton_color").addEventListener("click", function (){
   document.body.style.background = "red";
})

document.getElementById("boton_default").addEventListener("click", function (){
    document.body.style.background = "grey";
 })

 document.getElementById("boton_ocultar_text").addEventListener("click", function (){
    document.getElementById("demo").style.display = "none";
 })

 const collection = document.getElementsByClassName("prueba_1");
 for (let i = 0; i < collection.length; i++){
    collection[i].style.backgroundColor = "green";
 }
 const collection_1 = document.getElementsByClassName("prueba_2");
 for (let i = 0; i < collection_1.length; i++){
    collection_1[i].style.backgroundColor = "yellow";
 }

