/**Parcial 2019 ejercicio 5
Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%

Alumno: García Juan Manuel
 */
function mostrar() {
   
    var destinoIngresado;

    var cantidadDeDiasViaje;

    var medioDePago;

    var precio;

    var porcentajeDeCambioAlPrecio;
    var cambioAlPrecio;

    var mensaje;

    //Inicio

    destinoIngresado = Marca.value;

    cantidadDeDiasViaje = prompt("Ingrese cuantos días va a viajar");
    cantidadDeDiasViaje = parseInt(cantidadDeDiasViaje);

    medioDePago = prompt("Ingrese medio de pago: \n"
                           + "  -Debito\n"
                           + "  -Mercado pago\n"
                           + "  -Efectivo\n"
                           + "  -Otro");

    precio = 100 * cantidadDeDiasViaje;

    //evaluo destinoIngresado
    switch(destinoIngresado){

        case "América":

            switch(medioDePago){

                case "Debito":
                    
                    porcentajeDeCambioAlPrecio = -60;
                break;

                default:

                    porcentajeDeCambioAlPrecio = -50;
                break;
            }
        break;

        case "África":

            switch(medioDePago){

                case "Efectivo":
                case "Mercado pago":
                    
                    porcentajeDeCambioAlPrecio = -75;
                break;

                default:

                    porcentajeDeCambioAlPrecio = -60;
                break;
            }
        break;

        case "Europa":

            switch(medioDePago){

                case "Debito":

                    porcentajeDeCambioAlPrecio = -35;
                break;
                case "Mercado pago":
                    
                    porcentajeDeCambioAlPrecio = -30;
                break;

                default:

                    porcentajeDeCambioAlPrecio = -25;
                break;
            }
        break;

        case "Asia":
        case "Oceania":

            porcentajeDeCambioAlPrecio = 20;
        break;
    }

    cambioAlPrecio = precio * porcentajeDeCambioAlPrecio / 100;

    precio = precio + cambioAlPrecio;

    mensaje = "El viaje a "+destinoIngresado+" por "+cantidadDeDiasViaje+" tiene un costo de "+precio+" con el medio de pago ingresado";

    alert(mensaje);
}
