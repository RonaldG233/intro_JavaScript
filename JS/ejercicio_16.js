//Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
//para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
//mostrar solo los nombres que comiencen con "A").
fetch("../JSON/ejercicio_16.JSON").then(function(data){
    const rta = data.json().then(function(result){
        const filtro =result.filter(result=>result.nombre[0]=='a');
        console.log(filtro);
        
    })
})