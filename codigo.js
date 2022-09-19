const inputMensaje = document.querySelector('#mensaje');
const inputResultado = document.querySelector('#resultado');

const btnEncriptar = document.querySelector('#encriptar');
const btnDesencriptar = document.querySelector('#desencriptar');
const btnCopiar = document.querySelector('#copiar');
const btnEscuchar = document.querySelector('#escuchar');

btnCopiar.style.visibility = "hidden";
btnEscuchar.style.visibility = "hidden";

function encriptar() {
    var mensaje = inputMensaje.value;
    mensaje = mensaje.toLowerCase();
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");
    inputResultado.value = mensajeEncriptado;

    if (inputMensaje.value == ""){
        inputResultado.style.backgroundImage = "url(imagenes/goku-msg.png)"
        document.querySelector('#copiar').style.visibility = "hidden";
        document.querySelector('#escuchar').style.visibility = "hidden";
    } else {
        document.querySelector('#copiar').style.visibility = "visible";
        document.querySelector('#escuchar').style.visibility = "visible";
        inputResultado.style.backgroundImage = "none"
    }

    inputMensaje.value = ""
}

function desencriptar() {
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    inputResultado.value = mensaje;

    if (inputMensaje.value == ""){
        inputResultado.style.backgroundImage = "url(imagenes/goku-msg.png)"
        document.querySelector('#copiar').style.visibility = "hidden";
        document.querySelector('#escuchar').style.visibility = "hidden";
    } else {
        document.querySelector('#copiar').style.visibility = "visible";
        document.querySelector('#escuchar').style.visibility = "visible";
        inputResultado.style.backgroundImage = "none"
    }

    inputMensaje.value = ""
}

function copiar() {
    inputResultado.select()
    navigator.clipboard.writeText(inputResultado.value)
    alert("Copiado! :)")
    inputResultado.value = ""
    inputMensaje.focus();
}

function escuchar() {
    var resultado = inputResultado.value
    let msg = new SpeechSynthesisUtterance();
    msg.text = resultado
    msg.lang = "es-US"
    window.speechSynthesis.speak(msg)
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

btnEscuchar.onclick = escuchar;