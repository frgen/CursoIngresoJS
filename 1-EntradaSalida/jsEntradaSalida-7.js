/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var resultado, numero1, numero2;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    resultado = numero1 + numero2;
    alert("La suma es " + resultado);	
}

function restar()
{
    var resultado, numero1, numero2;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    resultado = numero1 - numero2;
    alert("La resta es " + resultado);
}

function multiplicar()
{ 
    var resultado, numero1, numero2;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    resultado = numero1 * numero2;
    alert("El producto es " + resultado);
}

function dividir()
{
    var resultado, numero1, numero2;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
    resultado = numero1 / numero2;
    alert("El cociente es " + resultado);
}

