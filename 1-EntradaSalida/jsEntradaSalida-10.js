/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaracion de variables

	var importe; //entrada


	//logica de programacion

	importe = parseInt(document.getElementById("txtIdImporte").value);//asigna Ingrese Importe a importe
	importe = parseInt(importe * 0.75); //descuento del 25% redondeado


	//Salida: mostrar importe con descuento en Resultado
	
	txtIdResultado.value = importe;

}
