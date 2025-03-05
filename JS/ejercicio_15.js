//Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
//obtenidos en la consola.
fetch("../JSON/ejercicio_15.JSON").then(function(data){
    const res = data.json().then(function(datos){
        console.log(datos);
        
    })
})