/* Nombre: Juan Manuel
Apellido: García
Ejercicio: E/S n°6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar() {

	//declaracion de  variables
	var numeroUno;	//entrada
	var numeroDos;	//entrada
	var suma; //suma de los dos numeros

	//logica de programacion

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numero1);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numero2);


	suma = numeroUno + numeroDos;

	//Salida: mostrar en pantalla con alert()
	alert("la suma es " + suma);

}

