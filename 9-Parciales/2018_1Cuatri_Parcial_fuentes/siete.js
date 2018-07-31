function mostrar()
{
    var nombre;
    var sexo;
    var edad;
    var contador=0;
    var mujeres=0;
    var hombres=0;
    var mayores=0;
    var menores=0;
    var hombresMayores=0;
    var promedioMujeres=0;
    var promedioHombres=0;
    var promedioTotal=0;
    var nombreViejo;
    var nombreJoven;
    var sexoViejo;
    var nombreMujerVieja;
    var max=0;
    var min=101;

    while (contador <= 3) {

        /* Valido los datos */

        nombre = prompt("Ingrese el nombre");

        sexo = prompt("Ingrese el sexo");
        sexo = sexo.toUpperCase();

        while (sexo != "M" && sexo != "F") {
            sexo = prompt("Opción incorrecta, ingrese 'M' o 'F'");
            sexo = sexo.toUpperCase();
        }

        edad = prompt("Ingrese la edad");
        edad = parseInt(edad);

        while (edad < 1 || edad > 100 || isNaN(edad)) {
            edad = prompt("Ingrese una edad válida");
            edad = parseInt(edad);
        }

        switch (sexo) {
            case "M":
                sexo = "Masculino";
            break;
            case "F":
            sexo = "Femenino";
            break;
        }

        /* Actualizo los promedios */

        if (sexo == "Masculino") {
            hombres++;
            promedioHombres += edad;
        } else {
            mujeres++;
            promedioMujeres += edad;
        }

        promedioTotal += edad;

        /* Verifico si son mayores o menores de edad */

        if (edad <= 17) {
            menores++;
        } else if (sexo == "Masculino"){
            mayores++;
            hombresMayores++;
        } else {
            mayores++;
        }

        /* Busco el máximo y el mínimo */

        if (edad > max) {
            max = edad;
            nombreViejo = nombre;
            sexoViejo = sexo;
        }
        if (edad < min) {
            min = edad;
            nombreJoven = nombre;
        }

        if (sexoViejo == "Femenino") {
            nombreMujerVieja = nombre;
        }


        console.log(nombre);
        console.log(sexo);
        console.log(edad);

        contador++;

    }

    promedioMujeres = promedioMujeres / mujeres;
    promedioHombres = promedioHombres / hombres;
    promedioTotal = promedioTotal / contador;

    /* Muestro los resultados */

    document.write("Cantidad de hombres: " + hombres + "<br>");
    document.write("Cantidad de mujeres: " + mujeres + "<br>");
    document.write("Cantidad de menores: " + menores + "<br>");
    document.write("Cantidad de mayores: " + mayores + "<br>");
    document.write("Cantidad de hombres mayores: " + hombresMayores + "<br>");
    document.write("Promedio de mujeres: " + promedioMujeres + "<br>");
    document.write("Promedio de hombres: " + promedioHombres + "<br>");
    document.write("Promedio total: " + promedioTotal + "<br>");
    document.write("La edad mas alta: " + max + "<br>");
    document.write("La edad mas baja: " + min + "<br>");
    document.write("Nombre del mas viejo: " + nombreViejo + "<br>");
    document.write("Nombre del mas joven: " + nombreJoven + "<br>");
    document.write("Sexo del mas viejo: " + sexoViejo + "<br>");
    document.write("Nombre de la mujer mas vieja: " + nombreMujerVieja + "<br>");

}
