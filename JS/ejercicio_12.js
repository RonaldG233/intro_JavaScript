//Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
//diga "Operación completada". Utiliza async/await.
async function operacionCompletada() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Operación completada";
}

async function main() {
    const operacion = prompt("¿Deseas realizar una multiplicacion o una division?").toLowerCase();
    
    let resultado;
    
    if (operacion === 'multiplicacion') {
        const num1 = parseInt(prompt("Introduce el primer número:"));
        const num2 = parseInt(prompt("Introduce el segundo número:"));
        resultado = num1 * num2;
    } else if (operacion === 'division') {
        const num1 = parseInt(prompt("Introduce el primer número:"));
        const num2 = parseInt(prompt("Introduce el segundo número:"));
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "No se puede dividir por cero.";
        }
    } else {
        resultado = "Operación no válida.";
    }

    const mensaje = await operacionCompletada();
    console.log(mensaje);
    alert(`Resultado de la operación: ${resultado}`);
}

main();
