/*Parcial 2019 Ejercicio 7

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por 
prompt de las alturas en centimetros
(validar entre 0 y 250) , el sexo. 
(validar el sexo “f” o “m”) de 5 jugadores 
de básquet, informar por alert:

a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura 
supere los 190 centimetros.

Alumno: Garcia Juan Manuel
*/
function mostrar()
{

    var alturaIngresada;
    var sexoIngresado;

    var contadorDeIngresos;

    var sumaTotalAltura;

    var menorAltura;
    var sexoMenorAltura;
    var flagPrimerIngreso;

    var cantidadMujeresAlturaMayorCientoNoventa;

    contadorDeIngresos = 0;

    sumaTotalAltura = 0;
    flagPrimerIngreso = true;
    cantidadMujeresAlturaMayorCientoNoventa = 0;


    while(contadorDeIngresos<5){

        contadorDeIngresos = contadorDeIngresos + 1;

        alturaIngresada = prompt("Ingrese altura.");
        alturaIngresada = parseInt(alturaIngresada);

        while(isNaN(alturaIngresada) || alturaIngresada<0 || alturaIngresada>250){

            alturaIngresada = prompt("ERROR. Altura Fuera de rango. Debe ser entre 0 y 250. \nIngrese altura.");
            alturaIngresada = parseInt(alturaIngresada);
        }

        sexoIngresado = prompt("Ingrese sexo. f o m");
        sexoIngresado = sexoIngresado.toLowerCase();

        while(sexoIngresado!="f" && sexoIngresado!="m"){

            sexoIngresado = prompt("ERROR. Debe ingresar f o m.\n Ingrese sexo. f o m");
            sexoIngresado = sexoIngresado.toLowerCase();
        }

        //sumo altura a la suma total
        sumaTotalAltura = sumaTotalAltura + alturaIngresada;

        //evaluo si es la menor altura hasta ahora
        if(flagPrimerIngreso){

            flagPrimerIngreso = false;
            menorAltura = alturaIngresada;
            sexoMenorAltura = sexoIngresado;
        }
        else{
            if(alturaIngresada < menorAltura){

                menorAltura = alturaIngresada;
                sexoMenorAltura = sexoIngresado;
            }
        }

        //evaluo si es mujer y su altura es mayor a 190
        if(sexoIngresado == "f" && alturaIngresada > 190){

            cantidadMujeresAlturaMayorCientoNoventa = cantidadMujeresAlturaMayorCientoNoventa + 1;
        }
    }

    //a)
    alert("El promedio de altura es: "+sumaTotalAltura/5);

    //b)
    alert("La altura más baja es: "+menorAltura+". Y su sexo es: "+sexoMenorAltura);

    //c)
    alert("Cantidad de mujeres cuya altura supere los 190cm es: "+cantidadMujeresAlturaMayorCientoNoventa);
}
