/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina, eleccionJugador;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * 3) + 1;

	if (eleccionMaquina == 1) {
		eleccionMaquina = "piedra";
	} else if (eleccionMaquina == 2) {
		eleccionMaquina = "papel"
	} else {
		eleccionMaquina = "tijera";
	}

    console.log(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccionJugador = document.getElementsByClassName("piedra()").value = "piedra";

	if (eleccionJugador == eleccionMaquina) {
		alert("Empate!");
	} else if (eleccionMaquina == "tijera") {
		alert("Jugador gana!");
	} else {
		alert("Computadora gana!");
	}

	console.log(eleccionJugador);

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionJugador = document.getElementsByClassName("papel()").value;

}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionJugador = document.getElementsByClassName("tijera()").value;

}//FIN DE LA FUNCIÓN