/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	//declaracion de variables
	let nombre; //entrada nombre
	let edad;	//entrada edad



	//logica de programa
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;


	//Salida: mostrar en pantalla los datos de entrada
	alert("Usted se llama "+ nombre + " y tiene "+ edad +" años")
}

