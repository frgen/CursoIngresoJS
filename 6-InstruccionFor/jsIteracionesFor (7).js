function mostrar()
{
    var divisores=0;
    var numero = prompt("Ingrese numero");
    numero = parseInt(numero);


    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log(i);
            divisores++;
        }
    }

    console.log("Los divisores: " + divisores);


}//FIN DE LA FUNCIÓN