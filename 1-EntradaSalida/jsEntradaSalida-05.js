/* Nombre: Juan Manuel
Apellido: García
Ejercicio: E/S n°5

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	//declaracion de variables

	var nombre; //entrada nombre
	var edad;	//entrada edad


	//logica de programa, asigno por ID.value

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;
	
	//Salida: mostrar en pantalla los datos de entrada
	
	alert("Usted se llama "+ nombre + " y tiene "+ edad +" años")
}

