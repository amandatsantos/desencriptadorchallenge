const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function bntEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.background = "none"
}
function bntDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.background = "none"
}



function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringDesencriptada;
}

function copiar() {
    let copiarMensagem = document.querySelector(".mensagem");
    copiarMensagem.select();
    copiarMensagem.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiarMensagem.value);

    alert("copiado");


}

/* function copiar() {
    let copiarMensagem = document.querySelector(".mensagem");
    copiarMensagem.select();
    copiarMensagem.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiarMensagem.value);

    alert("copiado");


} */

