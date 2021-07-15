/*Parcial 2019 Ejercicio 4
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar 
el resultado, muestro el mensaje
"la resta es xxx y superó el 10".

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
    var numeroUno;
    var numeroDos;

    var resultado;

    numeroUno = prompt("Ingrese el primer número");
    numeroDos = prompt("Ingrese el segundo numero");

    if(numeroUno == numeroDos){
        alert(numeroUno+numeroDos);
    }
    else{
        numeroUno = parseInt(numeroUno);
        numeroDos = parseInt(numeroDos);

        if(numeroUno > numeroDos){

            resultado =numeroUno - numeroDos;

            if(resultado>10){
                alert("La resta es "+resultado+" y superó el 10");
            }
            else{
                alert("La resta es "+resultado);
            }
        }
        else{
            resultado = numeroUno + numeroDos;

            alert("El resultado es "+resultado);
        }
    }
}
