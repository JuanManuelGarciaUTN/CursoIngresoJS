/*IF ejercicio 6
Enunciado:
Al ingresar una edad debemos informar 
si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
Alumno: Garcia Juan Manuel
*/

function mostrar() {
	//tomo la edad  
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

		//si edad es mayor a 17
	if (edad > 17){

		alert("La persona es mayor de edad");
	}
		//si no es el caso 
	else {

		//si edad es mayor a 12
		if(edad >12){

			alert("La persona es adolecente");
		}

		//si no es el caso
		else{
			alert("La persona es un niño");
		}
	}

}//FIN DE LA FUNCIÓN