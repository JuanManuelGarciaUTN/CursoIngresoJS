var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	var numeroRandom;
	var limiteMenor;
	var limiteMayor;

	//Genero número RANDOM entre limiteMenor y LimiteMayor
	limiteMenor = 1;
	limiteMayor = 3;

	numeroRandom = Math.random();
	numeroRandom = numeroRandom * (limiteMayor - limiteMenor + 1);
	numeroRandom = numeroRandom + limiteMenor;
	numeroRandom = Math.floor(numeroRandom);

	eleccionMaquina = numeroRandom;

}//FIN DE LA FUNCIÓN

function piedra()
{
	
    if(eleccionMaquina==1){
        
        alert("Empataste con la maquina");
		ContadorDeEmpates = ContadorDeEmpates + 1;
    }
    else{
        if(eleccionMaquina==2){

            alert("Perdiste contra la maquina");
			ContadorDePerdidas = ContadorDePerdidas + 1;
        }
        else{

            alert("Ganaste a la maquina");
			ContadorDeGanadas = ContadorDeGanadas + 1;
        }
    }

	mostrarResultado();
    comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina==2){
        
        alert("Empataste con la maquina");
		ContadorDeEmpates = ContadorDeEmpates + 1;
    }
    else{
        if(eleccionMaquina==3){

            alert("Perdiste contra la maquina");
			ContadorDePerdidas = ContadorDePerdidas + 1;
        }
        else{

            alert("Ganaste a la maquina");
			ContadorDeGanadas = ContadorDeGanadas + 1;
        }
    }

	mostrarResultado();
    comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3){
        
        alert("Empataste con la maquina");
		ContadorDeEmpates = ContadorDeEmpates + 1;
    }
    else{
        if(eleccionMaquina==1){

            alert("Perdiste contra la maquina");
			ContadorDePerdidas = ContadorDePerdidas + 1;
        }
        else{

            alert("Ganaste a la maquina");
			ContadorDeGanadas = ContadorDeGanadas + 1;
        }
    }

	mostrarResultado();
    comenzar();
	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	txtIdGanadas.value = "Juegos Ganados: "+ContadorDeGanadas;

	txtIdPerdidas.value = "Juegos Perdidos: "+ContadorDePerdidas;

	txtIdEmpatadas.value = "Juegos Empatados: "+ContadorDeEmpates;
}