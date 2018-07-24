function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var bandera=true;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero = prompt("Ingrese numero");
		if (bandera) {
			bandera=false;
			maximo = numero;
			minimo = numero;
		}
		if (numero > maximo) {
			maximo = numero;
		}
		if (numero < minimo) {
			minimo = numero;
		}
		respuesta = prompt("Desea continuar?");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN