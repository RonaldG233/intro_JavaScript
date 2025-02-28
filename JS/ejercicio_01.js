// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.
let desde=1;
let hasta=parseInt(prompt("Ingrese numero de rango para finalizar: "));

const imprimirNumeros=(desde, hasta)=>{
    let intervalo=setInterval(() => {
        for (let i=desde; i<= hasta; i++) {
            alert(i);
        }
        clearInterval(intervalo)

    }, 1000);
}
        
        
console.log(imprimirNumeros(desde,hasta));
