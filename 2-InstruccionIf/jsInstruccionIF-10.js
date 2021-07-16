/*IF ejercicio 10
Enunciado:
Al presionar el Botón, asignar 
una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

Alumno: Garcia Juan Manuel
*/
function mostrar() {

	var numeroRandom;
	var limiteMenor;
	var limiteMayor;

	var notaExamen;


	//Genero número RANDOM entre limiteMenor y LimiteMayor
	limiteMenor = 1;
	limiteMayor = 10;

	numeroRandom = Math.random();
	numeroRandom = numeroRandom * (limiteMayor - limiteMenor + 1);
	numeroRandom = numeroRandom + limiteMenor;
	numeroRandom = Math.floor(numeroRandom);

	//Asigno el numeroRandom a notaExamen
	notaExamen = numeroRandom;

	//Evalúo la notaExamen

	if (notaExamen > 8) {//para notas iguales a 9 o 10
		alert("EXCELENTE");
	}
	else {
		
		if (notaExamen > 4) {//para notas mayores a 4
			alert("APROBÓ");
		}
		else {
			if (notaExamen < 4) {//para notas menores a 4
				alert("Vamos, la proxima se puede");
			}
		}
	}

}//FIN DE LA FUNCIÓN