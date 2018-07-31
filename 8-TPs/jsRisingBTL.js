/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var EstadoCivil;
    var SueldoBruto;
    var NumLegajo;
    var nacionalidad;

    /* Valido la edad */

    edad = prompt("Ingrese la edad (entre 18 y 90 años inclusive)");
    edad = parseInt(edad);

    while (edad < 18 || edad > 90 || isNaN(edad)) {
        edad = prompt("Edad inválida (ingrese una edad entre 18 y 90 años inclusive)");
        edad = parseInt(edad);
    }

    /* Valido el sexo */

    sexo = prompt("Ingrese el sexo (M ó F)");
    sexo = sexo.toUpperCase();

    while (sexo != "M" && sexo != "F") {
        sexo = prompt("Sexo inválido (ingrese 'M' o 'F')");
        sexo = sexo.toUpperCase();
    }

    /* Valido el estado civil */

    EstadoCivil = prompt("Ingrese el estado civil");
    EstadoCivil = parseInt(EstadoCivil);

    while (EstadoCivil != 1 && EstadoCivil != 2 && EstadoCivil != 3 && EstadoCivil != 4) {
        EstadoCivil = prompt("Opción incorrecta, ingrese 1 soltero, 2 casado, 3 divorciado ó 4 viudo");
    }

    /* Valido el sueldo bruto */

    SueldoBruto = prompt("Ingrese el sueldo bruto (no debe ser menor a 8000)");
    SueldoBruto = parseInt(SueldoBruto);

    while (SueldoBruto < 8000 || isNaN(SueldoBruto)) {
        SueldoBruto = prompt("El sueldo bruto no debe ser menor a 8000");
        SueldoBruto = parseInt(SueldoBruto);
    }

    /* Valido el numero de legajo */

    NumLegajo = prompt("Ingrese el numero de legajo (cuatro cifras)");
    NumLegajo = parseInt(NumLegajo);

    while (NumLegajo < 1000 || isNaN(NumLegajo)) {
        NumLegajo = prompt("El nº de legajo no debe ser menor a 1000");
        NumLegajo = parseInt(NumLegajo);
    }

    /* Valido la nacionalidad */

    nacionalidad = prompt("Ingrese la nacionalidad (A, E ó N)");
    nacionalidad = nacionalidad.toUpperCase();

    while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {
        nacionalidad = prompt("Ingrese A argentinos, E extranjeros o N nacionalizados");
        nacionalidad = nacionalidad.toUpperCase();
    }

    if (sexo == "F") {
        sexo = "Femenino";
    } else {
        sexo = "Masculino";
    }

    switch(EstadoCivil) {
        case "1":
            EstadoCivil = "Soltero/a";
        break;
        case "2":
            EstadoCivil = "Casado/a";
        break;
        case "3":
            EstadoCivil = "Divorciado/a";
        break;
        default:
            EstadoCivil = "Viudo/a";
    }

    switch(nacionalidad) {
        case "A":
            nacionalidad = "Argentino/a";
        break;
        case "E":
            nacionalidad = "Extranjero/a";
        default:
            nacionalidad = "Nacionalizado/a";
    }

    /* Muestro los resultados */

    document.getElementById("Edad").value = edad + " años";
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = EstadoCivil;
    document.getElementById("Sueldo").value = "$" + SueldoBruto;
    document.getElementById("Legajo").value = NumLegajo;
    document.getElementById("Nacionalidad").value = nacionalidad;
 
}
