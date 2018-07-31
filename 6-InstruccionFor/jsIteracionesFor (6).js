function mostrar()
{
    var pares=0;
    var numero = prompt("Ingrese numero");
    numero = parseInt(numero);

    if (numero % 2 != 0) {
        numero--;
    }

    for (i = numero; i <= numero; i = i-2) {
        console.log(i);
        pares++;
    }

}//FIN DE LA FUNCIÓN