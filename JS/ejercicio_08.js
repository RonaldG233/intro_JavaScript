// Crear una función findIndex que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el índice del elemento pasado como argumento del primer callback que
// devuelva true
// • sí ningún callback devuelve true, devuelva undefined
function findIndex(array, callback) {
    
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return undefined;
        }
        
    }
    return true;
    
}
let array=[6,59,57,80];
let mayor=findIndex(array,function(numero){
    if (numero>50) {
        return true;
        
    }
})
console.log(mayor);