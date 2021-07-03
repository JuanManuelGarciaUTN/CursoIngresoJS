/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaracion de variables

	let nombre; //entrada

	//logica de programacion

	nombre = prompt("Ingrese su Nombre por favor");

	
	//Salida: mostrar nombre en txtIdNombre
	txtIdNombre.value = nombre;

}

