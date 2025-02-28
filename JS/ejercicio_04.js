// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".
function filter(array, callback) {
    nuevoArray=[];
    for (let a = 0; a < array.length; a++) {
        nuevoArray.push(callback(array[a]));
    }
    return nuevoArray;
}
let array=[30,23,65,12,86,32,75,2,45,74,23,11,7,4,2,78];
let num_mayor=filter(array, function(n){
    if (n>=30) {
        return n;
    }
    else{
        console.log("son menores de 30");
        
    }
})
console.log(num_mayor);
