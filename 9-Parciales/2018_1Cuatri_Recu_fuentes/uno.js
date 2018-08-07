/*
Realizar el algoritmo que pida la base y la altura de un triángulo equilátero, 
informar la superficie y el perímetro en una sola ventana alert
*/
function mostrar()
{
    var base;
    var altura;
    var superficie;
    var perimetro;

    base = prompt("Ingrese la base");
    base = parseInt(base);

    altura = prompt("Ingrese la altura");
    altura = parseInt(altura);

    superficie = (base * altura) / 2;
    perimetro = base * 3;

    alert("La superficie es " + superficie + " y el perimetro es " + perimetro);

}
