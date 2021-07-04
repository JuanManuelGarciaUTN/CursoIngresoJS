/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    //declaracion de variables

    var largoTerreno; //entrada
    var anchoTerreno; //entrada

    var perimetroRectangulo; //ancho*2 + largo*2


    //logica de programacion

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

    perimetroRectangulo = largoTerreno * 2 + anchoTerreno * 2;

    //salida: mostrar cantidad de alambre necesario

    alert("Cantidad de alambre a comprar: " + (perimetroRectangulo * 3));

}
function Circulo() {

    //declaracion variables

    var radioTerreno; //entrada

    var perimetroCirculo; // 2*Pi*radio


    //logica de programacion

    radioTerreno = parseInt(document.getElementById("txtIdRadio").value);
    perimetroCirculo = 2 * 3.14159 * radioTerreno;

    //salida: mostrar cantidad de alambre necesario

    alert("Cantidad de alambre a comprar: " + (perimetroCirculo * 3));

}
function Materiales() {

    //declaracion de variables

    let largoTerreno; //entrada
    let anchoTerreno; //entrada

    let areaRectangulo; //ancho * alto

    let bolsasCemento; //area*2
    let bolsasCal;  //area*3

    //logica de programacion


    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

    areaRectangulo = anchoTerreno * largoTerreno;

    bolsasCemento = areaRectangulo * 2;
    bolsasCal = areaRectangulo * 3;

    //salida: mostrar cantidad de bolsas

    alert("Se necesitan:\n" +
        "   ->Bolsas de Cemento " + bolsasCemento + "\n" +
        "   ->Bolsas de Cal " + bolsasCal);

}