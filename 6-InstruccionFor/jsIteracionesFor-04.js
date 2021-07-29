/*Ejercicio For 4

Enunciado:
al presionar el botón repetir 
hasta que utilizamos 'BREAK'. 

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var respuestas;

	for(;true;){

		respuestas = confirm("Break?");

		if(respuestas){
			break;
		}
	}

}//FIN DE LA FUNCIÓN