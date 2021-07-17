/*Switch Ejercicio 01

Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."

Alumno: García Juan Manuel
*/

function mostrar() {

	//tomo el mes
	var mesDelAnio;
	var mensaje;

	mesDelAnio = txtIdMes.value;

	mensaje = "Mes aburrido del año";

	switch(mesDelAnio){

		case "Enero":
			mensaje = "que comiences bien el año!!!";
		break;

		case "Marzo":
			mensaje = "a clases!!!";
		break;

		case "Julio":
			mensaje = "Se vienen las vacaciones!!!";
		break;

		case "Diciembre":
			mensaje = "Felices fiesta!!!";
		break;

	}

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN