/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	//declaracion de variables
	var numeroUno; //entrada
	var numeroDos; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	//Salida: mostrar en pantalla resultado
	alert("la Suma es " + resultado);
}

function restar() {
	//declaracion de variables
	var numeroUno; //entrada
	var numeroDos; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);


	resultado = numeroUno - numeroDos;

	//Salida: mostrar en pantalla resultado
	alert("la Resta es " + resultado);
}

function multiplicar() {
	//declaracion de variables
	var numeroUno; //entrada
	var numeroDos; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	//Salida: mostrar en pantalla resultado
	resultado = numeroUno * numeroDos;

	alert("la Multiplicación es " + resultado);
}

function dividir() {
	//declaracion de variables
	var numeroUno; //entrada
	var numeroDos; //entrada
	var resultado; //resultado de la operacion

	//logica de programacion

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno / numeroDos;

	//Salida: mostrar en pantalla resultado
	alert("la División es " + resultado);
}

