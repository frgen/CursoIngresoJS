/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var resultado, numeroDividendo, numeroDivisor;
    numeroDividendo = parseInt(document.getElementById("numeroDividendo").value);
    numeroDivisor = parseInt(document.getElementById("numeroDivisor").value);
    resultado = numeroDividendo % numeroDivisor;
    alert("El resto es " + resultado);
}
