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

    edad = prompt("edad");
    edad = parseInt(edad);

    while (edad < 18 || edad > 90) {
        edad = prompt("Edad incorrecta, ingrese una edad entre 18 y 90 años inclusive");
    }

    sexo = prompt("sexo");

    while (sexo != "m" && sexo != "f") {
        sexo = prompt("Sexo incorrecto, ingrese 'm' o 'f' ");
    }

    EstadoCivil = prompt("Estado civil");
    EstadoCivil = parseInt(EstadoCivil);

    while (EstadoCivil != 1 && EstadoCivil != 2 && EstadoCivil != 3 && EstadoCivil != 4) {
        EstadoCivil = prompt("Opción incorrecta, ingrese 1 soltero, 2 casado, 3 divorciado ó 4 viudo");
    }

    SueldoBruto = prompt("Sueldo bruto");

    while (SueldoBruto < 8000) {
        SueldoBruto = prompt("El sueldo bruto no debe ser menor a 8000");
    }

    NumLegajo = prompt("Numero de legajo");
    NumLegajo = parseInt(NumLegajo);

    while (NumLegajo < 1000) {
        NumLegajo = prompt("El nº de legajo no debe ser menor a 1000");
    }

    nacionalidad = prompt("Nacionalidad");

    while (nacionalidad != "a" && nacionalidad != "e" && nacionalidad != "n") {
        nacionalidad = prompt("Ingrese a argentinos, e extranjeros o n nacionalizados");
    }

    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = EstadoCivil;
    document.getElementById("Sueldo").value = SueldoBruto;
    document.getElementById("Legajo").value = NumLegajo;
    document.getElementById("Nacionalidad").value = nacionalidad;
 
}
