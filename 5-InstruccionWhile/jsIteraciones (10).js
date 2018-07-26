function mostrar()
{

	var contador=0;
	var numero;
	var negativos=0;
	var positivos=0;
	var ContadorPositivos=0;
	var ContadorNegativos=0;
	var ContadorCeros=0;
	var ContadorPares=0;
	var PromedioPositivos;
	var PromedioNegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Ingrese numero");
		    numero = parseInt(numero);
		}
		
		if (numero < 0) {
			negativos+=numero;
			ContadorNegativos++;
		} else if (numero > 0) {
			positivos +=numero;
			ContadorPositivos++;
		} else {
			ContadorCeros++;
		}

		if (numero % 2 == 0) {
			ContadorPares++;
		}
	
	contador++;

	respuesta = prompt("Desea continuar?");

	}

PromedioPositivos = positivos / ContadorPositivos;
PromedioNegativos = negativos / ContadorNegativos;
diferencia = ContadorPositivos - ContadorNegativos;

if (diferencia > 0) {
	msg = "Hay mas nº positivos" + diferencia;
} else if (diferencia == 0) {
	msg = "Misma cantidad";
} else {
	msg = "Hay mas nº negativos" + (diferencia * -1);
}

document.write(negativos + "<br>");
document.write(positivos + "<br>");
document.write(ContadorPositivos + "<br>");
document.write(ContadorNegativos + "<br>");
document.write(ContadorCeros + "<br>");
document.write(ContadorPares + "<br>");
document.write(PromedioPositivos + "<br>");
document.write(PromedioNegativos + "<br>");
document.write(diferencia + "<br>");
document.write(msg);

console.log(negativos);
console.log(positivos);
console.log(ContadorPositivos);
console.log(ContadorNegativos);
console.log(ContadorCeros);
console.log(ContadorPares);
console.log(PromedioPositivos);
console.log(PromedioNegativos);
console.log(diferencia);

}//FIN DE LA FUNCIÓN