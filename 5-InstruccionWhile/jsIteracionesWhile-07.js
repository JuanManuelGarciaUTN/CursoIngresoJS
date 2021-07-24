/*Ejercicio While 7

Enunciado:
Al presionar el botón pedir números hasta que:
el USUARIO QUIERA e informar la suma acumulada 
y el promedio.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var contadorDeVueltas;
	var sumaAcumulada;
	var promedio;
	var respuesta;

	var numeroIngresado;

	contadorDeVueltas=0;
	sumaAcumulada=0;

	do {

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		sumaAcumulada = sumaAcumulada + numeroIngresado;

		contadorDeVueltas = contadorDeVueltas + 1;

		respuesta = prompt("Si desea ingresar otro número escriba: \nsi");
		respuesta = respuesta.toLowerCase();

	} while(respuesta=="si");

	promedio = sumaAcumulada/contadorDeVueltas;

	txtIdSuma.value = sumaAcumulada;
	txtIdPromedio.value = promedio;

}//FIN DE LA FUNCIÓN