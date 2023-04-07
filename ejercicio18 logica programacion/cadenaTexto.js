const contarObejtos = () => {
    const objetos = ['camisa', 'chompas', '12']
    for(let pos in objetos){
        let cosas = objetos[pos]
        console.log(cosas.length)
    }
}
//contarObejtos()
const contarRopas = ()=>{
    const ropas = {
        color: ['rojos','azul','verde'],
        tamanio:  ['smol','mediu','grande'],
        edad:['22']
    }
    const pas = ropas.edad
    //console.log(ropas.color)
    
    for(let pos in pas){
        let rpas = pas[pos]
        console.log(rpas.length)  
    }
}
//contarRopas()
const cortar = (cadena = "",longitud = undefined)=>{
    console.log(cadena.slice(0,longitud))
}
//cortar('hola mundo')

const cadenaArreglo = (cadena = '', separador = undefined) => 
    (!cadena)
        ?console.warn('no ingresaste una cadena de texto')
        : (separador === undefined)
        ? console.warn('no ingresaste el caracter separador')
        : console.info(cadena.split(separador))
//cadenaArreglo('lorem nadnan nadjan nannrna', ' ')        

const respuestas = (color, tamanio) =>
    (!color)
    ? console.warn('Ingresa un color')
    : (tamanio === undefined)
    ? console.warn('no ingresaste el tamaño')
    : console.info(`El color es ${color}, de tamaño ${tamanio}`)
//respuestas('azul','grande')

const repetirTexto = (texto = '', veces = undefined) =>{
    if(!texto) return console.warn('no ingresaste el texto')

    if(veces === undefined) return console.warn('no ingresaste el numero de veces')
    
    if(veces === 0) return console.error('el numero de veces no pude ser 0')
    
    if(Math.sign(veces) === -1) return console.error('el nuemro de veces no puede ser negativo')

    for(let i = 1;i <= veces;i++){
        console.log(`${i} : ${texto}`)
    }
}
//repetirTexto('hola',3)

//programa una funcion que invierta las palabras de un texto.
let invertirCadena = (cadena = '')=>
    (!cadena)
        ? console.warn('no ingresaste una cadena de texto')
        : console.info(cadena.split('').reverse().join(''))
//invertirCadena('hola mundo')