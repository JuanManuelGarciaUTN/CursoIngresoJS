/*Ejercicio While 3

Enunciado:
al presionar el botón pedir la CLAVE 
(ayuda: es utn750)

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese la clave.");

	while(claveIngresada!="utn750"){

		alert("ERROR CLAVE INCORRECTA!!");

		claveIngresada = prompt("Vuelva a ingresar la clave.");
	}

	alert("Clave Correcta");
	
}//FIN DE LA FUNCIÓN
