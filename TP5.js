// var boton = document.querySelector(".boton");
// var taxto =  document.querySelector(".palabra");




let cadenaDePalabras = "";
let palabra = prompt("Ingrese Palabra");

while(palabra != "cancelar"){
    cadenaDePalabras = cadenaDePalabras + palabra + "-";  
    palabra = prompt("Ingrese Palabra");
}

console.log(cadenaDePalabras);
