/*Switch Ejercicio 05

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".

Alumno: García Juan Manuel
*/

function mostrar()
{
	var horaDelDia;

	var mensaje;

	//tomo la hora
	horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);

	switch(horaDelDia){

		default:

			mensaje = "No es de mañana";

		break;
		
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:

			mensaje = "Es de mañana";

		break;

		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN