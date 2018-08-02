/* (IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50". */

function mostrar()
{
    var numeroUno = prompt("Ingrese primer numero");
    var numeroDos = prompt("Ingrese segundo numero");
    var resultado;

    if (numeroUno == numeroDos) {
        alert(numeroUno + numeroDos);
    } else if (numeroUno > numeroDos) {
        resultado = numeroUno / numeroDos;
        alert(resultado);
    } else {
        resultado = numeroUno + numeroDos;
        alert(resultado);
        if(resultado < 50) {
            alert("la suma es " + resultado + " y es menor a 50");
        }
    }

}
