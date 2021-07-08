/* Nombre: Juan Manuel
Apellido: García
Ejercicio: E/S n°6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar()
{

	//declaracion de  variables
	var numero1;	//entrada
	var numero2;	//entrada
	var resultado; //suma de los dos numeros

	//logica de programacion

	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);

	resultado = numero1 + numero2;

	//Salida: mostrar en pantalla con alert()
	alert("la suma es "+resultado);
}

