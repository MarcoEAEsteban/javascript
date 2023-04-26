const contarObjetos = () => {
    const objetos = ['camisa', 'chompas', '12']
    for(let pos in objetos){
        let cosas = objetos[pos]
        console.log(cosas.length)
    }
}
//contarObjetos()
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
//capicua(212.212)


//Programa una función que calcule el factorial de un número(El factorial de un entero positivo 'n', se define como el producto de todos los números enteros positivos del 1 hasta 'n'), pe.miFuncion(5) devolvera:120
const miFactrial = (numero = undefined) =>{
    if(numero === undefined) return console.warn('digite un numero')
    if(typeof numero !== 'number') return console.error('no es un numero')
    if(numero === 0) return console.info('El número no puede ser cero')
    if(Math.sign(numero)===-1) return console.error('El numero no puede ser negativo')

    let factorial = 1
    for( let i = numero; i>1; i--){
        factorial *= i
    }
    return console.info(`El factorial de ${numero} es: ${factorial}`)
}
//miFactrial(5)

//programa una funcion que te determine si un número es primo (aquel que solo es divisible por si mismo y 1) o no, pe.miFuncion(7) devolvera true  
const numeroPrimo = (numero = undefined) =>{
    if(numero === undefined) return console.warn('Digite un numero')
    if(typeof numero !== 'number') return console.error('no es un numero')
    if(numero === 0) return console.error('el numero no puede ser cero')
    if(numero === 1) return console.error('el numero no puede ser 1')
    if(Math.sign(numero)===-1) return console.error('el numero no puede ser negativo')
    let divisible = false
    for(let i = 2; i < numero; i++){
        if((numero % i)===0){
            divisible = true
        }
    }

    return (divisible)
        ?console.log(`El numero ${numero}, no es primo`)
        :console.log(`el numero ${numero}, si es primo`)
}
//numeroPrimo(4)

// Programa una funcion que determine si un numero es par o impar, pe.miFuncion(29) devolvera impar

const numeroPar = (numero = undefined)=>{
    if(numero === undefined) return console.warn('No ingresaste un numero')
    if(typeof numero !== 'number') return console.error(`El valor: ${numero}, no es un numero`)

    return ((numero%2)===0)
        ?console.info(`el numero ${numero}, es par`)
        :console.info(`El numero ${numero}, es impar`)
}
//numeroPar(12)

//programa una funcion para convertir grado celsius a fahrenheit y viceversa, pe.miFuncion(0,'°C') devolvera 32°F
const convertirGrados = (grados = undefined,unidad = undefined)=>{
    if(grados===undefined) return console.warn('no ingresaste grados a convertir')
    if(typeof grados!=='number') return console.error(`el valor ${grados} ingresado no es un numero`)
    if(unidad===undefined) return console.warn('no ingresaste la unidad a convertir')
    if(typeof unidad!=='string') return console.error(`el valor ${unidad} ingresado no es un numero`)

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('valor de la unidad no reconocido')

    if(unidad === 'C'){
        return console.info(`${grados}°C= ${Math.round((grados*(9/5))+32)}°F`)
    }else if(unidad === 'F'){
        return console.info(`${grados}°C= ${Math.round((grados - 32)*(5/9))}°C`)
    }
}
//convertirGrados(100, 'C')
//convertirGrados(212, 'F')

