// Crear una función map que acepte un array y un callback y que:
//         • por cada elemento del array ejecute el callback pasándole dicho elemento como
//         argumento
//         • obtenga el resultado
//         • lo pushee a un nuevo array
//         • devuelva el array final con el resultado de cada una de las llamadas al callback.


function map (array, callback){
    arrayNuevo=[];
    for (let i = 0; i < array.length; i++) {
        arrayNuevo.push(callback(array[i]));
    }
    return arrayNuevo;
}
let array=[1,2,3];
let pro = map(array, function(num){
    return num * 2;
})
console.log(pro);
