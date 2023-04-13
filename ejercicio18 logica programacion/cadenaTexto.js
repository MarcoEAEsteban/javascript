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

/*Programa una funcion que valide una palabra o frase dada,es un palindromo(que se lee igual en un sentido o en otro), pe.mifuncion('salas') devolvera true*/
const palindromo = (palabra = '')=>{
    if(!palabra) return console.warn('no ingresaste la palabra o frase')
    
    palabra = palabra.toLowerCase()
    let palReves = palabra.split("").reverse().join("")
    
    return (palabra===palReves)
        ?console.info(`Si es palindromo, palabra original: ${palabra.toLocaleUpperCase()}, palabra al reves: ${palReves.toLocaleUpperCase()}`)
        : console.info(`No es palindromo, palabra original: ${palabra.toLocaleUpperCase()}, palabra al reves: ${palReves.toLocaleUpperCase()}`)
    
}
//palindromo()

const practica = (palabra = '')=>{
    if(!palabra) return console.warn('escriva una palabra')

    const nuevo = palabra.toLocaleUpperCase()

    return (palabra === nuevo)
        ? console.info('son mayusculas')
        : console.info('son minusculas')
}
//practica('')

/*
programa una funcion que elimine un cierto patron de caracteres de un texto dad,pe.funcion('xyz1,xyz2,xyz3,xyz4,xyz5,xyz') devolvera "1,2,3,4,5"
 */

const eliminarPatron = (texto = '', patron = '')=>
    (!texto)
        ?console.warn('no ingresaste un texto')
        :(!patron)
            ? console.warn('no ingresaste un patron de caracteres')
            : console.info(texto.replace(new RegExp(patron,'ig'),''))
//eliminarPatron('xyz1,xyz2,xyz3,xyz4,xyz5,xyz','xyz')
//eliminarPatron('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id repellendus architecto temporibus nobis error ad, voluptatum cupiditate eum. Odit minima, neque repudiandae adipisci doloribus consequatur eaque quibusdam dolor veniam?','lo')

//programa una funcion que obtenga un numero aleatorio entre 501 y 600
const numeroAleatorio = ()=> console.info(Math.round((Math.random()*100)+500))
//numeroAleatorio()

//programa una funcion que reciva un numero y evalue si es capicua o no (que se lee igual en un sentido que en otro), pe.mi funcion(2002) devolvera true
const capicua = (numero=0) =>{
    if(!numero) return console.warn('no ingresaste un numero')
    if(typeof numero !== 'number') return console.error(`el valor "${numero}" ingresado, No es un numero`)

    numero = numero.toString() 
    let alReves = numero.split('').reverse().join('')

    return(parseInt(numero) === parseInt(alReves))
        ?console.info(`Si es capicua, Numero original:${numero}, Numero al reves: ${alReves}`)
        :console.info(`No es capicua, numero original: ${numero}, Numero al reves: ${alReves}`)
}
capicua(202)