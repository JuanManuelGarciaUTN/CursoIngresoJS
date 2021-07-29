/*Ejercicio While 10

Enunciado:
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
9-Diferencia entre positivos y negativos, (positvos-negativos). 

Alumno: Garcia Juan Manuel
*/
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

	var mensaje;

	mensaje="";

	sumaNegativos = 0;
	cantidadNegativos = 0;

	sumaPositivos = 0;
	cantidadPositivos = 0;

	cantidadDeCeros = 0;
	cantidadDePares = 0;
	

	do {
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

		respuesta=confirm("¿Desea continuar?");

	}while(respuesta);//fin del while

	mensaje = mensaje + "1) la suma de negativos es: "+sumaNegativos+"<br>";
	mensaje = mensaje + "2) la suma de positivos es: "+sumaPositivos+"<br>";

	mensaje = mensaje + "3) la cantidad de positivos es: "+cantidadPositivos+"<br>";
	mensaje = mensaje + "4) la cantidad de negativos es: "+cantidadNegativos+"<br>";

	mensaje = mensaje + "5) la cantida de ceros es: "+cantidadDeCeros+"<br>";
	mensaje = mensaje + "6) la cantida de números pares es  "+cantidadDePares+"<br>";

	if(cantidadPositivos==0){
		mensaje = mensaje + "7) el promedio de positivos es: No se ingresaron números Positivos <br>";
	}
	else{
		mensaje = mensaje + "7) el promedio de positivos es: "+sumaPositivos/cantidadPositivos+"<br>";
	}
	
	if(cantidadNegativos==0){
		mensaje = mensaje + "8) el promedio de negativos es: No se ingresaron número Negativos <br>";
	}
	else{
		mensaje = mensaje + "8) el promedio de negativos es: "+sumaNegativos/cantidadNegativos+"<br>";
	}
	
	mensaje = mensaje + "9) la diferencia entre positivos y negativos es: "+(sumaPositivos-sumaNegativos)+"<br>";

	document.write(mensaje);

	}//FIN DE LA FUNCIÓN