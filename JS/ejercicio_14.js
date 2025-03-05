//Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
//devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
//y mostrar el resultado final.
function promesa1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(5); 
        }, 1000);
    });
}

function promesa2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

function promesa3() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(15); 
        }, 1000);
    });
}

promesa1()
    .then(result1 => {
        console.log(`Resultado de promesa 1: ${result1}`);
        return promesa2().then(result2 => {
            console.log(`Resultado de promesa 2: ${result2}`);
            return result1 + result2;
        });
    })
    .then(suma1 => {
        return promesa3().then(result3 => {
            console.log(`Resultado de promesa 3: ${result3}`);
            return suma1 + result3;
        });
    })
    .then(resultadoFinal => {
        console.log(`El resultado final es: ${resultadoFinal}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });
