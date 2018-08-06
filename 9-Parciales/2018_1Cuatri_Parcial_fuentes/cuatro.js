/* 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10"
*/
function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt("Ingrese primer numero");
    numeroUno = parseInt(numeroUno);
    numeroDos = prompt("Ingrese segundo numero");
    numeroDos = parseInt(numeroDos);

    if (numeroUno == numeroDos) {
        alert("El resultado es " + numeroUno + numeroDos);
    } else if (numeroUno > numeroDos) {
        resultado = numeroUno - numeroDos;
        alert("El resultado es " + resultado);
    } else {
        resultado = numeroUno + numeroDos;
        if (resultado > 10) {
            alert("La suma es " + resultado + " y supero el 10");
        } else {
            alert("El resultado es " + resultado);
        }
    }
}
