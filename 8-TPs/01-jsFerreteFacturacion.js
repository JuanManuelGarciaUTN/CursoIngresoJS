/*

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {

    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var sumaTotal;

    primerPrecio = txtIdPrecioUno.value;
    primerPrecio = parseInt(primerPrecio);

    segundoPrecio = txtIdPrecioDos.value;
    segundoPrecio = parseInt(segundoPrecio);

    tercerPrecio = txtIdPrecioTres.value;
    tercerPrecio = parseInt(tercerPrecio);


    sumaTotal = primerPrecio + segundoPrecio + tercerPrecio;

    alert("La suma de los tres precios es: " + sumaTotal);
}
function Promedio() {

    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var sumaTotal;
    var promedio;

    primerPrecio = txtIdPrecioUno.value;
    primerPrecio = parseInt(primerPrecio);

    segundoPrecio = txtIdPrecioDos.value;
    segundoPrecio = parseInt(segundoPrecio);

    tercerPrecio = txtIdPrecioTres.value;
    tercerPrecio = parseInt(tercerPrecio);


    sumaTotal = primerPrecio + segundoPrecio + tercerPrecio;

    promedio = sumaTotal / 3;

    alert("El promedio de los tres precios es: " + promedio);
}
function PrecioFinal() {

    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var sumaTotal;
    var precioConIva;

    primerPrecio = txtIdPrecioUno.value;
    primerPrecio = parseInt(primerPrecio);

    segundoPrecio = txtIdPrecioDos.value;
    segundoPrecio = parseInt(segundoPrecio);

    tercerPrecio = txtIdPrecioTres.value;
    tercerPrecio = parseInt(tercerPrecio);


    sumaTotal = primerPrecio + segundoPrecio + tercerPrecio;

    precioConIva = sumaTotal * 1.21;//Incremento sumaTotal por 21 (IVA)


    alert("El precio final con IVA es: " + precioConIva);
}