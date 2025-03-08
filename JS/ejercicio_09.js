//El resultado del código es que se mostrará una alerta con el valor 100000000.

let i= 0; 
 
 
setTimeout(() => alert(1), 100); //? 
 // asumimos que el tiempo para ejecutar esta función es > 100 ms 
 
for(let j=0; j < 100000000; j++) { 
 
    i++; 
} 