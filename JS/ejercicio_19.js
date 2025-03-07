//Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
//Promise.allSettled() para obtener información sobre el estado de todas las Promises.
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

Promise.allSettled([primer_promesa,segunda_promesa,tercer_promesa]).then((rta)=>{
    console.log(rta);
})