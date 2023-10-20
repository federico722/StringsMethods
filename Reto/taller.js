let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado

console.log('1)');
let accountant=0;
for (let i = 0; i < msg.length; i++) {
    let cant=msg[i];
    accountant++;
    console.log(cant);
    
}
console.log("cantidad de caracteres: "+accountant);

let quantityCharacters=msg.length
console.log("cantidad de caracteres: "+quantityCharacters);
console.log(msg.length);

// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
console.log("2)");
let msgLowercase=msg.toLowerCase();
console.log(msgLowercase);

// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
console.log('3)');
let value=false;

if(msg.includes('filtro')){
    value =true;
}

console.log(value);

console.log(msg.indexOf('filtro'))
if(msg.indexOf('filtro')==-1){
    console.log(false);
}else{
    console.log(true);
}

console.log(msg.includes('filtro'));


// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola

console.log('4)');
let word=msg.match(/\bejercicios\b/i);
let extractWord=word[0];
console.log(extractWord);


// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.
console.log('5)');
let msg1= "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . "
console.log(msg1.replace(/ /g, "-"));


// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

//R/comparacion.html y comparacion.js

// 7. Crea una función que valide cuántas vocales tiene el msg entregado.

console.log("7)");
function contarVocales(msg) {
    text = msg.toLowerCase();
    let counterVocals = 0;
    const vocales = "aeiou";

    for (let i = 0; i < text.length; i++) {
        // Verifica si el carácter actual es una vocal
        if (vocales.includes(text[i])) {
            counterVocals++;
        }
    }

    return counterVocals;
}

let quantityVowels = contarVocales(msg);

console.log("Cantidad de vocales en el mensaje: " + quantityVowels);


// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
// * Debe poder convertirlos a mayúscula o a minúscula.
// * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
// * Los comentarios deberán salir en color verde y negrilla.

// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes
// Federico Pelaez Calderon