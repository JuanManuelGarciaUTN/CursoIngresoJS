/*Switch Ejercicio 04

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

Alumno: García Juan Manuel
*/

function mostrar() {

	var mesDelAnio;

	var mensaje;

	//tomo el mes
	mesDelAnio = txtIdMes.value;

	switch(mesDelAnio){

		case "Febrero":

			mensaje = mesDelAnio +" tiene 28 días.";

		break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":

			mensaje = mesDelAnio +" tiene 31 días.";

		break;

		default:

			mensaje = mesDelAnio +" tiene 30 días.";

		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN