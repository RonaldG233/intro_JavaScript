//Crear un objeto proxy usando la clase Proxy
const personaBase = {
    nombre: "Ronald",
    edad: 18,
    ciudad: "Bucaramanga",
    genero: "Masculino"
};


const manejador = {
    
    get(objeto, propiedad) {
        if (propiedad in objeto) {
            console.log(`Accediendo a la propiedad "${propiedad}"`);
            return objeto[propiedad];
        } else {
            console.log(`La propiedad "${propiedad}" no existe. Se usa un valor por defecto.`);
            return "No disponible";  
        }
    },

  
    set(objeto, propiedad, valor) {
        if (propiedad === "edad") {
            if (typeof valor !== "number" || valor < 0) {
                console.error(" Edad inválida. Debe ser un número positivo.");
                return false; 
            }
        }

        console.log(`Asignando "${valor}" a la propiedad "${propiedad}"`);
        objeto[propiedad] = valor;
        return true; 
    }
};


const persona = new Proxy(personaBase, manejador);

// --- Pruebas ---
console.log(persona.nombre); 
console.log(persona.pais);


persona.edad = 18; 


persona.edad = 25;
persona.ocupacion = "Ingeniero"; 

console.log(persona);