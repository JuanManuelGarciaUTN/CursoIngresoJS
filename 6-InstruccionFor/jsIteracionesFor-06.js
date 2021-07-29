/*Ejercicio For 6

Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al 
número ingresado, y mostrar la cantidad 
de numeros pares encontrados. 

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var cantidadNumerosPares;

	var numeroIngresado;

	cantidadNumerosPares = 0;

	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);

	for(var contador=1;contador<numeroIngresado;contador++){

		if(contador%2 == 0){

			console.log(contador);
			cantidadNumerosPares = cantidadNumerosPares + 1;
		}
	}

	alert("La cantidad de números pares es: "+cantidadNumerosPares);

}//FIN DE LA FUNCIÓN