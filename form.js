// Agrego una funcion validarD y luego creo las variables con sus respectivos nombres para llamar mis elementos del form
function validarD(){
var nombre,email,telefono,mensaje;
nombre = document.getElementById("nombre").value;
email = document.getElementById("email").value;
telefono = document.getElementById("telefono").value;
mensaje = document.getElementById("mensaje").value;



expresionReg = /\w+@\w+\.+[a-z]/; //Expresion regular para email.
expresionRegNom = /^\w[a-zA-Z 0-9]{3,14}$/; //Expresion regular para nombre.
//Validamos los campos
if(nombre === ""){
    alert("Todos los campos son obligatorios");
    return false;
}
else if(!expresionRegNom.test(nombre)){
    alert("Solo Se permiten letras a - Z ");
    return false;
}

else if(email ===""){
    alert("Todos los campos son obligatorios");
    return false;
}
else if(!expresionReg.test(email)){
alert("El correo ingresado no es valido");
return false;
}
else if(telefono ===""){
    alert(" Todos los campos son obligatorios");
    return false;
}
else if(mensaje === ""){
    alert("Todos los campos son obligatorio")
    return false;
}
else if(nombre.length>14){
    alert("El nombre debe contener MAX 14 caracteres");
    return false;
}
else if(isNaN(telefono) || telefono.length>8){
    alert("Debe ingresar solo numeros y maximo 8 caracteres");
}
else if(mensaje.length>50){
    alert("Maximo 50 caracteres");
    return false;

}



}








