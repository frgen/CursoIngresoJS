/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var resultado, precioUno, precioDos, precioTres;
	precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);
    resultado = precioUno + precioDos + precioTres;
    alert("La suma es " + resultado);
}
function Promedio () 
{
    var resultado, precioUno, precioDos, precioTres;
	precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);
    resultado = (precioUno + precioDos + precioTres) / 3;
    alert("El promedio es " + resultado);
}
function PrecioFinal () 
{
    var resultado, precioFinal, precioUno, precioDos, precioTres;
	precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);
    resultado = precioUno + precioDos + precioTres;
    precioFinal = resultado + resultado * 0.21;
    alert("El precio final es " + precioFinal);
}