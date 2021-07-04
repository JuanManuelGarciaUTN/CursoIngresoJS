function mostrar()
{
	//tomo la edad  

	let edad = document.getElementById("txtIdEdad").value;

		//si edad es menor a 13 o mayor a 17 mostrar
	if(edad<13 || edad>17){

		alert("La persona NO es adolescente");
	}

}//FIN DE LA FUNCIÓN