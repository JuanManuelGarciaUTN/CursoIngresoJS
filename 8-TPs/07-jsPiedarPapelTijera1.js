/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

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

//piedra es 1
//papel es 2
//tijera es 3

function piedra()
{

    if(eleccionMaquina==1){
        
        alert("Empataste con la maquina");
    }
    else{
        if(eleccionMaquina==2){

            alert("Perdiste contra la maquina");
        }
        else{

            alert("Ganaste a la maquina");
        }
    }

    comenzar();

}//FIN DE LA FUNCIÓN
function papel()
{
    if(eleccionMaquina==2){
        
        alert("Empataste con la maquina");
    }
    else{
        if(eleccionMaquina==3){

            alert("Perdiste contra la maquina");
        }
        else{

            alert("Ganaste a la maquina");
        }
    }

    comenzar();

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina==3){
        
        alert("Empataste con la maquina");
    }
    else{
        if(eleccionMaquina==1){

            alert("Perdiste contra la maquina");
        }
        else{

            alert("Ganaste a la maquina");
        }
    }

    comenzar();

}//FIN DE LA FUNCIÓN