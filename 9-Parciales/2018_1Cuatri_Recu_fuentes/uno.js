
function mostrar()
{
    var base;
    var altura;
    var superficie;
    var perimetro;
    
    altura = prompt("Ingrese la altura:");
    altura = parseInt(altura);

    base = prompt("Ingrese la base");
    base = parseInt(base);

    perimetro = base * 3;
    superficie = (base * altura) / 2;

    alert("La superficie es " + superficie + " y el perimetro es " + perimetro);

}
