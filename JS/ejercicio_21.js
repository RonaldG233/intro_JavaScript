//Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
//try/catch para mostrar un mensaje de error en caso de fallo.
fetch("../JSON/ejercicio_21.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(datos => {
        procesarDatos(datos);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error.message);
    });

function procesarDatos(datos) {
    try {
        if (!Array.isArray(datos)) {
            throw new Error("El dato proporcionado no es un array.");
        }

        datos.forEach((persona, index) => {
            try {
                if (!persona.nombre || !persona.edad || !persona.ciudad || !persona.genero) {
                    throw new Error(`Faltan datos en el elemento ${index + 1}.`);
                }

                if (typeof persona.nombre !== "string" || typeof persona.ciudad !== "string" || typeof persona.genero !== "string") {
                    throw new Error(`Tipo de dato incorrecto en el elemento ${index + 1}.`);
                }

                if (typeof persona.edad !== "number" || persona.edad < 17) {
                    throw new Error(`Edad inválida en el elemento ${index + 1}.`);
                }

                console.log(`ombre: ${persona.nombre}, Edad: ${persona.edad}, Género: ${persona.genero}, Ciudad: ${persona.ciudad}`);

            } catch (error) {
                console.error(`Error en el elemento ${index + 1}: ${error.message}`);
            }
        });

    } catch (error) {
        console.error("Error al procesar los datos:", error.message);
    }
}


