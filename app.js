let inputText = document.querySelector("#text-to-encrypt");
const encryptButton = document.querySelector("#encrypt-button");
const decryptButton = document.querySelector("#decrypt-button");
const messageArea = document.querySelector(".message-area");
const clipboardCopy = document.querySelector("#copy-clipboard");

// Declaramos la función para encriptar el texto ingresado.

const encryptor = (string) => {

    let texEncrypted= string.replace(/e/gi, "enter");

    texEncrypted = texEncrypted.replace(/i/gi, "imes");
    texEncrypted = texEncrypted.replace(/a/gi, "ai");
    texEncrypted = texEncrypted.replace(/o/gi, "ober");
    texEncrypted = texEncrypted.replace(/u/gi, "ufat");

    return texEncrypted;
}

// Declaramos la función para desencriptar el texto ingresado.

const decryptor = (string) => {
    let textDecrypted = string.replace(/enter/gi, "e");

    textDecrypted = textDecrypted.replace(/imes/gi, "i");
    textDecrypted = textDecrypted.replace(/ai/gi, "a");
    textDecrypted = textDecrypted.replace(/ober/gi, "o");
    textDecrypted = textDecrypted.replace(/ufat/gi, "u");

    return textDecrypted;
}

// Declaramos la función para mostrar por pantalla el mensaje resultante de las funciones anteriores.

const printMessage = (message) => {

    messageArea.innerHTML = "";
    messageArea.innerHTML = `<p>${message}</p>`
}

inputText.addEventListener("focus", () => {

    inputText.placeholder = "";    
})

encryptButton.addEventListener("click", () => {

    printMessage(encryptor(inputText.value))
})

decryptButton.addEventListener("click", () => {

    printMessage(decryptor(inputText.value))
})

clipboardCopy.addEventListener("click", () => {

})