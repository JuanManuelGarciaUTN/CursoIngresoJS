/*Ejercicio While 5

Enunciado:
Al presionar el botón pedir un sexo:
'f' para femenino, 'm' para masculino.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("Ingrese sexo: f o m");
	sexoIngresado = sexoIngresado.toLowerCase();

	while(sexoIngresado!="f" && sexoIngresado!="m"){

		alert("ERROR Debe ingresar f o m");

		sexoIngresado = prompt("Reingrese sexo: f o m");
		sexoIngresado = sexoIngresado.toLowerCase();
	}

	txtIdSexo.value = sexoIngresado;
}//FIN DE LA FUNCIÓN