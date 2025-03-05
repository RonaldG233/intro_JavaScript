//Crea una función asincrónica que realice una llamada a un archivo local en formato json y
//luego manipule los datos recibidos para mostrar información específica.
fetch("../JSON/ejercicio_17.JSON").then(function(data){
    async function Manipulo() {
        const rta = data.json().then(function(result){
            const manipulacion =result.filter(result=>result.genero[0]=='f');
            console.log(manipulacion);
            

        })

    }
    Manipulo();
})