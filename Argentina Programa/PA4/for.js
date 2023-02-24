//for (inicialización; condición; incremento/decremento)
var x = 1;

for(x; x<5; x++){
    console.log("El valor de x es : "+x); //Sentencia
}

//Esto va a decir que x es, y es un incremento
//x = 1, 2, 3, 4, 5, porque lo hace en la "condicion" si no es mayor que sigue, sigue imprimiendo, y sigue imprimiendo porque cuando termine de hacer x < 5; tenemos el incremento de x++, que sería x+1 = 1+1, que sería 2, y después se repite x+1, que sería 3

var y = 10;

for(y; y > 10; y--){
    console.log("El valor de y es :"+y); //Sentencia
}

//Acá hay un ejemplo del decremento
//En la "condicion" lo que tenemos es "y>10", lo que va a hacer es lo mismo que el anterior, pero decreciendo, antes era del 1 al 5, ahora va a ser del 10 al 0, con el "y--" va a ir bajando los numeros.

//Hay que estar atento a la hora de codificar, porque si yo quiero que esto "incremente", tengo que tener cuidado con el x++ o x-- "disminuya"