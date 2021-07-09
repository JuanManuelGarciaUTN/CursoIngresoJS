/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    var anchoTerreno;
    var largoTerreno;
    var perimetro;
    var alambreTotal;

    anchoTerreno = txtIdAncho.value;
    anchoTerreno = parseInt(anchoTerreno);

    largoTerreno = txtIdLargo.value;
    largoTerreno = parseInt(largoTerreno);

    perimetro = largoTerreno * 2 + anchoTerreno * 2;

    alambreTotal = perimetro * 3;

    alert("La cantidad de alambre a comprar es: " + alambreTotal);
}
function Circulo() {

    var radioTerreno;
    var perimetro;
    var alambreTotal;

    radioTerreno = txtIdRadio.value;
    radioTerreno = parseInt(radioTerreno);

    perimetro = radioTerreno * 3.14159 * 2; //perimetro de un circulo Radio x Pi x 2

    alambreTotal = perimetro * 3;

    alert("La cantidad de alambre a comprar es: " + alambreTotal);


}
function Materiales() {

    var anchoTerreno;
    var largoTerreno;

    var area;

    var cantidadBolsasCemento;
    var cantidadBolsasCal;

    anchoTerreno = txtIdAncho.value;
    anchoTerreno = parseInt(anchoTerreno);

    largoTerreno = txtIdLargo.value;
    largoTerreno = parseInt(largoTerreno);

    area = largoTerreno * anchoTerreno;


    cantidadBolsasCemento = area * 2;

    cantidadBolsasCal = area * 3;


    alert("Para las medidas del terreno rectangular se necesitan " + cantidadBolsasCemento + " bolsas de cemento y " + cantidadBolsasCal + " bolsas de cal.");
}