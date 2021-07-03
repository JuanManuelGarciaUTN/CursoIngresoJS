/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaración de variables
	var dividendo;
	var divisor;

	var resultado;

	//logica de programación
	dividendo = parseInt(txtIdNumeroDividendo.value);
	divisor = parseInt(txtIdNumeroDivisor.value);

	resultado = dividendo % divisor;

	//Salida: mostrar resultado en pantalla

	alert("El resto es " + resultado);
}
