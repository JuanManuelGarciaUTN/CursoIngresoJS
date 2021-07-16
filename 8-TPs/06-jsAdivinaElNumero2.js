/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos;

function comenzar() {
	//Genero el número RANDOM entre 1 y 100
	var numeroRandom;
	var limiteMenor;
	var limiteMayor;

	//Genero número RANDOM entre limiteMenor y LimiteMayor
	limiteMenor = 1;
	limiteMayor = 100;

	numeroRandom = Math.random();
	numeroRandom = numeroRandom * (limiteMayor - limiteMenor + 1);
	numeroRandom = numeroRandom + limiteMenor;
	numeroRandom = Math.floor(numeroRandom);

	numeroSecreto = numeroRandom;

	contadorIntentos = 1;

	txtIdIntentos.value = contadorIntentos;

	alert(numeroSecreto);
}

function verificar() {
	var numeroIngresado;

	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt(numeroIngresado);

	if (numeroIngresado == numeroSecreto) {

		if(contadorIntentos>10){
			
			alert("afortunado en el amor!!");
		}
		else{
			if(contadorIntentos>5){

				alert("falta técnica");
			}
			else{
				if(contadorIntentos==5){

					alert("usted esta en la media");
				}
				else{
					if(contadorIntentos==4){

						alert("Excelente técnica");
					}
					else{
						if(contadorIntentos==3){

							alert("Esto es suerte");
						}
						else{
							if(contadorIntentos==2){
								alert("exelente percepción");
							}
							else{

								alert("usted es un Psiquico");
							}
						}
					}
				}
			}
		}
	}
	else {

		contadorIntentos = contadorIntentos + 1;

		if (numeroIngresado > numeroSecreto) {
			alert("Se paso...");
		}
		else {
			alert("Falta...");
		}
	}

	txtIdIntentos.value = contadorIntentos;

}