/*Ejercicio While 4

Enunciado:
al presionar el botón pedir:
un número entre 0 y 9 inclusive.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado>9 || numeroIngresado <0){

		alert("ERROR Numero fuera de Rango!!");

		numeroIngresado = prompt("Reingrese un número entre 0 y 9.");
	}

	txtIdNumero.value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN