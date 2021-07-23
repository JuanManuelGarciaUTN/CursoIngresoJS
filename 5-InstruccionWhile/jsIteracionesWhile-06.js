function mostrar()
{
	var contadorDeVueltas;

	var sumaAcumulada;
	var promedio;

	var numeroIngresado;

	contadorDeVueltas=0;
	sumaAcumulada=0;

	while(contadorDeVueltas<5){

		contadorDeVueltas = contadorDeVueltas + 1;

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		sumaAcumulada = sumaAcumulada + numeroIngresado;
	}

	promedio = sumaAcumulada/5;

	txtIdSuma.value = sumaAcumulada;
	txtIdPromedio.value = promedio;
}//FIN DE LA FUNCIÓN 