/*Ejercicio For 3

Enunciado:
al presionar el botón pedir la cantidad de 
veces que quiero repetir el mensaje "Hola UTN FRA" 

Alumno: Garcia Juan Manuel
*/
function mostrar()
{

	var repeticiones;

	repeticiones = prompt("Ingrese cuantas veces se quiere repetir el mensaje");
	repeticiones = parseInt(repeticiones);

	for(var contador = 0;contador<repeticiones;contador++){

		console.log("Hola UTN FRA");
	}

}//FIN DE LA FUNCIÓN