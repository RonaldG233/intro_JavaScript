//Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
//"Error: Promise rechazada".
function promesaRechazada() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error: Promise rechazada");
        }, 2000);
    });
}

async function ejercicio() {
    let numeros = [1, 2, 3, 4, 5];
    let suma = 0;

    console.log("Comenzando el proceso...");

    for (let i = 0; i < numeros.length; i++) {
        num=parseInt(prompt(`Ingrese numero ${i+1}: `))
        console.log(`Iteración ${i + 1}: sumando ${num} al total.`);
        suma += num;
        await new Promise(resolve => setTimeout(resolve, 500)); 
    }

    console.log(`La suma total después del bucle es: ${suma}`);

    console.log("Ahora procesando la promesa...");

    try {
        await promesaRechazada();
    } catch (error) {
        console.log(error);
    }

    console.log("Proceso completado.");
}

ejercicio();