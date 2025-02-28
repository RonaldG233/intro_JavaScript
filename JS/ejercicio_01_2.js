// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.

let desde=1;
let hasta=parseInt(prompt("Ingrese numero de rango para finalizar: "));

const imprimirNumeros=(desde,hasta)=>{
    for (let x =desde; x <= hasta; x++){
        setTimeout(() => alert(x), 5000)  
    }
}
console.log(imprimirNumeros(desde,hasta));
