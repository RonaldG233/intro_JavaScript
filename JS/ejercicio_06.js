// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true

function some(array, callback) {
    
    for (let b = 0; b < array.length; b++) {
        if (!callback(array[b])) {
            return false;    
        }
        
    }
    return true;
    
}
let array=[-2,23,-4,-5,2,-7,2];
let num=some(array,function(a){
    if (a<0) {
        return true;
        
    }
})
console.log(num);