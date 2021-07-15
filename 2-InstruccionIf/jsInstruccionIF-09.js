/*IF ejercicio 9
Enunciado:
Al presionar el Botón, mostrar un número 
Random del 1 al 10 inclusive

Alumno: Garcia Juan Manuel
*/
function mostrar() {

    var numeroRandom;
    var limiteMenor;
    var limiteMayor;

    limiteMenor = 1;
    limiteMayor = 10;

    numeroRandom = Math.random();
    numeroRandom = numeroRandom * (limiteMayor - limiteMenor + 1);
    numeroRandom = numeroRandom + limiteMenor;
    numeroRandom = Math.floor(numeroRandom);

    alert("El número random es: " + numeroRandom);


}//FIN DE LA FUNCIÓN
