//NUEVOS TIPOS DE DATOS Symbol()
/*
const NOMBRE = Symbol()
const SALUDAR = Symbol()

const persona = {
    nombre: 'marco',
    [NOMBRE]: 'jon',
    edad: 35
}

console.log(persona)
console.log(persona.nombre)
console.log(persona[NOMBRE])
persona.NOMBRE = 'jonatan mircha'//creando una propiedad
console.log(persona)

persona[SALUDAR]= function(){
    console.log('hola')
}
persona[SALUDAR]()

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}
//para saber cuantos symbol tiene el objeto
console.log(Object.getOwnPropertySymbols(persona))



//TIPO DE DATO Set()
const set = new Set([1,2,3,3,4,5,true,false,false,{},{},'hola','HOla'])
console.log(set)
console.log(set.size)

//COMO COLOCAR ELEMENTOS EN UN SET:
const set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add({})
console.log(set2)
console.log(set2.size)
console.log('RECORRIENDO SET EN for(of)')
//COMO RECORRER UN SET() CON for(of)
for(item of set){
    console.log(item)
}
console.log('RECORIENDO SET2 EN forEach')

//COMO RECORRER SET() CON forEach
set2.forEach(item => console.log(item))

//COMO BUSCAR POSICIONES EN SET
const arr = Array.from(set)
console.log(set)
console.log(arr[4])

//COMO ELIMINAR DENTRO DE SET
set.delete(1)
set.delete(arr[3])
console.log(set)

//COMO SABER SI UN ELEMENTO ESTA DENTRO DE SET
console.log(set.has('2'))

//COMO LIMPIAR UN SET()
set.clear()
console.log(set)


//TIPOD DE DATO MAP
let mapa = new Map()
mapa.set('nombre', 'jon')
mapa.set('apellido', 'mircha')
mapa.set('edad', 35)

console.log(mapa)
console.log(mapa.size)//trae el numero de valores
console.log(mapa.has('correo'))//verifica si existe el valor(true,false)
console.log(mapa.has('nombre'))//verifica si existe el valor(true,false)
console.log(mapa.get('nombre'))//trae como respuesta el valor en si 'jon'
mapa.delete('apellido')//elimina el elemento
//los map tiene como caracteristica usar keys de todo tipo
mapa.set(19,'diecinueve')//como llave un numero
mapa.set(false,'falso')//como llave un boolean
mapa.set({},{})//como llave un objeto
console.log(mapa) 

//usando for(of) en un mapa
for(let[key,value] of mapa){
    console.log(`Llave:${key}, Valor: ${value}`)
}

//2da forma de ingresar valores a un map()
const mapa2 = new Map([
    ['nombre','kenai'],
    ['edad',7],
    ['animal','perro'],
    [null,'nulo']
])
console.log(mapa2)

//colocando la llave y los valores en arreglos
const llavesMapa2 = [...mapa2.keys()]
const valoresMapa2 = [...mapa2.values()]

console.log(llavesMapa2)
console.log(valoresMapa2)


//TRABAJANDO CON WIAKSET Y WEAKMAPS
const ws = new WeakSet()

let valor1 = {'valor':1}
let valor2 = {'valor':2}
let valor3 = {'valor':3}

ws.add(valor1)
ws.add(valor2)
ws.add(valor3)
console.log(ws)
//setInterval(() => console.log(ws),1000);

setTimeout(() => {
   valor1 = null;
   valor2 = null;
   valor3 = null;
}, 1000);


//TRABAJANDO CON WEAKMAP
const wm = new WeakMap()

let llave1 = {}
let llave2 = {}
let llave3 = {}

wm.set(llave1,1)
wm.set(llave2,2)
console.log(wm)

console.log(wm.has(llave1))//referencia dobre el valor
console.log(wm.has(llave3))

console.log(wm.get(llave1))//trayendo el valor de la llave
console.log(wm.get(llave2))

wm.delete(llave2)//eliminando valores


//const iterable = [1,2,3,4,5]//tipo de dato arreglo
//const iterable = new Set([1,2,3,3,4,5])//tipo de dato set()
//const iterable = 'Hola Mundo'//tipo de dato cadena de texto
const iterable = new Map([['nombre','jon'],['edad',35]])// cade.tex Map()

const iterador =  iterable[Symbol.iterator]()//accdiendo al iterable

console.log(iterable)
console.log(iterador)

//iterador.next()comensara a recorer los elementos del iterador
let nex = iterador.next()//colocando dentro de una variable

while(!nex.done){
    console.log(nex.value)
    //console.log(nex)
    nex = iterador.next()
    
}


function* iterable(){
    yield 'hola'
    console.log('Hola consola')
    yield 'hola 2'
    console.log('Seguimos con mas instrucciones de nuestro codigo')
    yield 'hola 3'
    yield 'hola 4'
}
let iterador = iterable()

for(let y of iterador){
    console.log(y)
}

const arr = [...iterable()]
console.log(arr)


function cuadrado(valor){
    setTimeout(() => {
        return console.log({valor,resultado:valor*valor})
    }, Math.random()*1000);

}

function* generador(){
    console.log('inicia Generador');
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log('termina Generador');
}
let gen = generador()
for(let g of gen){
    console.log(g)
}


//OPERADOR PROXIES

const persona = {
    nombre:'',
    apellido:'',
    edad: 0 
}

const manejador = {
    set(objeto,propiedad,valor){
        if(Object.keys(objeto).indexOf(propiedad)===-1){
            return console.error(`la propiedad '${propiedad}'no existe en el objeto`)
        }
        if(valor.length === 0 || valor === ' ' ){
            return console.error(`El valor '${valor}' no puede estar vacio`)
        }
        if(
            (propiedad ==='nombre'|| propiedad==='apellido') && !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
        ){
            return console.error(`la propiedad '${propiedad}' solo acepta letras y espacios en blanco`)
        }
    
        
        objeto[propiedad]= valor
    }
}

const jon = new Proxy(persona,manejador)
jon.nombre = 'jon'
jon.apellido= 'mircha'
jon.edad = 35
//jon.twitter = '@mircha'
console.log(jon)
console.log(persona)


//PROPIEDADES DINAMMICAS DE LOS OBJETOS

let aleatorio = Math.round(Math.random()*100 + 5)

const objUsuarios = {
    propiedad: 'valor',
    [`id_${aleatorio}`]: 'Valor Aleatorio'
}
console.log(objUsuarios)

const usuarios = ['jon','irma','miguel','kala']
usuarios.forEach((usuario,index)=> objUsuarios[`id_${index}`]=usuario)

console.log(objUsuarios)

//PALABRA RESERVADA THIS(this)

console.log(this)
console.log(window)
console.log(this === window)

this.nombre = 'contexto global'
console.log(this.nombre)

function imprimir(){
    console.log(this.nombre)
}

{
    //se le conose como bloque
}
imprimir()

const obj = {
    nombre:'contexto objeto',
    imprimir:function(){
        console.log(this.nombre)
    }
}
obj.imprimir()

const obj2 ={
    nombre: 'contexto objeto2',
    imprimir
}
obj2.imprimir()

const obj3 = {
    nombre: 'contexto objeto 3',
    imprimir: ()=>{
        console.log(this.nombre)
    }
}
obj3.imprimir()

//funcion constructora
function Persona(nombre){
    this.nombre = nombre
    //return console.log(this.nombre)
    //return function(){console.log(this.nombre)}
    return ()=>{//con una funcion road se soluciona el problema del escopo
        console.log(this.nombre)
    }

}
 let jon = new Persona('Jon')
 jon()
 */

 //antiguamente se usaba de una manera diferente
function Persona(nombre){
    const that = this
    that.nombre = nombre

    return function (){
        console.log(that.nombre)
    }
}
let jon = new Persona('Jon')
jon()