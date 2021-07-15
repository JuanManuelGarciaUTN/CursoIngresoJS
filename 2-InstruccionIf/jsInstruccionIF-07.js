/*IF ejercicio 7
Enunciado:
Al ingresar una edad menor a 18 años y un estado
civil distinto a "Soltero", mostrar el siguiente
mensaje: 'Es muy pequeño para NO ser soltero.'

Alumno: Garcia Juan Manuel
*/

function mostrar()
{
	//declaro variables
	var edad;
	var valorEstadoCivil;

	//tomo la edad 
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	//tomo el estado civil
	valorEstadoCivil = estadoCivil.value;


	if(edad<18){
		if(valorEstadoCivil!="Soltero"){

			alert("Es muy pequeño para NO ser soltero");
		}
	}


}//FIN DE LA FUNCIÓN