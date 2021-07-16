function mostrar() {
    var continenteDelViaje;
    var cantidadDeDias;
    var metodoDePago;
    var precioDelViaje;
    var descuento;
    var esValido;

    //asigno a contienteDelViaje el valor de la caja del html
    continenteDelViaje = Marca.value;

    //pido al usuario que ingrese cantidad de dias del viaje
    cantidadDeDias = prompt("Cuantos dias va a viajar");
    cantidadDeDias = parseInt(cantidadDeDias);

    //evaluo si la cantidad de dias es valida
    if (cantidadDeDias < 1) {//si no es valida muestro EROR
        alert("ERROR. Cantidad de días de viaje debe ser mayor a 0");
    }
    else {//Si es valida continuo

        //pido al usuario que ingrese el metodo de pago
        metodoDePago = prompt("Ingrese metodo de pago:\n" +
                                "-Efectivo\n" +
                                "-Debito\n" +
                                "-Mercado Pago\n" +
                                "-Otro");

        //evaluo si el metodoDePago es valido
        esValido = metodoDePago == "Efectivo" || metodoDePago == "Debito" || metodoDePago == "Mercado Pago" || metodoDePago == "Otro";
        
        if (!esValido) {//Si no es valido muestro ERROR
            alert("ERROR, metodo de pago ingresado INVALIDO");
        }
        else {//Si es valido evaluo el ContinenteDelViaje

            //calculo el precioDelViaje antes de descuentos o recargos
            precioDelViaje = cantidadDeDias * 100;


            //evaluo el continente al cual viaja
            if(continenteDelViaje == "América"){//Si continente es America entro

                //calculo el descuento segun corresponda

                descuento = 0.5;//50% descuento

                if(metodoDePago=="Debito"){//Si metodo de pago es Debito entro
                    descuento = descuento + 0.1;//10% descuento
                }
                
                descuento = precioDelViaje * descuento;

                //despues de calcular el descuento lo resto al precio

                precioDelViaje = precioDelViaje - descuento;

                //muestro el precio del viaje en pantalla
                alert("El costo del viaje es "+precioDelViaje);

            }//Si no es America
            else if(continenteDelViaje == "África"){//Si es Africa

                //calculo el descuento segun corresponda

                descuento = 0.6;//60% descuento

                //evaluo si el metodo de pago tiene descuento adicional
                if(metodoDePago=="Efectivo" || metodoDePago=="Mercado Pago"){
                    descuento = descuento + 0.15;//15% descuento
                }

                descuento = precioDelViaje * descuento;

                //despues de calcular el descuento lo resto al precio

                precioDelViaje = precioDelViaje - descuento;

                //muestro el precio del viaje en pantalla
                alert("El costo del viaje es "+precioDelViaje);

            }//Si tampoco es Africa
            else if(continenteDelViaje == "Europa"){//Si es Europa
                
                //calculo el descuento segun corresponda

                descuento = 0.2;//20% descuento

                //evaluo si el metodo de pago tiene descuento adicional
                if(metodoDePago=="Debito"){
                    descuento = descuento + 0.15;//15% descuento
                }
                else{
                    if(metodoDePago=="Mercado Pago"){
                        descuento = descuento + 0.10;//10% descuento
                    }
                    else{
                        descuento = descuento + 0.05;//5% descuento
                    }
                }

                descuento = precioDelViaje * descuento;

                //despues de calcular el descuento lo resto al precio

                precioDelViaje = precioDelViaje - descuento;

                //muestro el precio del viaje en pantalla
                alert("El costo del viaje es "+precioDelViaje);

            }//Si continente no es ninguna de las anteriores
            else{

                //El precio tiene un recargo del 20%
                precioDelViaje = precioDelViaje * 1.2;//20% de recargo

                //muestro el precio del viaje en pantalla
                alert("El costo del viaje es "+precioDelViaje);
            }
        }
    }
}
