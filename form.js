const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementsById('mensaje');

const form = document.getElementById('formulario');
let alertas = document.getElementById('alertas');

form.addEventListener('submit', (e) => {
alertas.innerHTML = '';
e.prevenDefault();
let regExp_mail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
let regExp_num = /^\d{7,14}$/;
let regExp_nomb = /^[a-zA-Z0-9/_/-]{4,16}$/
let mostrarAlertas = false;
if(nombre.value.length<4){
let p = document.createElement('p');
p.innerHTML = 'El nombre debe contener al menos 4 caracteres <br>';
alertas.appendChild(p)
mostrarAlertas = true;
}
if(!regExp_mail.test(email.value)){
let p = document.createElement('p');
p.innerHTML = ' El email no es valido <br>';
alertas.appendChild(p);
mostrarAlertas = true;
}
if(regExp_num.test(telefono.value)){
let p = document.createElement('p');
p.innerHTML = 'El numero de telefono tiene caracteres no validos<br>';
alertas.appendChild(p)
mostrarAlertas = true;

}

if(telefono.value.length<8){
    let p = documen.createElemnt('p');
    p.innerHTML = 'El telefono debe contener almenos 8 digitos<br>';
    alertas.appendChild(p);
    mostrarAlertas = true;
}

if(mensaje.value.length<15){
    let p = document.createElement('p');
    p.innerHTML = 'El mensaje solo permite 15 caracteres o menos <br>'
    alertas.appendChild(p);
    mostrarAlertas = true;

}
if(!mostrarAlertas){
    let p = documen.createElement('p');
    p.innerHTML = 'Gracias por dejar su mensaje !';
    alertaas.appendChild(p);
    form.reset();
}


})
