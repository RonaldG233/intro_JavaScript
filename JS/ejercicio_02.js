let i= 0; 
 
 
setTimeout(() => alert(1), 100); //? 
 // asumimos que el tiempo para ejecutar esta función es > 100 ms 
 
for(let j=0; j < 100000000; j++) { 
 
    i++; 
} 
//la respuesta es la A despues del bucle porque setmtimeout se usa para programar la ejecución de una función después de un tiempo específico (en este caso, 100 ms).
//El valor mostrado será: 100000000