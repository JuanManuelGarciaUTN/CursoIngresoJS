
function mostrar()
{
	var contadorProductosIngresados;

	var cantidadBarbijos;
	var cantidadJabon;
	var cantidadAlcohol;

	var contadorDeComprasBarbijos;
	var contadorDeComprasJabon;
	var contadorDeComprasAlcohol;

	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;

	var masCaroJabonPrecio;
	var masCaroJabonCantidad;
	var masCaroJabonFabricante;

	var promedioPorCompra;

	var flagPrimerJabonIngresado;

	var mensajePuntoB;

	flagPrimerJabonIngresado = true;

	contadorProductosIngresados = 0;

	cantidadBarbijos = 0;
	cantidadJabon = 0;
	cantidadAlcohol = 0;

	contadorDeComprasBarbijos =0;
	contadorDeComprasJabon =0;
 	contadorDeComprasAlcohol =0;

	while(contadorProductosIngresados<5){

		contadorProductosIngresados = contadorProductosIngresados + 1;

		tipoIngresado = prompt("Ingrese tipo de producto: barbijo, jabón o alcohol");
		tipoIngresado = tipoIngresado.toLowerCase();

		//valido tipoIngresado
		while(tipoIngresado!="barbijo" && tipoIngresado!="jabón" && tipoIngresado!="alcohol") {

			
			tipoIngresado = prompt("ERROR. Tipo invalido.\n Ingrese tipo de producto: barbijo, jabón o alcohol");
			tipoIngresado = tipoIngresado.toLowerCase();
		}

		precioIngresado = prompt("Ingrese precio por unidad. Debe ser entre 100 y 300");
		precioIngresado = parseInt(precioIngresado);

		//valido precioIngresado
		while(precioIngresado<100 || precioIngresado > 300){

			precioIngresado = prompt("ERROR. Precio Fuera de Rango.\n Ingrese precio por unidad. Debe ser entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese cantidad de unidades. No debe superar 1000 o ser menor a 1");
		cantidadIngresada = parseInt(cantidadIngresada);

		//valido cantidadIngresada
		while(cantidadIngresada<1 || cantidadIngresada>1000){

			cantidadIngresada = prompt("ERROR. Cantidad Fuera de Rango.\n Ingrese cantidad de unidades. No debe superar 1000 o ser menor a 1");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		marcaIngresada = prompt("Ingrese marca");

		fabricanteIngresado = prompt("Ingrese fabricante");

		switch(tipoIngresado){

			case "jabón":

				cantidadJabon = cantidadJabon + cantidadIngresada;
				contadorDeComprasJabon = contadorDeComprasJabon + 1;

				//a)
				if(flagPrimerJabonIngresado){

					flagPrimerJabonIngresado = false;
					masCaroJabonPrecio = precioIngresado;
					masCaroJabonFabricante = fabricanteIngresado;
					masCaroJabonCantidad = cantidadIngresada;

				}
				else{
					if(precioIngresado > masCaroJabonPrecio){

						masCaroJabonPrecio = precioIngresado;
						masCaroJabonFabricante = fabricanteIngresado;
						masCaroJabonCantidad = cantidadIngresada;
					}
				}
				
			break;

			case "alcohol":

				cantidadAlcohol = cantidadAlcohol + cantidadIngresada;
				
				contadorDeComprasAlcohol = contadorDeComprasAlcohol + 1;

			break;

			case "barbijo":

				cantidadBarbijos = cantidadBarbijos + cantidadIngresada;

				contadorDeComprasBarbijos = contadorDeComprasBarbijos + 1;
			break;
		}
	}

	//a)
	if(contadorDeComprasJabon==0){

		alert("No se ingresaron productos del tipo jabón");
	}
	else{

		alert("Del tipo jabon, el más caro ingresado fue:\n Fabricante: "+masCaroJabonFabricante+"\n Cantidad de Unidades: "+masCaroJabonCantidad);
	}

	//b)

	//evaluo que producto tiene la mayor cantidad
	if(cantidadJabon>cantidadBarbijos){
		if(cantidadJabon>cantidadAlcohol){

			promedioPorCompra = cantidadJabon / contadorDeComprasJabon;

			mensajePuntoB = "El producto con más unidades en total es Jabon, y el promedio por compra es " + promedioPorCompra;
		}
		else{

			promedioPorCompra = cantidadAlcohol / contadorDeComprasAlcohol;

			mensajePuntoB = "El producto con más unidades en total es Alcohol, y el promedio por compra es " + promedioPorCompra;
		}
	}
	else{
		if(cantidadBarbijos > cantidadAlcohol){

			promedioPorCompra = cantidadBarbijos / contadorDeComprasBarbijos;

			mensajePuntoB = "El producto con más unidades en total es Barbijos, y el promedio por compra es " + promedioPorCompra;			
		}
		else{

			promedioPorCompra = cantidadAlcohol / contadorDeComprasAlcohol;

			mensajePuntoB = "El producto con más unidades en total es Alcohol, y el promedio por compra es " + promedioPorCompra;
		}
	}

	alert(mensajePuntoB);

	//c)
	alert("Se compraron "+cantidadBarbijos+" unidades de barbijos");
}
