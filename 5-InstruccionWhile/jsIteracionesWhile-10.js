/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;

	var sumaNegativos;
	var cantidadNegativos;

	var sumaPositivos;
	var cantidadPositivos;

	var cantidadDeCeros;
	var cantidadDePares;

	var mensajeUno;
	var mensajeDos;
	var mensajeTres;
	var mensajeCuatro;
	var mensajeCinco;
	var mensajeSeis;
	var mensajeSiete;
	var mensajeOcho;
	var mensajeNueve;


	sumaNegativos = 0;
	cantidadNegativos = 0;

	sumaPositivos = 0;
	cantidadPositivos = 0;

	cantidadDeCeros = 0;
	cantidadDePares = 0;
	
	respuesta="si";



	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado>0){

			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos = cantidadPositivos + 1;
		}
		else{
			if(numeroIngresado<0){

				sumaNegativos = sumaNegativos - numeroIngresado;
				cantidadNegativos = cantidadNegativos + 1;
			}
			else{
				if(numeroIngresado==0){
					//evaluo si es 0 por si el usuario
					//ingresa un string no entre 
					
					cantidadDeCeros = cantidadDeCeros + 1;
				}
			}
		}

		if(numeroIngresado%2 == 0){

			cantidadDePares = cantidadDePares + 1;
		}

		respuesta=prompt("desea continuar?");

	}//fin del while

	mensajeUno = "1 la suma de negativos es: "+sumaNegativos+"<br>";
	mensajeDos = "2 la suma de positivos es: "+sumaPositivos+"<br>";

	mensajeTres = "3 la cantidad de positivos es: "+cantidadPositivos+"<br>";
	mensajeCuatro = "4 la cantidad de negativos es: "+cantidadNegativos+"<br>";

	mensajeCinco = "5 la cantida de ceros es: "+cantidadDeCeros+"<br>";
	mensajeSeis = "6 la cantida de números pares es  "+cantidadDePares+"<br>";

	if(cantidadPositivos==0){
		mensajeSiete = "7 el promedio de positivos es: No se ingresaron números Positivos <br>";
	}
	else{
		mensajeSiete = "7 el promedio de positivos es: "+sumaPositivos/cantidadPositivos+"<br>";
	}
	
	if(cantidadNegativos==0){
		mensajeOcho = "8 el promedio de negativos es: No se ingresaron número Negativos <br>";
	}
	else{
		mensajeOcho = "8 el promedio de negativos es: "+sumaNegativos/cantidadNegativos+"<br>";
	}
	
	mensajeNueve = "9 la diferencia entre positivos y negativos es: "+(sumaPositivos-sumaNegativos)+"<br>";

	document.write(mensajeUno, mensajeDos, mensajeTres, mensajeCuatro, mensajeCinco, mensajeSeis, mensajeSiete, mensajeOcho, mensajeNueve);

	}//FIN DE LA FUNCIÓN