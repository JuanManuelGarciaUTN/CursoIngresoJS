/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaración de variables

	var sueldo; //entrada

	//logica de programacion

	sueldo = parseInt(txtIdSueldo.value);

	sueldo = parseInt(sueldo * 1.1); //incremento del 10% a sueldo, redondeado

	//Salida: mostrar en Resultado el nuevo sueldo

	txtIdResultado.value = sueldo;
}
