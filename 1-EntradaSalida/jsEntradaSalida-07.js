/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaracion de variables
	var numero1; //entrada
	var numero2; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion
	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);

	resultado = numero1 + numero2;

	//Salida: mostrar en pantalla resultado
	alert("la Suma es " + resultado);	
}

function restar()
{
	//declaracion de variables
	var numero1; //entrada
	var numero2; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion
	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);

	resultado = numero1 - numero2;

	//Salida: mostrar en pantalla resultado
	alert("la Resta es " + resultado);
}

function multiplicar()
{ 
	//declaracion de variables
	var numero1; //entrada
	var numero2; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion
	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);

	//Salida: mostrar en pantalla resultado
	resultado = numero1 * numero2;

	alert("la Multiplicación es " + resultado);
}

function dividir()
{
	//declaracion de variables
	var numero1; //entrada
	var numero2; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion
	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);

	resultado = numero1 / numero2;

	//Salida: mostrar en pantalla resultado
	alert("la División es " + resultado);
}

