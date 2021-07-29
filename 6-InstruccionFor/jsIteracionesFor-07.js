/*Ejercicio For 7

Enunciado:
al presionar el botón pedir un número.
mostrar los numeros divisores desde el 1 
al número ingresado, y mostrar la cantidad 
de numeros divisores encontrados.  

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var cantidadDivisores;

	var numeroIngresado;

	cantidadDivisores=0;

	numeroIngresado = prompt("Ingrese un número");

	for(var contador=0 ; contador<numeroIngresado;) {

		contador++;
		
		if(numeroIngresado%contador == 0){

			console.log(contador + " es divisor de "+numeroIngresado);

			cantidadDivisores = cantidadDivisores + 1;
		}
	}

	alert("La cantidad de divisores de "+numeroIngresado+ " es: "+cantidadDivisores);


}//FIN DE LA FUNCIÓN