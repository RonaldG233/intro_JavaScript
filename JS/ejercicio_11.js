//Crea una Promisa que se resuelva después de 3 segundos y luego imprima "Promisa
//resuelta" cuando se cumpla.
const operacionPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const cant_num = parseInt(prompt("Ingrese la cantidad de números: ")); 
      let resultado = 0; 
  
      
      if (isNaN(cant_num) || cant_num <= 0) {
        reject("La cantidad de números debe ser un número positivo.");
        return;
      }
  
      for (let i = 1; i <= cant_num; i++) {
        const num = parseInt(prompt(`Ingrese el ${i}° número: `)); 
        if (isNaN(num)) {
          reject("Todos los números ingresados deben ser válidos.");
          return;
        }
        resultado += num; 
      }
  
      resolve(resultado); 
    }, 3000); 
  });
  
  operacionPromesa.then((resultadoOperacion) => {
    alert(`PROMISA RESUELTA: El resultado de la operación es: ${resultadoOperacion}`);
  }).catch((error) => {
    alert(error); 
  });