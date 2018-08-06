/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número 
entre -100 y 100 (validar) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo
*/
function mostrar()
{
    var letra;
    var numero;
    var pares=0;
    var impares=0;
    var ceros=0;
    var positivos;
    var negativos;
    var maximo;
    var minimo;
    var contador=0;

    while(letra != "salir") {
        letra = prompt("Ingrese una letra");
        letra = letra.toLowerCase();

        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);

        while(numero < -100 || numero > 100 || isNaN(numero)) {
            numero = prompt("Ingrese un numero valido");
            numero = parseInt(numero);
        }
        
    }

    








}
