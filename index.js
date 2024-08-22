function encriptar() {
    let texto = document.getElementById("encriptador__textoAModificar__textArea").value;
    let resultado__textoModificado__titulo = document.getElementById("resultado__textoModificado__titulo");
    let resultado__textoModificado__parrafo = document.getElementById("resultado__textoModificado__parrafo");
    let imagen__encriptar = document.getElementById("imagen__encriptar");

    let textoCifrado = texto
                        
                        .replace(/e/gi , "entre")
                        .replace(/i/gi , "imes")
                        .replace(/a/gi , "ai")
                        .replace(/o/gi , "ober")
                        .replace(/u/gi , "ufat");
    
    if (texto.length !=0) {
        document.getElementById("encriptador__textoAModificar__textArea").value = textoCifrado;
        resultado__textoModificado__titulo.textContent = "Texto encriptado con exito!!";
        resultado__textoModificado__parrafo.textContent = "";
        imagen__encriptar.src = "./img/cofreCerrado.png"
    } else {
        imagen__encriptar.src = "./img/encriptar.png"
        resultado__textoModificado__titulo.textContent = "Debes ingresar un texto";
        resultado__textoModificado__parrafo.textContent = "Ingrese el mensaje que desea desenciptar/encriptar";
        swal("Ooops!", "Debes ingresar un texto","error")
    }

}

function desencriptar() {
    let texto = document.getElementById("encriptador__textoAModificar__textArea").value;
    let resultado__textoModificado__titulo = document.getElementById("resultado__textoModificado__titulo");
    let resultado__textoModificado__parrafo = document.getElementById("resultado__textoModificado__parrafo");
    let imagen__encriptar = document.getElementById("imagen__encriptar");

    let textoCifrado = texto
                        
                        .replace(/entre/gi , "e")
                        .replace(/imes/gi , "i")
                        .replace(/ai/gi , "a")
                        .replace(/ober/gi , "o")
                        .replace(/ufat/gi , "u");
    
    if (texto.length !=0) {
        document.getElementById("encriptador__textoAModificar__textArea").value = textoCifrado;
        resultado__textoModificado__titulo.textContent = "Texto desencriptado con exito!!";
        resultado__textoModificado__parrafo.textContent = "";
        imagen__encriptar.src = "./img/cofreAbierto.png"
    } else {
        imagen__encriptar.src = "./img/encriptar.png"
        resultado__textoModificado__titulo.textContent = "Debes ingresar un texto";
        resultado__textoModificado__parrafo.textContent = "Ingrese el mensaje que desea desenciptar/encriptar";
        swal("Ooops!", "Debes ingresar un texto","error")
    }

}