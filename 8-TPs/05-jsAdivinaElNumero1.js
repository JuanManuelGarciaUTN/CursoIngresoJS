/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
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
}

function verificar() {
  var numeroIngresado;

  numeroIngresado = txtIdNumero.value;
  numeroIngresado = parseInt(numeroIngresado);

  if (numeroIngresado == numeroSecreto) {

    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
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