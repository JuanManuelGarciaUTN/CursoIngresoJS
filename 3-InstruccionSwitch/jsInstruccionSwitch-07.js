/*Switch Ejercicio 07

Mostrar información
Enunciado:
Al selecionar un destino , 
indicar el punto cardinal de 
nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste

Alumno: García Juan Manuel
*/

function mostrar()
{	
	//declaro variables
	var destinoIngresado;

	var mensaje;

	//asigno a destinoIngresado
	destinoIngresado =txtIdDestino.value;

	//evaluo destino
	switch(destinoIngresado){

		case "Bariloche":
			mensaje = destinoIngresado + " esta en el Oeste";
		break;

		case "Cataratas":
			mensaje = destinoIngresado + " esta en el Norte";
		break;

		case "Mar del plata":
			mensaje = destinoIngresado + " esta en el Este";
		break;

		case "Ushuaia":
			mensaje = destinoIngresado + " esta en el Sur";
		break;
	}

	//muestro mensaje por alert
	alert(mensaje);

}//FIN DE LA FUNCIÓN