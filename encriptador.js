//Funcion
function encriptar() {
    let texto = document.getElementById('textInput').value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('resultText').value = textoEncriptado;
    document.querySelector('.result__btn').classList.remove('hidden');
    document.querySelector('.result__title').textContent = 'Texto encriptado:';
    document.querySelector('.result__text').textContent = textoEncriptado;
}

//Funcion
function desencriptar() {
    let texto = document.getElementById('textInput').value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('resultText').value = textoDesencriptado;
    document.querySelector('.result__btn').classList.remove('hidden');
    document.querySelector('.result__title').textContent = 'Texto desencriptado:';
    document.querySelector('.result__text').textContent = textoDesencriptado;
}

//Funcion
function copiar() {
    let resultText = document.getElementById('resultText');
    resultText.select();
    navigator.clipboard.writeText(resultText.value).then(() => {
        alert('Texto copiado al portapapeles');
    })
}
