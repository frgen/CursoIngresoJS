
function mostrar()
{
    var base, altura, perimetro, superficie;
    base = prompt("Ingrese la base");
    altura = prompt("Ingrese la altura");
    base = parseInt(base);
    altura = parseInt(altura);
    perimetro = base * 3;
    superficie = (base * altura) / 2;
    alert("El perimetro es " + perimetro + " y la superficie es " + superficie);

}
