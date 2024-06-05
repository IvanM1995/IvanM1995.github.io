const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");

const formulario = document.getElementById("formulario");


let alerta = document.getElementById("alerta");

function limpiarErrores(event){
    const actualId = event.target.id;
    const actualInput = document.getElementById(actualId);
    const actualHermano = actualInput.nextElementSibling;

    if(actualHermano.nodeName == 'SPAN'){
    actualHermano.remove();
    }
}

formulario.addEventListener("submit" , (e)=>{
alerta.innerHTML = "";
e.preventDefault();
let expresionRegEmail = /\w+@\w+\.+[a-z]/; //Expresion regular para email.
let expresionRegNom = /^\w[a-zA-Z 0-9]{3,14}$/;//expresion regular para nombre.
let expresionRegTel = /\d[0-9]{0,8}/; //Expresion regular para telefono.
let enviado = true;

if(!expresionRegNom.test(nombre.value)){
        const spanError = document.createElement('span');
        spanError.textContent = '*Solo se aceptan letras de 3 a 14 caracteres'
        nombre.insertAdjacentElement("afterend",spanError);
        spanError.className ='Color';
    }
    if(!expresionRegEmail.test(email.value)){
        const spanError = document.createElement('span');
        spanError.textContent = '*El correo ingresado no es valido. Asegurese de usar @ .com'
        email.insertAdjacentElement("afterend",spanError);
        spanError.className ='Color';
    }
    if(!expresionRegTel.test(telefono.value)){
        const spanError = document.createElement('span');
        spanError.textContent = '*Caracteres invalidos solo se aceptan numeros'
        telefono.insertAdjacentElement("afterend",spanError);
        spanError.className ='Color';
    }
    if(telefono.value.length<8){
        const spanError = document.createElement('span');
        spanError.textContent = '*El num debe contener 8 caracteres '                        
        telefono.insertAdjacentElement("afterend",spanError);
        spanError.className ='Color';
    }
    if(mensaje.value.length<20){
        const spanError = document.createElement('span');
        spanError.textContent = '*El mensaje debe contener al menos 20 caracteres'
        mensaje.insertAdjacentElement("afterend",spanError);
        spanError.className ='Color';
    }
    if(enviado){
        let p = document.createElement('p');
        p.innerHTML = "Gracias por enviar su comentario.";
        nombre.value = '';
        email.value = '';
        telefono.value = '';
        mensaje.value = '';
    }


})















