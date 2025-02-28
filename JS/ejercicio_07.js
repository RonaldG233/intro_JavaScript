// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined
function find(array, callback) {
    
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return undefined;
        }
        
    }
    return true;
    
}
let array=[16,59,57,80];
let mayor=find(array,function(numero){
    if (numero>50) {
        return true;
        
    }
})
console.log(mayor);