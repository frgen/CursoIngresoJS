function mostrar()
{
//tomo la edad  
    var edad;
    edad = parseInt(document.getElementById("edad").value);
     if(edad > 17) {
        msg = "Es adulto";
    } else {
        if(edad < 13){
            msg = "Es niño";
        } else {
            msg = "Es adolescente";
        }
    }
    alert(msg);

}//FIN DE LA FUNCIÓN