/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	//declaracion de variables

	var nombre; //entrada nombre
	var edad;	//entrada edad



	//logica de programa

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	


	//Salida: mostrar en pantalla los datos de entrada
	
	alert("Usted se llama "+ nombre + " y tiene "+ edad +" años")
}

