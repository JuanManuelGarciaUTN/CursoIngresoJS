/*Ejercicio While 6

Enunciado:
Al presionar el botón pedir 5 números e 
informar la suma acumulada y el promedio.

Alumno: Garcia Juan Manuel
*/
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