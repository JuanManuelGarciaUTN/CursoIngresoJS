/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	//declaracion de variables

	var nombreIngresado; //entrada


	//logica de programacion

	nombreIngresado = document.getElementById("txtIdNombre").value;
		//asigna a nombreIngresado el valor del ID dentro del html


	//mostrar salida en pantalla
	alert(nombreIngresado);

}


