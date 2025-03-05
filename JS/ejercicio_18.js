//Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
//utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.

const primer_promesa=new Promise((resolve) => {
    setTimeout(() => {
        resolve("Primer promesa resuelta");
    }, 1000);
})

const segunda_promesa=new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("segunda promesa no resuelta");
    }, 2000);
})

const tercer_promesa=new Promise((resolve) => {
    setTimeout(() => {
        resolve("tercera promesa resuelta");
    }, 3000);
})

Promise.all([primer_promesa,segunda_promesa,tercer_promesa]).then((rta)=>{
    console.log(rta);
})