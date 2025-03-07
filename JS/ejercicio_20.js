//Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una
//lista de elementos uno por uno.
async function primerTarea() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea 1 completada");
            resolve("Tarea 1 finalizada");
        }, 2000);
    });
}

async function segundaTarea() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tarea 2 completada");
            resolve("Tarea 2 finalizada");
        }, 1500);
    });
}

async function tercerTarea() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tarea 3 falló");
            reject("Error en la tarea 3");
        }, 3000);
    });
}

async function procesarTareasSecuencialmente(tareas) {
    for (const tarea of tareas) {
        try {
            const resultado = await tarea();
            console.log(resultado);
        } catch (error) {
            console.error(`Error en esta tarea: ${error}`);
        }
    }
    console.log("Todas las tareas han sido procesadas.");
}

const misTareas = [primerTarea,segundaTarea,tercerTarea];

procesarTareasSecuencialmente(misTareas);
