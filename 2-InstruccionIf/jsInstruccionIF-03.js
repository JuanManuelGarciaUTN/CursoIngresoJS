/*IF ejercicio 3
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	//tomo la edad

	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);


		//si es mayor a 17 mostrar
	if(edad > 17){
		alert("La persona es mayor de edad");
	}

		//si es no es mayor a 17 mostrar
	else{
		alert("La persona es menor de edad");
	}


}//FIN DE LA FUNCIÓN