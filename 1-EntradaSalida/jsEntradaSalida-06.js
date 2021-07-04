/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	//declaracion variable
	let numero1;	//entrada
	let numero2;	//entrada
	let resultado; //suma de los dos numeros

	//logica de programacion

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 + numero2;

	//Salida: mostrar en pantalla con alert()
	alert("la suma es "+resultado);
}

