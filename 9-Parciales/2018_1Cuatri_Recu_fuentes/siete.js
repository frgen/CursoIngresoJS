function mostrar()
{
    /* Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
    la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer. */
    
    var nota;
    var edad;
    var sexo;
    
    nota = prompt("ingrese la nota");
    nota = parseInt(nota);

    while(nota < 0 || nota > 10) {
        nota = prompt("invalido, ingrese la nota");
        nota = parseInt(nota);
    }

    sexo = prompt("ingrese el sexo");

    while(sexo != "F" && sexo != "M") {
        sexo = prompt("invalido, ingrese el sexo");
    }


}
