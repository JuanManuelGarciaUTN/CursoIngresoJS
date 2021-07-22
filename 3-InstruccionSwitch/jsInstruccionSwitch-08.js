/*Switch Ejercicio 08

Enunciado:
Al seleccionar un destino 
informar si hace FRIO o CALOR 
en ese destino

Alumno: García Juan Manuel
*/
function mostrar()
{
	//declaro variables
	var destinoIngresado;

	var mensaje;

	//asigno a destinoIngresado
	destinoIngresado =txtIdDestino.value;


	//evaluo destino ingresado
	switch(destinoIngresado){

		case "Bariloche":
		case "Ushuaia":

			mensaje = "En " + destinoIngresado + " hace FRIO";
		break;

		case "Cataratas":

			mensaje = "En " + destinoIngresado + " hace CALOR";
		break;

		case "Mar del plata":

			mensaje = "En " + destinoIngresado + " hace FRIO a la noche y CALOR de día";
		break;

	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN