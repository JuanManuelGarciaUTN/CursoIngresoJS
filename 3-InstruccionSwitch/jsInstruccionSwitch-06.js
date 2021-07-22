/*Switch Ejercicio 06

Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".

Alumno: García Juan Manuel
*/
function mostrar()
{
	var horaDelDia

	var mensaje
	
	//tomo la hora
	horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);


	//evaluo la hora

	switch(horaDelDia){

		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			
			mensaje = "Es de mañana";

		break;//fin caso 7 a 11

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:

			mensaje = "Es de tarde";

		break;//fin caso 12 a 19

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:

			mensaje = "Es de noche";

		break;//fin caso 20 a 24 o 0 a 6

		default:

			mensaje = "La hora no existe";

		break;//fin hora ingresada invalida
	}


	//muestro el mensaje en pantalla
	alert(mensaje);

}//FIN DE LA FUNCIÓN