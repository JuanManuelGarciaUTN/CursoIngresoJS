/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    //declaracion de variables

    var precio1; //entrada
    var precio2; //entrada
    var precio3; //entrada

    var sumaPrecios;//resultado

    //logica de programación

    precio1 = parseInt(txtIdPrecioUno.value);
    precio2 = parseInt(txtIdPrecioDos.value);
    precio3 = parseInt(txtIdPrecioTres.value);

    sumaPrecios = precio1 + precio2 + precio3;

    //Salida: mostrar suma de entradas en pantalla

    alert("La suma de los tres precios es: " + sumaPrecios);


}
function Promedio() {
    //declaracion de variables

    var precio1; //entrada
    var precio2; //entrada
    var precio3; //entrada
    var promedio; //resultado a mostrar

    //logica de programación

    precio1 = parseInt(txtIdPrecioUno.value);
    precio2 = parseInt(txtIdPrecioDos.value);
    precio3 = parseInt(txtIdPrecioTres.value);

    promedio = (precio1 + precio2 + precio3) / 3;

    //Salida: mostrar promedio de los 3 precios

    alert("El promedio de los tres precios es: " + promedio);

}
function PrecioFinal() {
    //declaracion de variables

    let precio1; //entrada
    let precio2; //entrada
    let precio3; //entrada
    let precioFinal;//resultado

    //logica de programación

    precio1 = parseInt(txtIdPrecioUno.value);
    precio2 = parseInt(txtIdPrecioDos.value);
    precio3 = parseInt(txtIdPrecioTres.value);

    precioFinal = (precio1 + precio2 + precio3) * 1.21;


    //Salida: mostrar suma de los tres precios más IVA (21%)

    alert("El precio final es: " + precioFinal);
}