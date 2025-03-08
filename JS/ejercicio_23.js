//Usar un proxy para la validación de los valores de propiedades
//• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
//números
//• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
//letras
//• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
//correos
//• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
//fechas
//• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
//al final de estos y se debe mostrar el error personalizado por consola
const validarValor = {
    numerico: (valor) => /^-?\d+(\.\d+)?$/.test(valor), 
    alfanumerico: (valor) => /^[a-zA-Z]+$/.test(valor),  
    email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor),
    date: (valor) => !isNaN(Date.parse(valor)) 
};

const handler = {
    set(target, prop, value) {
        if (target.hasOwnProperty(prop)) {
            let tipo = target[prop].tipo;
            let nuevoValor = value.trim();  

            if (!validarValor[tipo](nuevoValor)) {
                console.error(` Error: El valor "${value}" no es válido para "${prop}" (${tipo}).`);
                return false;
            }

            target[prop].valor = nuevoValor;
            console.log(` ${prop} ha sido actualizado correctamente: "${nuevoValor}"`);
            return true;
        }
        console.error(` Error: Propiedad "${prop}" no existe en el objeto.`);
        return false;
    },

    get(target, prop) {
        return target[prop] ? target[prop].valor : undefined;
    }
};


let datos = {
    edad: { valor: null, tipo: "numerico" },
    nombre: { valor: null, tipo: "alfanumerico" },
    correo: { valor: null, tipo: "email" },
    fechaNacimiento: { valor: null, tipo: "date" }
};

const usuario = new Proxy(datos, handler);


usuario.edad = prompt("Ingrese la edad"); 
usuario.nombre = prompt("Ingrese el nombre"); 
usuario.correo = prompt("Ingrese el correo") ; 
usuario.fechaNacimiento = prompt("Ingrese la fecha de nacimiento"); 





console.log(usuario.edad); 
console.log(usuario.nombre); 
console.log(usuario.correo);
console.log(usuario.fechaNacimiento);



