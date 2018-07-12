function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero, msg;
	numero = parseInt(Math.random() * (11 - 1)) + 1;
	if (numero == 9 || numero == 10) {
		msg = "EXCELENTE";
	} else {
		if (numero >= 4 && numero < 9) {
			msg = "APROBO";
		} else {
			msg = "Vamos, la proxima se puede";
		}
	}
	alert(msg);

	console.log(msg);

}//FIN DE LA FUNCIÓN