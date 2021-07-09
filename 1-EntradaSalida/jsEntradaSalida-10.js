/*
Nombre: Juan Manuel
Apellido: Garcia
Ejercicio: E/S n°10 bis

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento 
segun el porcentaje que ingrese el usuario
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	//declaracion de variables

	var importe; //entrada
	var porcentajeDescuento; //entrada
	var resultado;

	//logica de programacion

	importe = txtIdImporte.value; //asigna importe por ID
	importe = parseInt(importe);

	porcentajeDescuento = prompt("Ingrese porcentaje por el cual se va a descontar el importe. ej para 30% ingrese 30");
	porcentajeDescuento = parseInt(porcentajeDescuento);
	porcentajeDescuento = porcentajeDescuento / 100;

	resultado = importe - importe * porcentajeDescuento; //descuento segun el valor porcentajeDescuento


	//Salida: mostrar resultado en Resultado asignandolo por ID

	txtIdResultado.value = resultado;

}
