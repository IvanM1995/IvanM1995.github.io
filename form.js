const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

const formulario = document.getElementById("formulario");


let alerta = document.getElementById("alerta");

formulario.addEventListener("submit" , (e)=>{
alerta.innerHTML = "";
e.preventDefault();
let expresionRegEmail = /\w+@\w+\.+[a-z]/; //Expresion regular para email.
let expresionRegNom = /^\w[a-zA-Z 0-9]{3,14}$/;//expresion regular para nombre.
let expresionRegTel = /\d[0-9]{0,8}/; //Expresion regular para telefono.
let mostrarAlertas = false;

if(!expresionRegNom.test(nombre.value)){
        let p = document.createElement("p");
        p.innerHTML = "Solo se aceptan letras <br> min 3 a 14 caracteres"
        alerta.appendChild(p);
        mostrarAlertas = true ;
    }
    if(!expresionRegEmail.test(email.value)){
        let p = document.createElement("p");
        p.innerHTML = "El correo ingresado no es valido<br>Asegurese de usar @ ;.com";
        alerta.appendChild(p);
        mostrarAlertas = true;
    }
    if(!expresionRegTel.test(telefono.value)){
        let p = document.createElement("p");
        p.innerHTML = "Caracteres invalidos <br> solo se aceptan numeros"
        alerta.appendChild(p);
        mostrarAlertas = true;
    }
    if(telefono.value.length<8){
        let p = document.createElement("p");
        p.innerHTML = "El numero debe contener 8 caracteres";
        alerta.appendChild(p);
        mostrarAlertas = true;
    }
    if(mensaje.value.length<20){
        let p = document.createElement("p");
        p.innerHTML = "El mensaje debe contener<br>al menos 20 caracteres";
        alerta.appendChild(p);
        mostrarAlertas = true;
    }
    if(!mostrarAlertas){
        let p = document.createElement("p");
        p.innerHTML = "Gracias por enviar su comentario.";
        alerta.appendChild(p);
        mostrarAlertas = true;
        formulario.reset();
    }

    




})















