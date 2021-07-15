/*Parcial 2019 Ejercicio 1
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios
para un triángulo equilátero por prompt y que muestre
el perímetro por alert.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
    var ladoDelTriangulo;
    var perimetroDelTrianguloEquilatero;

    ladoDelTriangulo = prompt("Ingrese el lado del triángulo");
    ladoDelTriangulo = parseInt(ladoDelTriangulo);

    perimetroDelTrianguloEquilatero = ladoDelTriangulo * 3;

    alert("El perimetro del triángulo es: "+perimetroDelTrianguloEquilatero);
}
