/*IF ejercicio 8
Enunciado:
Al ingresar una edad menor a 18 años y un estado
civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor,
mostrar el siguiente mensaje: 'Es soltero y no es menor.'

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
	var edad;
	var valorEstadoCivil;

	//tomo la edad
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	//tomo estado civil
	valorEstadoCivil = estadoCivil.value;
	
	if(valorEstadoCivil=="Soltero"){
		if(edad>17){

			alert("Es soltero y no es menor");
		}
	}
	


}//FIN DE LA FUNCIÓN