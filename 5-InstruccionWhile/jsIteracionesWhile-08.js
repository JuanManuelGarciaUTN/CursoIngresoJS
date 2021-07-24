/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	var sumaAcumuladaPositivos;

	var productoAcumuladoNegativos;

	var numeroIngresado;

	var respuesta;

	sumaAcumuladaPositivos = 0;
	productoAcumuladoNegativos = 1;

	do {

		numeroIngresado = prompt("Ingrese un número. \nLos positivos se suman y los negativos se multiplican");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado>0){

			sumaAcumuladaPositivos = sumaAcumuladaPositivos + numeroIngresado;
		}
		else{
			if(numeroIngresado<0){

				productoAcumuladoNegativos = productoAcumuladoNegativos * numeroIngresado;
			}
		}

		respuesta = prompt("Si desea ingresar otro número ingrese: \nsi");
		respuesta = respuesta.toLowerCase();
	} while(respuesta=="si");

	txtIdProducto.value = productoAcumuladoNegativos;
	txtIdSuma.value = sumaAcumuladaPositivos;

}//FIN DE LA FUNCIÓN