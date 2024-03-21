function contieneMayuscula(texto){
    for(var i=0; i < texto.length; i++){
        if(texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase() ){
            return 1;
        }
    }
    return 0;
}

function nuevoTextoEncrip(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function nuevoTextoDesencrip(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function limpiarCaja(){
    document.getElementById("textoIngresado").value = "";
}

function encriptarTexto(){
    let newText = "";
    let texto = document.getElementById('textoIngresado').value;
    if(contieneMayuscula(texto)){
        alert("El texto ingresado tiene al menos una letra mayúscula");
    }else{
        newText = nuevoTextoEncrip(texto);
    }
    document.getElementById("textoRespuesta").value = newText;
    limpiarCaja();
}

function desencriptarTexto(){
    let newText = "";
    let texto = document.getElementById('textoIngresado').value;
    if(contieneMayuscula(texto)){
        alert("El texto ingresado tiene al menos una letra mayúscula");
    }else{
        newText = nuevoTextoDesencrip(texto);
    }
    document.getElementById("textoRespuesta").value = newText;
    limpiarCaja();
}

function copiarTexto(){
    let input = document.getElementById("textoRespuesta");
    input.select();
    document.execCommand("copy");
    // Deseleccionar el input para evitar resaltarlo visualmente
    //input.blur();
}
