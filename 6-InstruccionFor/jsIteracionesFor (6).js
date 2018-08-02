function mostrar()
{
    var pares=0;
    var numero = prompt("Ingrese numero");
    numero = parseInt(numero);


    for (i = 1; i <= numero; i++) {
        if (i % 2 == 0) {
            console.log(i);
            pares++;
        }
    }

    console.log("Los pares: " + pares);

}//FIN DE LA FUNCIÓN