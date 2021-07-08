/* Nombre: Juan Manuel
Apellido: García
Ejercicio: E/S n°4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaracion de variables

	var nombre; //entrada

	//logica de programacion

	nombre = prompt("Ingrese su Nombre por favor");
		//asigno el valor ingresado por prompt a nombre
	
	//Salida: asigno el valor de nombre a txtIdNombre
	txtIdNombre.value = nombre;

}

