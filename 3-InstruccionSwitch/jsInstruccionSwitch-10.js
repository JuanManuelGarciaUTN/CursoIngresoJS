/*Switch Ejercicio 10

Enunciado:
una agencia de viajes nos piden 
informar si hacemos viajes a lugares 
según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" 
a ese lugar

en Invierno: 
	Solo Bariloche informa "se viaja" 
	los demas destinos "No se viaja"

en Verano: 
	Se viaja a Mar del plata y 
	Cataratas solamente

en Otoño: 
	Se viaja a todos los destinos.

primavera: 
	solo no se viaja a Bariloche

Alumno: García Juan Manuel
*/
function mostrar() {

	var estacionIngresada;
	var destinoIngresado;

	var mensaje;

	estacionIngresada = txtIdEstacion.value;

	destinoIngresado = txtIdDestino.value;

	mensaje = "NO se viaja";//Por defecto No se viaja

	switch(estacionIngresada){

		case "Invierno":

			switch(destinoIngresado){

				case "Bariloche":

					mensaje = "Se viaja";
			}
		break;//Termina case Invierno

		case "Verano":
			switch(destinoIngresado){

				case "Mar del plata":
				case "Cataratas":

					mensaje = "Se viaja";
			}
		break;//Termina case Verano

		case "Primavera":
			switch(destinoIngresado){

				case "Bariloche":
					//no hacer nada
				break;

				default://Si no es Bariloche

					mensaje = "Se viaja";
			}
		break;//Termina case Primavera
		
		case "Otoño":

			mensaje = "Se viaja";
		//Termina case Otoño
	}

	mensaje = mensaje + " a " + destinoIngresado + " en " + estacionIngresada;//No se viaja a "var destino" en "var temporada"
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN