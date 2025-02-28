// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true

function every(array, callback) {
    newArray=[];
    for (let x = 0; x < array.length; x++) {
        if (!callback(array[x])) {
            return false;    
        }
        
    }
    return true;
    
}
let array=[2,23,4,5,2,7,2];
let posit=every(array,function(a){
    if (a>0) {
        return true;
        
    }
})
console.log(posit);
