/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    var primerNumero;
    var segundoNumero;

    var operador;
    
    //Genero dos numeros random para primer y segundo número
    primerNumero = NumeroRandomEnteroConRango(1,10);

    segundoNumero = NumeroRandomEnteroConRango(1,10);

    //Genero numero random para determinar el operador
    operador = NumeroRandomEnteroConRango(1,4);

    //Asigno primer y segundo numero a su respectiva caj
    txtIdPrimerNumero.value = primerNumero;

    txtIdSegundoNumero.value = segundoNumero;

    //Asigno el operador a su caja, segun corresponda

    if(operador==1){

        txtIdOperador.value = "+";

        respuesta = primerNumero + segundoNumero;
    }
    else{
        if(operador==2){

            txtIdOperador.value = "-";

            respuesta = primerNumero - segundoNumero;
        }
        else{
            if(operador==3){

                txtIdOperador.value = "/";

                respuesta = primerNumero / segundoNumero;
                respuesta = parseInt(respuesta);//solo divisiones enteras
            }
            else{
                
                txtIdOperador.value = "x";

                respuesta = primerNumero * segundoNumero;
            }
        }
    }

}//FIN DE LA FUNCIÓN
function Responder()
{
    var valorIngresado;

	valorIngresado = txtIdRespuesta.value;
    valorIngresado = parseInt(valorIngresado);

    if(valorIngresado==respuesta){

        alert("La respuesta es correcta!");
    }
    else{

        alert("Respuesta Incorrecta\n"+
            "Ingresaste "+valorIngresado+" y el resultaro correcto es "+respuesta);
    }


}//FIN DE LA FUNCIÓN

function NumeroRandomEnteroConRango(limiteMenor = 0, limiteMayor = 1){
    //Genero el número RANDOM entre 1 y 3
	var numeroRandom;

	numeroRandom = Math.random();
	numeroRandom = numeroRandom * (limiteMayor - limiteMenor + 1);
	numeroRandom = numeroRandom + limiteMenor;
	numeroRandom = Math.floor(numeroRandom);

	return numeroRandom;
}