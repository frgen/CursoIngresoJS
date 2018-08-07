function mostrar()
{
    /* Realizar el algoritmo que permita el ingreso por 
    prompt de las notas (validar entre 0 y 10),
    la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer. */
    
    var nota;
    var edad;
    var sexo;
    var notas=0;
    var promedioNotas;
    var notaBaja=10;
    var sexoNotaBaja;
    var varonesMayores=0;
    var edadJoven=100;
    var sexoJoven;
    var notaJoven;
    var edadPrimerMujer;
    var notaPrimerMujer;
    var contador=0;
    var bandera=true;
    var msg;

    while(contador < 5) {
        /* Valido la nota */

        nota = prompt("Ingrese la nota");
    
        while(nota < 0 || nota > 10 || isNaN(nota)) {
            nota = prompt("Ingrese una nota valida (entre 0 y 10)");
        }

        nota = parseInt(nota);

        /* Valido la edad */

        edad = prompt("Ingrese la edad");

        while(edad < 1 || edad > 100 || isNaN(edad)) {
            edad = prompt("Ingrese una edad valida (entre 1 y 100)");
        }

        edad = parseInt(edad);

        /* Valido el sexo */

        sexo = prompt("Ingrese el sexo (M o F)");
        sexo = sexo.toLowerCase();

        while(sexo != "m" && sexo != "f") {
            sexo = prompt("Inválido, ingrese (M o F)");
            sexo = sexo.toLowerCase();
        }

        if(nota < notaBaja) {
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }

        if(nota >= 6 && edad >= 18 && sexo == "m") {
            varonesMayores++;
        }

        if(edad < edadJoven) {
            edadJoven = edad;
            notaJoven = nota;
            sexoJoven = sexo;
        }

        if(sexo == "f" && bandera) {
            bandera = false;
            notaPrimerMujer = nota;
            edadPrimerMujer = edad;
            msg = "\nNota 1er mujer es " +notaPrimerMujer + " y su edad " +edadPrimerMujer;
        } else if(bandera) {
            msg = "\nNo hubo mujeres";
        }

        notas += nota;
        contador++;

    }

    promedioNotas = notas / contador;

    alert("El promedio total es " +promedioNotas + 
    "\nLa nota mas baja es " +notaBaja + " y su sexo es " +sexoNotaBaja +
    "\nLa cantidad de varones mayores con nota mayor a 6 es " +varonesMayores +
    "\nEl sexo del mas joven es " +sexoJoven + " y su nota es " +notaJoven +msg);

    









}
