/*Ejercicio For 8

Enunciado:
al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no. 

Alumno: Garcia Juan Manuel
*/
function mostrar() {

	var numeroIngresado;
	var esPrimo;

	esPrimo = true;

	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);

	for (var contador = 2; contador < numeroIngresado; contador++) {

		if(numeroIngresado%contador == 0 ){

			esPrimo = false;
			contador = numeroIngresado;//esto es para terminar el for
			
		}
	}

	if(esPrimo){
		alert("El número es primo");
	}
	else{
		alert("El número NO es primo");
	}

}//FIN DE LA FUNCIÓN