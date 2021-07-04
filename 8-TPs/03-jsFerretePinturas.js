/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//(°F − 32) × 5/9 = °C

    //declaracion de variables

    let fahrenheit; //entrada
    let centrigrados; //salida

    //logica de programacion

    fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
    centrigrados = (fahrenheit-32)*5/9;

    //salida: en °centigrados
    
    alert(fahrenheit+" Fahrenheit son "+centrigrados+" centigrados");

}

function CentigradosFahrenheit () 
{
	// °C × 9/5 + 32 = °F

    //declaracion de variables

    let centrigrados; //entrada
    let fahrenheit; //salida

    //logica de programacion

    centrigrados = parseInt(document.getElementById("txtIdTemperatura").value);
    fahrenheit = centrigrados*9/5+32;

    //salida: en °centigrados
    
    alert(centrigrados+" centigrados son "+fahrenheit+" fahrenheit");
}
