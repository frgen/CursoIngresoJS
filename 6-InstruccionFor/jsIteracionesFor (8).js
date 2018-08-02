function mostrar()
{
    /*
    var divisores=0;
    var numero = prompt("Ingrese numero");
    numero = parseInt(numero);


    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
            divisores++;
        }
    }

    if (divisores != 2) {
        console.log("No es primo");
        console.log("Los divisores: " + divisores);
    } else {
        console.log("Es primo");
    }

    De forma más eficiente:

    var divisores=0;
    var numero = prompt("Ingrese numero");
    numero = parseInt(numero);


    for (i = 2; i < numero; i++) {
        if (numero % i == 0) {
            console.log("No es primo");
            break;
        } else {
            console.log("No es primo");
            break;
        }
    }

    */

    
    var divisores=0;
    var primos=0;
    var numero = prompt("Ingrese numero");
    numero = parseInt(numero);

    for(j = numero; j >= 0; j--) {
        for (i = j; i <= numero; i++) {
            if (numero % i == 0) {
                console.log(i);
                divisores++;
            }
        }

        if (divisores != 2) {
            console.log("No es primo");
            console.log("Los divisores: " + divisores);
        } else {
            console.log("Es primo");
            primos++;
        }

    }

    console.log("Los primos:" + primos);
    

}//FIN DE LA FUNCIÓN