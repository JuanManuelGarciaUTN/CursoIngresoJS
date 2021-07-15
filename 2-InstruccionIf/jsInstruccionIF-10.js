/*IF ejercicio 10
Enunciado:
Al presionar el Botón, asignar 
una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	
	var numeroRandom;
    var limiteMenor;
    var limiteMayor;

	var notaExamen;


	//Genero el número RANDOM entre 1 y 10 
    limiteMenor = 1;
    limiteMayor = 10;

 	numeroRandom = Math.random();
 	numeroRandom = numeroRandom * (limiteMayor - limiteMenor + 1);
 	numeroRandom = numeroRandom + limiteMenor;
 	numeroRandom = Math.floor(numeroRandom);

	//Asigno el numeroRandom a notaExamen
	notaExamen = numeroRandom;


	//Evalúo la notaExamen

		//para notas iguales a 9 o 10
	if(notaExamen>8){
		alert("EXCELENTE");
	}
	else{
			//para notas mayores a 4
		if(notaExamen>4){
			alert("APROBÓ");
		}
		else{
				//para notas menores a 4
			if(notaExamen<4){
				alert("Vamos, la proxima se puede");
			}
		}
	}

}//FIN DE LA FUNCIÓN