/*
Realizar el algoritmo que permita iterar el ingreso de varios libros con cuatro datos 
por cada libro, nombre, cantidad de páginas, cantidad de ventas (0 o más) y tema 
(posibles temas: “robótica", "programación", "patrones", "base de datos”) 
validar e ingresar datos hasta que el usuario quiera e informar al terminar el 
ingreso por document.write: 
a) La cantidad de libros con páginas pares. 
b) La cantidad de libros con páginas impares. 
c) La cantidad de ceros ventas. 
d) El promedio de todas las ventas ingresadas. 
e) La suma de todas las páginas de los de "programación"
*/
function mostrar()
{
    var nombre;
    var paginas;
    var ventas;
    var sumaVentas=0;
    var tema;
    var librosPares=0;
    var librosImpares=0;
    var ceros=0;
    var promedioVentas;
    var paginasProg=0;
    var repeticiones;
    var contador=0;

    repeticiones = prompt("Ingrese repeticiones");
    
    while(repeticiones < 1 || isNaN(repeticiones)) {
        repeticiones = prompt("Inválido, ingrese un numero mayor a cero");
    }

    repeticiones = parseInt(repeticiones);

    while(contador < repeticiones) {
        nombre = prompt("Ingrese el nombre del libro");
        nombre = nombre.toLowerCase();

        paginas = prompt("Ingrese cantidad de paginas");
        
        while(paginas < 1 || isNaN(paginas)) {
            paginas = prompt("Inválido, ingrese una cantidad mayor a cero");
        }

        paginas = parseInt(paginas);

        ventas = prompt("Ingrese cantidad de ventas");

        while(ventas < 0 || isNaN(ventas)) {
            ventas = prompt("Invalido, ingrese una cantidad mayor o igual a cero");
        }

        ventas = parseInt(ventas);

        tema = prompt("Ingrese el tema");
        tema = tema.toLowerCase();

        if(paginas % 2 == 0) {
            librosPares++;
        } else {
            librosImpares++;
        }

        if(ventas == 0) {
            ceros++;
        }

        if(tema == "programacion") {
            paginasProg += paginas;
        }

        sumaVentas += ventas;

        contador++;

    }

    promedioVentas = sumaVentas / contador;

    document.write("La cantidad de libros con paginas pares es " + librosPares + "<br>");
    document.write("La cantidad libros con paginas impares es " + librosImpares + "<br>");
    document.write("La cantidad de cero ventas es " + ceros + "<br>");
    document.write("El promedio de todas las ventas es " + promedioVentas + "<br>");
    document.write("La suma de todas las paginas de programacion es " + paginasProg);

}
