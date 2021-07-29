/*Ejercicio While 9

Enunciado:
Al presionar el botón pedir números hasta 
que el usuario quiera, mostrar:
el número máximo y el número mínimo ingresado. 

Alumno: Garcia Juan Manuel
*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;

	var respuesta;
	var flagPrimerIngreso;

	flagPrimerIngreso = true;

	
	do {

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);

		if(flagPrimerIngreso){

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			flagPrimerIngreso = false;
		}
		else{
			if(numeroIngresado < numeroMinimo){

				numeroMinimo = numeroIngresado;
			}
			else{
				if(numeroIngresado > numeroMaximo){
	
					numeroMaximo = numeroIngresado;
				}
			}
		}

		respuesta = confirm("¿Desea Ingresar otro número?");

	} while (respuesta);

	txtIdMaximo.value = "El máximo es: " + numeroMaximo;
	txtIdMinimo.value = "El mínimo es: " + numeroMinimo;
}//FIN DE LA FUNCIÓN