/*IF ejercicio 5
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	//tomo la edad  

	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);


		//si edad es menor a 13 o mayor a 17 mostrar
	if(edad<13 || edad>17){

		alert("La persona NO es adolescente");
	}

}//FIN DE LA FUNCIÓN