/*Parcial 2019 Ejercicio 2
Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un
mensaje " ustedes se llaman xxxxx y xxxx pesan xx y
xx kilos, que sumados son xx kilos y el promedio de
peso xx ".

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
  var nombreUno;
  var nombreDos;

  var pesoUno;
  var pesoDos;

  var sumaDelPeso;
  var promedioDelPeso;

  //pedir datos
  nombreUno = prompt("Ingrese su nombre");

  pesoUno = prompt("Ingrese su peso");
  pesoUno = parseInt(pesoUno);

  nombreDos = prompt("Ingrese el nombre de su pareja");

  pesoDos = prompt("Ingrese el peso de su pareja");
  pesoDos = parseInt(pesoDos);


  //calculo suma y promedio
  sumaDelPeso = pesoUno + pesoDos;

  promedioDelPeso = sumaDelPeso/2;

  //muestro en pantalla
  alert("Ustedes se llaman "+nombreUno+" y "+nombreDos + ", pesan "+pesoUno+" y "+pesoDos+" kilos, que sumados son "+sumaDelPeso+" kilos y el promedio de peso es "+promedioDelPeso);
}
