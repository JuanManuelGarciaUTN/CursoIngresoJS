/*Switch Ejercicio 09

Enunciado:
una agencia de viajes debe sacar 
las tarifas de los viajes,
se cobra $15.000 por cada estadia 
como base, se pide el ingreso
de una estacion del año y
localidad para vacacionar
para poder calcular el precio final

en Invierno: 
bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: 
bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento

Alumno: García Juan Manuel
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;

	var precio;
	var porcentajeDeModificacion;
	var modificacionAlPrecio;
	
	precio = 15000;
	porcentajeDeModificacion = 0;

	estacionIngresada = txtIdEstacion.value;

	destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada){

		case "Invierno":
			switch(destinoIngresado){

				case "Bariloche":

					porcentajeDeModificacion = 20;
				break;//Bariloche

				case "Cordoba":
				case "Cataratas":

					porcentajeDeModificacion = -10;
				break;//Cataratas o Cordoba

				case "Mar del plata":

					porcentajeDeModificacion = -20;
				break;//Mar del plata
			}
		break;//Termina case Invierno

		case "Verano":

			switch(destinoIngresado){

				case "Bariloche":

					porcentajeDeModificacion = -20;
				break;//Bariloche

				case "Cordoba":
				case "Cataratas":

					porcentajeDeModificacion = 10;
				break;//Cataratas o Cordoba

				case "Mar del plata":

					porcentajeDeModificacion = 20;
				break;//Mar del plata
			}
		break;//Termina case Verano

		case "Primavera":
		case "Otoño":

			switch(destinoIngresado){

				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":

					porcentajeDeModificacion = 10;
				break;//Bariloche, Cataratas o Mar del plata
			}
		break;//Termina case Otoño o Primavera
	}
	
	modificacionAlPrecio = precio * porcentajeDeModificacion/100;

	precio = precio + modificacionAlPrecio;
	
	alert("El viaje a " + destinoIngresado +  " durante la estación " + estacionIngresada + " tiene una tarifa de $" + precio);



}//FIN DE LA FUNCIÓN