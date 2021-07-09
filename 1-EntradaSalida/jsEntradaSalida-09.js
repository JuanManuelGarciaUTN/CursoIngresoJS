/*
Nombre: Juan Manuel
Apellido: Garcia
Ejercicio: E/S n°9 bis

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento segun 
el porcentaje que ingrese el usuario
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	//declaración de variables

	var sueldo; //entrada
	var porcentajeAumento; //entrada
	var resultado;

	//logica de programacion

	sueldo = txtIdSueldo.value; //asigna importe por ID
	sueldo = parseInt(sueldo);

	porcentajeAumento = prompt("Ingrese porcentaje por el cual aumentara Sueldo. ej: Para 30% ingrese 30");
	porcentajeAumento = parseInt(porcentajeAumento);
	porcentajeAumento = porcentajeAumento / 100;


	resultado = sueldo + sueldo * porcentajeAumento; //incremento a sueldo segun porcentaje


	//Salida: mostrar en Resultado el nuevo sueldo

	txtIdResultado.value = resultado;
}
