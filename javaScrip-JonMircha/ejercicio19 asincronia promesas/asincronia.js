//console.log('inicio');
/*
setTimeout(() => {
    console.log('Ejecutando un setTimeout, esto se ejectara una sola vez')
}, 1000);
/*
setInterval(() => {
    console.log('Ejecutando un setInterval, esto se ejectara indifinidamente cada cierto intervalo de tiempo')
}, interval);


setInterval(() => {
    console.log(new Date().toLocaleTimeString())    
}, 360000);


let temporizador = setTimeout(() => {
   console.log(new Date().toLocaleDateString()) 
}, 1000);

clearTimeout(temporizador)
console.log('Despues del clear')



//Codigo Sincrono Bloqueante

(()=>{
    console.log('codigo sincrono')
    console.log('inicio')

    function dos(){
        console.log('dos')
    }

    function uno(){
        console.log('uno')
        dos()
        console.log('tres')
    }
    uno()
    console.log('fin')
})()
console.log('*****************************************');


//codigo asincrono no bloqueante

(()=>{
    console.log('codifo asincrono')
    console.log('inicio')

    function dos(){
        setTimeout(function(){
            console.log('dos')
        }, 1000);
    }

    function uno(){
        setTimeout(function(){
            console.log('uno')
        },0);
        dos()
        console.log('tres')
    }
    uno()
    console.log('fin')
})();


// mecanismo callbacks

function cuadradoCallback(value,callback){
    setTimeout(() => {
        callback(value, value*value)
    },0 | Math.random()*100);//mat.random esta usando para explicar la continuidad
}

cuadradoCallback(0,(value,resultado)=>{
    console.log('inicia callback')
    console.log(`Callback: ${value}, ${resultado}`)

    cuadradoCallback(1,(value,resultado)=>{
        console.log(`Callback: ${value}, ${resultado}`)
        cuadradoCallback(2,(value,resultado)=>{
            console.log(`Callback: ${value}, ${resultado}`)
            cuadradoCallback(3,(value,resultado)=>{
                console.log(`Callback: ${value}, ${resultado}`)
                cuadradoCallback(4,(value,resultado)=>{
                    console.log(`Callback: ${value}, ${resultado}`)
                    cuadradoCallback(5,(value,resultado)=>{
                        console.log(`Callback: ${value}, ${resultado}`)
                        console.log('Fin del callback')
                        console.log('Callback Hell !!!')
                        console.log('http://callbackhell.com/')
                    })
                })
            })
        })
    })
})


function cuadradoPromise(value){
    if(typeof value!== 'number'){
        return Promise.reject(`Error, el valor "${value}" ingresado no es un numero`)
    }

    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            })
        }, 0|Math.random()*1000);
    });
    
    
}

cuadradoPromise(0)
    .then((obj)=>{
        console.log(obj)
        console.log('inicio de Promise')
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromise(1)
    })
    .then((obj) =>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromise(2)
    })
    .then((obj) =>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromise(3)
    })
    .then((obj) =>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromise(4)
    })
    .then((obj) =>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        return cuadradoPromise(5)
    })
    .then((obj) =>{
        console.log(`Promise: ${obj.value},${obj.result}`)
        console.log('Fin de Promise')
    })
    .catch((err) => console.error(err))
 */       


    //promesa funcion
function cuadradoPromise(value){
    if(typeof value!== 'number'){
        return Promise.reject(`Error, el valor "${value}" ingresado no es un numero`)
    }
    
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({
                value,
                result: value*value
            })
        },0|Math.random()*1000);
    });
}

//Funcion asincrona declarada
async function funcionAsincronaDeclrada(){
    try{
        console.log('inicio de funcion asincrona')

        let obj = await cuadradoPromise(0)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(1)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(2)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)
        
        obj = await cuadradoPromise(3)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)
        
        obj = await cuadradoPromise(4)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)
        
        obj = await cuadradoPromise(5)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)

        console.log('Fin de funcion')
    }catch(err){
        console.error(err)
    }
}
funcionAsincronaDeclrada()

//funcion asincrona exprasada
const funcionAsincronaExpresada = async()=>{
    try{
        console.log('inicio de funcion asincrona')

        let obj = await cuadradoPromise(6)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(7)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)

        obj = await cuadradoPromise(8)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)
        
        obj = await cuadradoPromise(9)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)
        
        obj = await cuadradoPromise(10)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)
        
        obj = await cuadradoPromise(11)
        console.log(`Funcion asincrona: ${obj.value}, ${obj.result}`)

        console.log('Fin de funcion')
    }catch(err){
        console.error(err)
    }
}
funcionAsincronaExpresada()
