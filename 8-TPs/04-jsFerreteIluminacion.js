/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 Alumno: Garcia Juan Manuel
 */
/*function CalcularPrecio () 
{
 	var cantidadDeLamparas;

    var marcaLampara;

    var precio;
    var porcentajeDescuento;
    var descuento;

    var ingresosBrutos;

    porcentajeDescuento = 0;

    //A

    //asigno a cantidad de lamparitas
    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    //calculo precio sin descuentos
    precio = cantidadDeLamparas * 35;

    //asigno marcaLamparas por ID
    marcaLampara = Marca.value;

    //evaluo si recibe un descuento por cantidad
    if(cantidadDeLamparas>5){//A
        
        porcentajeDescuento = 0.5;
    }
    else{//B
        if(cantidadDeLamparas==5){
            
            if(marcaLampara == "ArgentinaLuz"){
                
                porcentajeDescuento = 0.4;
            }
            else{
                
                porcentajeDescuento = 0.3;
            }
        }
        else{//C
            if(cantidadDeLamparas==4){
                if(marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas"){
                    
                    porcentajeDescuento = 0.25;
                }
                else{

                    porcentajeDescuento = 0.20;
                }
            }
            else{//D
                if(cantidadDeLamparas==3){
                    if(marcaLampara == "ArgentinaLuz"){
                        porcentajeDescuento = 0.15;
                    }
                    else{
                        if(marcaLampara=="FelipeLamparas"){
                            porcentajeDescuento = 0.10;
                        }
                        else{
                            porcentajeDescuento = 0.05;
                        }
                    }
                }
            }
        }
    }

    //calculo descuento
    descuento = precio * porcentajeDescuento;

    //aplico descuento a precio
    precio = precio - descuento;

    //E
    //evaluo si debe paga Ingresos Brutos
    if(precio>120){

        ingresosBrutos = precio * 0.10;

        precio = precio + ingresosBrutos;

        alert("IIBB Usted pago " + ingresosBrutos);
    }

    //asigno precio a caja en html por ID
    txtIdprecioDescuento.value = precio;
}*/

/*4.	TP 4 Con Switch
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 Alumno: Garcia Juan Manuel
 */
function CalcularPrecio () 
{
 	var cantidadDeLamparas;

    var marcaLampara;

    var precio;
    var porcentajeDescuento;
    var descuento;

    var ingresosBrutos;

    porcentajeDescuento = 0;

    //A

    //asigno a cantidad de lamparitas
    cantidadDeLamparas = txtIdCantidad.value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    //calculo precio sin descuentos
    precio = cantidadDeLamparas * 35;

    //asigno marcaLamparas por ID
    marcaLampara = Marca.value;

    //evaluo si recibe un descuento por cantidad
    if(cantidadDeLamparas>5){

        porcentajeDescuento = 0.5;
    }
    else{
        if(cantidadDeLamparas == 5){

            switch(marcaLampara){
                case "ArgentinaLuz":

                    porcentajeDescuento = 0.4;
                break;

                default:

                    porcentajeDescuento = 0.3;
                break;
            }
        }
        else{
            if(cantidadDeLamparas == 4){

                switch(marcaLampara){
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
    
                        porcentajeDescuento = 0.25;
                    break;
    
                    default:
    
                        porcentajeDescuento = 0.20;
                    break;
                }
            }
            else{
                if(cantidadDeLamparas == 3){

                    switch(marcaLampara){
                        case "ArgentinaLuz":
        
                            porcentajeDescuento = 0.15;
                        break;
        
                        case "FelipeLamparas":
        
                            porcentajeDescuento = 0.10;
                        break;
        
                        default:
        
                            porcentajeDescuento = 0.05;
                        break;
                    }
                }
            }
        }
    }

    //calculo descuento
    descuento = precio * porcentajeDescuento;

    //aplico descuento a precio
    precio = precio - descuento;

    //E
    //evaluo si debe paga Ingresos Brutos
    
    if(precio > 120){

        //Paga ingresos Brutos
        ingresosBrutos = precio * 0.1;
        alert("IIBB Usted pago " + ingresosBrutos);
        
        precio = precio + ingresosBrutos;
    }
    

    //asigno precio a caja en html por ID
    txtIdprecioDescuento.value = precio;
}
