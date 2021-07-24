/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;

	var respuesta;

	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado= parseInt(numeroIngresado);

	numeroMaximo = numeroIngresado;

	numeroMinimo = numeroIngresado;

	respuesta = prompt("Si desea ingresar otro número ingrese: \nsi");

	while(respuesta=="si"){

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado= parseInt(numeroIngresado);

		if(numeroIngresado < numeroMinimo){

			numeroMinimo = numeroIngresado;
		}
		else{
			if(numeroIngresado > numeroMaximo){

				numeroMaximo = numeroIngresado;
			}
		}

		respuesta = prompt("Si desea ingresar otro número ingrese: \nsi");
	}

	txtIdMaximo.value = "El máximo: " + numeroMaximo;
	txtIdMinimo.value = "El mínimo: " + numeroMinimo;
}//FIN DE LA FUNCIÓN