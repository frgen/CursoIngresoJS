var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
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
		ContadorDeEmpates = ContadorDeEmpates + 1;
	} else if (eleccionMaquina == "tijera") {
		alert("Jugador gana!");
		ContadorDeGanadas = ContadorDeGanadas + 1;
	} else {
		alert("Computadora gana!");
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}

	console.log(eleccionJugador);
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionJugador = document.getElementsByClassName("papel()").value = "papel";

	if (eleccionJugador == eleccionMaquina) {
		alert("Empate!");
		ContadorDeEmpates = ContadorDeEmpates + 1;
	} else if (eleccionMaquina == "piedra") {
		alert("Jugador gana!");
		ContadorDeGanadas = ContadorDeGanadas + 1;
	} else {
		alert("Computadora gana!");
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}

	console.log(eleccionJugador);
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionJugador = document.getElementsByClassName("tijera()").value = "tijera";

	if (eleccionJugador == eleccionMaquina) {
		alert("Empate!");
		ContadorDeEmpates = ContadorDeEmpates + 1;
	} else if (eleccionMaquina == "papel") {
		alert("Jugador gana!");
		ContadorDeGanadas = ContadorDeGanadas + 1;
	} else {
		alert("Computadora gana!");
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}

	console.log(eleccionJugador);
	mostrarResultado();
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("empatadas").value = ContadorDeEmpates;
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;

	console.log(ContadorDeEmpates);
	console.log(ContadorDeGanadas);
	console.log(ContadorDePerdidas);

}