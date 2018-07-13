/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 secreto = Math.floor(Math.random() * (100)) +1;

   console.log(secreto);
	

}

function verificar()
{
	numeroSecreto = document.getElementById("numero").value;
  contadorIntentos = contadorIntentos + 1;

  if ((numeroSecreto == secreto) && contadorIntentos == 1) {
    alert("Usted es un psiquico");
  } else if ((numeroSecreto == secreto) && contadorIntentos == 2) {
      alert("Excelente percepcion");
  } else if ((numeroSecreto == secreto) && contadorIntentos == 3) {
	  alert("Esto es suerte");
  } else if ((numeroSecreto == secreto) && contadorIntentos == 4) {
	  alert("Excelente tecnica");
  } else if ((numeroSecreto == secreto) && contadorIntentos == 5) {
	  alert("Usted esta en la media");
  } else if ((numeroSecreto == secreto) && contadorIntentos > 5 && contadorIntentos <= 10) {
	  alert("Falta tecnica");
  } else if ((numeroSecreto == secreto) && contadorIntentos > 10) {
	  alert("Afortunado en el amor");
  } else if (numeroSecreto > secreto) {
	  alert("Se paso");
  } else {
	  alert("Falta");
  }
	
  document.getElementById("intentos").value = contadorIntentos;
  
  console.log(contadorIntentos);

}