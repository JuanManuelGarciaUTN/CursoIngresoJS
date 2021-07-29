/*Parcial 2019 Ejercicio 8

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar 
el ingreso de dos datos, una letra y 
un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:

a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. 

Alumno: Garcia Juan Manuel
*/
function mostrar()
{
    var letraIngresada;
    var numeroIngresado;

    var cantidadNumerosPares;
    var cantidadNumerosImpares;
    var cantidadDeCeros;

    var sumaTotalPositivos;
    var cantidadNumerosPositivos;
    var promedioNumerosPositivos;

    var sumaTotalNegativos;

    var numeroMaximo;
    var letraMaximo;

    var numeroMinimo;
    var letraMinimo;

    var flagPrimerIngreso;

    var respuesta;

    flagPrimerIngreso=true;

    cantidadNumerosPares = 0;
    cantidadNumerosImpares = 0;
    cantidadDeCeros = 0;

    sumaTotalPositivos = 0;
    cantidadNumerosPositivos=0;

    sumaTotalNegativos = 0;

    do {

        numeroIngresado = prompt("Ingrese un numero entre -100 y 100");
        numeroIngresado = parseInt(numeroIngresado);

        while(isNaN(numeroIngresado) || numeroIngresado < -99 || numeroIngresado > 99){

            numeroIngresado = prompt("ERROR. FUERA DE RANGO.\n Ingrese un numero entre -100 y 100");
            numeroIngresado = parseInt(numeroIngresado);
        }
        
        letraIngresada = prompt("Ingrese una letra");

        while(!isNaN(letraIngresada) || letraIngresada.length != 1){

            letraIngresada = prompt("ERROR. Debe Ingresar UNA letra.\n Ingrese una letra");
        }

        //valido si es par o impar
        if(numeroIngresado%2 == 0){

            cantidadNumerosPares = cantidadNumerosPares + 1;
        }
        else{

            cantidadNumerosImpares = cantidadNumerosImpares + 1;
        }

        //valido si es negativo
        if(numeroIngresado<0){

            sumaTotalNegativos = sumaTotalNegativos + numeroIngresado;
        }
        else{//valido si es positivo
            if(numeroIngresado>0){

                sumaTotalPositivos = sumaTotalPositivos + numeroIngresado;

                cantidadNumerosPositivos = cantidadNumerosPositivos + 1;
            }
            else{//si no es ninguno, es 0

                cantidadDeCeros = cantidadDeCeros + 1;
            }
        }

        //evaluo Maximo y minimo numero ingresado
        if(flagPrimerIngreso){
            
            flagPrimerIngreso = false;

            numeroMaximo = numeroIngresado;
            letraMaximo = letraIngresada;

            numeroMinimo = numeroIngresado;
            letraMinimo = letraIngresada;
        }
        else{
            if(numeroIngresado > numeroMaximo){
             
                numeroMaximo = numeroIngresado;
                letraMaximo = letraIngresada;
            }
            else{
                if(numeroIngresado < numeroMinimo){
                   
                    numeroMinimo = numeroIngresado;
                    letraMinimo = letraIngresada;
                }
            }
        }

        //pregunto si desea ingresar otro numero
        respuesta = confirm("¿Desea ingresar otro numero?");
    
    } while(respuesta);

    //a)
    alert("La cantidad de números pares es: "+cantidadNumerosPares);

    //b)
    alert("La cantidad de números impares es: "+cantidadNumerosImpares);

    //c)
    alert("La cantidad de ceros es: "+cantidadDeCeros);

    //d)
    promedioNumerosPositivos = sumaTotalPositivos / cantidadNumerosPositivos;

    alert("El promedio de números positivos ingresados es: "+promedioNumerosPositivos);

    //e)
    alert("La suma de números negativos ingresados es: "+sumaTotalNegativos);

    //f
    alert("El número y letra máximo es: "+numeroMaximo+ " " + letraMaximo +
            "\n"+"El número y letra mínimo es: "+numeroMinimo+ " "+ letraMinimo);
}
