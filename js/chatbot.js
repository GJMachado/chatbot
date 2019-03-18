'use strict'


var mensageCliente, cod, mensajeBot;
var count = 0;
var incluir6 = RegExp("(COLEGIO|SECUNDARIA|COLEGIOS|COLE)");
var incluir5 = RegExp("(ESCUELA|ESCUELAS|PRIMARIA)");
var incluir3 = RegExp("(IDIOMA|INGLES|FRANCES|ALEMAN|CHINO|IDIOMAS|BILINGUE|BILINGUES)");
var incluir4 = RegExp("(HOLA|BUENAS|HI|SALUDOS|SALUDO|BUENAS)");
var incluir2 = RegExp("(INFORMACION|DATOS|INFO)");
var incluir8 = RegExp("(TECNICO|VOCACIONAL|PRIVADO|PUBLICO)");
var incluir7 = RegExp("(UBICACION|LUGARES|PAIS|PROVINCIA|UBICADAS|UBICADOS)");
var incluir1 = RegExp("(ADIOS|HASTA|LUEGO|NOS|VEMOS|NO|GRACIAS|PURA|VIDA|MUCHAS|GRACIAS)");
var incluir9 = RegExp("(UTILES|MINISTERIO|EDUCACION)");
var incluir10 = RegExp("(CORREO|QUEJAS|REPORTE|BUZON|SUGERENCIAS|SUGERENCIA|QUEJA)");

function tester(chatbox) {
    document.getElementById("chatLog").innerHTML +="Tu_ :" +chatbox.value+"<br>";
    cod = 0;
    mensageCliente = chatbox.value;
    mensageCliente = mensageCliente.toUpperCase();

    if (incluir1.test(mensageCliente) == true) {
        cod = 1;
    };
    if (incluir2.test(mensageCliente) == true) {
        cod = 2;
    };
    if (incluir3.test(mensageCliente) == true) {
        cod = 3;
    };
    if (incluir4.test(mensageCliente) == true) {
        cod = 4;
    };
    if (incluir5.test(mensageCliente) == true) {
        cod = 5;
    };
    if (incluir6.test(mensageCliente) == true) {
        cod = 6;
    };
    if (incluir7.test(mensageCliente) == true) {
        cod = 7;
    };
    if (incluir8.test(mensageCliente) == true) {
        cod = 8;
    };
    if (incluir9.test(mensageCliente) == true) {
        cod = 9;
    };
    if (incluir10.test(mensageCliente) == true) {
        cod = 10;
    };
    chatbox.value = "";
    console.log(cod);
    response();


};

function response() {

    switch (cod) {
        case 6:
            mensajeBot = "Que tipo de Colegio? talvez te ayude TECNICO o VOCACIONAL o PRIVADO o PUBLICO:<br>";
            break;
        case 5:
            mensajeBot = "Informacion de escuelas en este link:<br> Algo mas en que te pueda ayudar?<br>";
            break;
        case 3:
            mensajeBot = "Tenemos una serie de instituciones con capacidades en distintos lenguajes presione aqui <br>Algo mas en que te pueda ayudar?<br>";
            break;
        case 4:
            mensajeBot = "Hola un gusto!! en que te puedo servir? <br>";
            break;
        case 2:
            mensajeBot = "Que tipo de informacion buscas? <br>";
            break;
        case 8:
            mensajeBot = "En este enlace encontraras ese tipo de Colegios... <br> Algo mas en que te pueda ayudar?<br>";
            break;
        case 7:
            mensajeBot = "informacion por ubicaciones lo podras conseguir en este enlace<br>Algo mas en que te pueda ayudar?<br>";
            break;
        case 1:
            mensajeBot = "Saludos quedo a tus ordenes...<br>";
            break;
        case 9:
            mensajeBot = "En esta direccion la lista de utiles aprobada por el MEP<br>Algo mas en que te pueda ayudar?<br>";
            break;
        case 10:
            mensajeBot = "Aca encontraras los correos para generar una sugerencia o desconformidad...<br>";
            break;
        default:
            mensajeBot = "Datos insuficientes!!!... <br> Algo mas en que te pueda ayudar?<br>";
            count++;
            break;
    };

    if (count >= 3) {
        mensajeBot = "Necesitas pensar un momento sobre tus consultas!...<br>";
        count = 0;
    };

    document.getElementById("chatLog").innerHTML +="Bot_ :" +mensajeBot;


};
