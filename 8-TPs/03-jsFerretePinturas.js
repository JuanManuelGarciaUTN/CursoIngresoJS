/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {


    var fahrenheit; //entrada
    var centrigrados; //salida


    fahrenheit = txtIdTemperatura.value;
    fahrenheit = parseInt(fahrenheit);

    //C° = (°F − 32) × 5/9 
    centrigrados = (fahrenheit - 32) * 5 / 9;

    //salida: en °centigrados

    alert(fahrenheit + " grados fahrenheit son " + centrigrados + " grados centigrados");

}

function CentigradosFahrenheit() {

    var centrigrados; //entrada
    var fahrenheit; //salida


    centrigrados = txtIdTemperatura.value;
    centrigrados = parseInt(centrigrados);

    // F° = °C × 9/5 + 32
    fahrenheit = centrigrados * 9 / 5 + 32;

    //salida: en °fahrenheit

    alert(centrigrados + " grados centigrados son " + fahrenheit + " grados fahrenheit");
}
