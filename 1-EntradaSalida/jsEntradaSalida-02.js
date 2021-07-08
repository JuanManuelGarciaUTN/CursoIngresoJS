/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaracion de variable
	var nombre; //de entrada


	//logica del programa

		//pido al usuario ingresar nombre usando prompt
	nombre = prompt("Ingrese un texto para mostrar en pantalla");
		//lo que se encuentra a la derecha del = se ejecuta antes
		//por eso primer ejecuta el prompt y luego asigna dicho valor
		// a la variable en la izquierda, nombre

	//salida en pantalla
	alert(nombre);
}

