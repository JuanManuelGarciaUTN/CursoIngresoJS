/*Parcial 2019 Ejercicio 3
Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de
descuento, mostrar el precio final con
descuento por id.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
    var precio;
    var porcentajeDeDescuento;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);

    porcentajeDeDescuento = prompt("Ingrese porcentaje de descuento, ej para 30% ingrese 30");
    porcentajeDeDescuento = parseInt(porcentajeDeDescuento);

    descuento = precio * porcentajeDeDescuento /100;

    precioFinal = precio - descuento;

    elPrecioFinal.value = precioFinal;
}