//programa una funcion para convertir numeros de base binaria a decimal y viceversa,  pe.miFuncion(100, 2) devolvera 4 base 10
const convertirBinarioDecimal = (numero = undefined, base = undefined)=>{
    if(numero === undefined) return console.warn('no ingresaste el numero a convertir')
    if(typeof numero !== 'number') return console.error(`El valor "${numero}" ingresado, NO es un número`)

    if(base === undefined) return console.warn('no ingresaste el numero a convertir')
    if(typeof base !== 'number') return console.error(`El valor "${base}" ingresado, NO es un número`)

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`)
    }else if(base === 10){
        return console.info(`${numero} base${base} = ${(numero.toString(base))} base 2`)
    }else{
        return console.error('El tipo de base a convertir NO es valido')
    }

} 
//convertirBinarioDecimal(111001010,2)
//convertirBinarioDecimal(458,10)


//Programa una funcion que devuelva el monto final despues de aplicar un descuaento a una cantidad dada, pe.miFuncion(100,20) devolvera 800
const aplicarDescuento = (monto = undefined, descuento = 0)=>{
    if(monto === undefined) return console.warn('no ingresaste el monto')
    if(typeof monto !== 'number') return console.error(`El valor "${monto}" ingresado,NO es un numero`)
    if(monto === 0) return console.error('El monto no puede ser 0')
    if(Math.sign(monto)=== -1) return console.error('El monto no puede ser negativo')
    if(typeof descuento !== 'number') return console.error(`El valor "${descuento}" ingresado,NO es un numero`)
    if(Math.sign(descuento)=== -1) return console.error('El descuento no puede ser negativo')

    return console.info(`${monto}-${descuento}% = ${monto-((monto*descuento)/100)}`)
}
//aplicarDescuento(100,50)


//programa una funcion que dada una fecha determine cuantos años han pasado hasta el dia de hoy, pe.miFuncion(new date(1984,4,23)) devolvera 35 años(en 2020)
const calcularAnios = (fecha = undefined)=>{
    if(fecha === undefined) return console.warn('No ingresaste la fecha')
    if(!(fecha instanceof Date)) return console.error('El valor que ingresaste no es una fecha válida')

    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
    aniosEnMS = 1000 * 60 * 60 * 24 * 365
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS)

    return(Math.sign(aniosHumanos ===-1))
        ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        :(Math.sign(aniosHumanos)===1)
            ?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
            :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}
//calcularAnios(new Date(1989,9,18))


//Programa una funcion que dada una cadena de texto cuente el numero de vocales y consonantes, pe.miFuncion('hola mundo) devuelva vocales 4, consonantes 5
const contarLetras = (cadena = '')=>{
    if(!cadena) return console.warn('No ingresaste una cadena de texto')
    if (typeof cadena !== 'string') return console.error(`El valor '${cadena}' ingresado, NO es una cadena de texto`)

    let vocales = 0,
        consonantes = 0
    cadena = cadena.toLocaleLowerCase()

    for(let letra of cadena){
        if(/[aeiouáéíóú]/.test(letra)) vocales++
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
}
//contarLetras('llama')


//Programa una funcion que valide que un texto sea un nombre valido, pe.miFuncion('Jonathan Mircha) devolvera verdadero
const validarNombre = (nombre = '')=>{
    if(!nombre) return console.warn('no ingresaste un nombre')
    if(typeof nombre !== 'string') return console.error(`El valor "${nombre}" ingresadp, NO es una cadena de texto`)

    let expReg = /^[A-Za-zÑñ\s]+$/g.test(nombre)

    return(expReg)
        ?console.info(`'${nombre}', es un nombre valido`)
        :console.info(`'${nombre}', NO es un nombre valido`)
}
//validarNombre('marco enrique aucaruri esteban')


//Programa una funcion que valide que un texto sea un email valido, pe.miFucion('jonmircha@gmail.com') devolvera verdadero
const validarEmail = (email = '')=>{
    if(!email) return console.warn('no ingresaste un nombre')
    if(typeof email !== 'string') return console.error(`El valor "${email}" ingresadp, NO es una cadena de texto`)

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return(expReg)
        ?console.info(`'${email}', es un email valido`)
        :console.info(`'${email}', NO es un email valido`)
}
//validarEmail('jonmircha@gmail.com')


//fucion 19,20
const validarPatron = (cadena = '', patron = undefined)=>{
    if(!cadena) return console.warn('No ingresaste la cadena de texto')
    if(typeof cadena !== 'string') return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`)
    if(!patron === undefined) return console.warn('No ingresaste el patron')
    if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" es invalido`)

    let expreRegu = patron.test(cadena)

    return (expreRegu)
        ?console.info(`"${cadena}" , es valido`)
        :console.info(`"${cadena}", NO es valido`)
}
//validarPatron('Jon Mircha',/^[A-Za-zÑñ\s]+$/g)


//Programa una funcion que dado un array numerico devuelva otro array con los numeros elevados al cuadrado, pe.miFuncion([1,4,5]) devolvera [1,16,25]
const numeros = {nombre:'marco', apellido:'aucaruri', holamundo(){}}



