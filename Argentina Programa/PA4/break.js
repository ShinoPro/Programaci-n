//Ahora el break, como bien lo dice, es romper o cortar en esa condicion, en este caso si llega a 5, "break", y corta ahi, no sigue más.

var x = 10;

for(x; x>0;x--){
    if(x==5){
        break;
    }
    console.log("El valor de x es :"+x); //Sentencia
}

//Una vez que lo imprima solamente va a imprimir hasta que llegue a 5.

var y = 0;
for(y; y<5; y++){
    if(y == 3){
        continue
    }
    console.log("Mi valor de y es :"+y);
}

//Eso que hice arriba, tendría que continuar, muy bien no lo entiendo, porque lo explicaron rápido, a la hora de ejecutarlo salió 
//Mi valor de y es :0
//Mi valor de y es :1
//Mi valor de y es :2
//Mi valor de y es :4
//Por lo que vemos ahí el numero = 3, no salió.