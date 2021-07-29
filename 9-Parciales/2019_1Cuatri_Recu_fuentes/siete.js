function mostrar()
{

    var alturaIngresada;
    var sexoIngresado;

    var contadorDeIngresos;

    contadorDeIngresos = 0;


    while(contadorDeIngresos<5){

        alturaIngresada = prompt("Ingrese altura.");
        alturaIngresada = parseInt(alturaIngresada);

        while(alturaIngresada<0 || alturaIngresada>250){

            alturaIngresada = prompt("ERROR. Altura Fuera de rango. Debe ser entre 0 y 250. \nIngrese altura.");
            alturaIngresada = parseInt(alturaIngresada);
        }

        sexoIngresado = prompt("Ingrese sexo. f o m");
        sexoIngresado = sexoIngresado.toLowerCase();

        while(sexoIngresado!="f" && sexoIngresado!="m"){

            sexoIngresado = prompt("ERROR. Debe ingresar f o m.\n Ingrese sexo. f o m");
            sexoIngresado = sexoIngresado.toLowerCase();
        }
    }
}
