/*
const numeros =[0,1,2,3,4,5,6,7,8,9,10]

//****como funciona el break****
for(let i = 0 ; i < numeros.length; i++){
    if(i === 5){
        break
    }
    console.log(numeros[i])
}

//**** como funciona el continue******
for(let i = 0 ; i < numeros.length; i++){
    if(i === 5){
        continue
    }
    console.log(numeros[i])
}

//**** como funciona los numeros pares e impares*****
for(let i = 0 ; i < numeros.length; i++){
    let num =numeros[i]
    const n =num%2
    if(n === 1){
        continue
    }
    console.log(num)  
}

const numeros =[1,2,3]
let uno = numeros[0], 
dos = numeros[1], 
tres=numeros[2];
//console.log(uno,dos,tres)
const[num1,num2,num3]=numeros
console.log(num1,num2,num3)

const persona = {
    nombre: 'jon',
    apellido: 'mircha',
    edad: 35
}

const{nombre,apellido,edad} = persona
//console.log(nombre,apellido,edad)

function sumar(a,b, ...C){
    let resultado = a+b

    C.forEach(function(n){
        resultado += n
    })
    return resultado
}
console.log(sumar(1,2))
console.log(sumar(1,2,3))
console.log(sumar(1,2,3,4))
console.log(sumar(1,2,3,4,5))
console.log(sumar(1,2,3,4,5,6))
console.log(sumar(1,2,3,4,5,6,7))

function sumas(a,b, ...c){
    let res = a+b
    c.forEach(function(n){
       res += n
       
    })
    return res
}
console.log(sumas(1,2))

const arr1 = ['amor','paz'],
arr2 = ['testigo']
console.log(arr1,arr2)
const arr3 = [...arr1 , ...arr2]
console.log(arr3)

//funcion de flecha(arrow function)
const saludar = () => {
    console.log('oi')
}
saludar()

//cuando la funcion solo tiene una linea de bloque
const saludo = () => console.log('oi')
saludo()

//cuando la arrow functions tiene un solo parametro va sin parentecis
const hablar = persona => console.log(`Deseo hablar con ${persona}`)
hablar('Marco')

//cuando la arrow function tiene parametros agregar parentecis
const saluda = (nombre,apellido) => console.log(`hola ${nombre} ${apellido}`)
saluda('Marco','Aucaruri')


const numeros = [1,2,3,4,5]

numeros.forEach((el,index) => console.log(`${el} esta en la posicion ${index} `))

const persona = {
    nombre: 'marco',
    apellido: 'esteban',
    saludo(){
        console.log(`hola ${this.nombre}`)
    }
    
}
persona.saludo()


//Funcion constructora
function Animal(nombre,genero){
    //atributos
    this.nombre = nombre
    this.genero = genero

    //metodos
    this.sonar = function(){
        console.log('Hago sonidos porque estoy vivo')
    }
}

//creando nuevos objetos de clase animal
const snoopy = new Animal('Snoopy','Macho'),
    lolaBoni = new Animal('Lola Bunny', 'Hembra')

console.log(snoopy)
console.log(lolaBoni)


function ListaDeAlumnos(nombre,apellido,edad,grado){
    this.nonbre = nombre
    this.apellido = apellido
    this.edad = edad
    this.grado = grado
}

const alum1 = new ListaDeAlumnos('marco','aucaruri', 34, '2do año')
console.log(alum1)


//funcion constructora adonde asignamos los metodos(funciones)al prototipo,y no a la funcion como tal

function Animal(nombre,genero){
    //atributos(variables)
    this.nombre = nombre;
    this.genero = genero;
}

//metodos(funciones) agregados al prototipo(copia)de la funcion constructora

Animal.prototype.sonar = function(){
    console.log('guau');
}

Animal.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre}`)
}

const snoopy = new Animal('Snoopy','Macho')

console.log(snoopy)
snoopy.sonar()
snoopy.saludar()

const num = [1,2,3,4,5]
for( let pos of num){
    console.log(`alumnos del coleguio ${pos}`)
}


function Animal(nombre,genero){
    this.nombre = nombre
    this.genero = genero
}

Animal.prototype.ladrar = function(){
    console.log(`Hola soy ${this.nombre}, soy un perro por eso ladro`)
}

//herencia prototípica
function Perro(nombre,genero,tamanio){
    this.super = Animal  //haciendo el llamado al prototipo Animal()
    this.super(nombre,genero) //dandoles los parametros heredados
    this.tamanio = tamanio //incorporando el nuevo parametro
}

//Perro está heredando de Animal
Perro.prototype = new Animal() //colocando la herencia
Perro.prototype.constructor = Perro //jalando las caracteristicas de Animal()

//al igualar perro con animal podemos sobre escrivir las funciones
Perro.prototype.ladrar = function(){
    console.log(`hola soy ${this.nombre} y es mi nuevo ladrido`)
}

const dogo = new Perro('Dogo', 'macho', 'mediano')
const mini = new Animal('Mini', 'hembra','mediano')
const snupi = new Perro('snupi','macho','pequeño') 
dogo.ladrar()
console.log(dogo)
mini.ladrar()
console.log(mini)
console.log(snupi)

console.clear()
class Animal{
    //el constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre,genero){
        this.nombre = nombre
        this.genero = genero
        
    }

    //metodos
    sonar(){
        console.log('hago sonidos porque estoy vivo')
    }

    saludar(){
        console.log(`hola me llamo ${this.nombre}`)
    }
}

//herencia de clase

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre,genero)
        this.tamanio = tamanio
        this.raza = null
    }

    sonar(){
        console.log('Ladro porque soy un perro')
    }
    
    ladrar(){
        console.log('guauuu guauuu!!!!')
    }

    //metodo estatico se puedesn ejecutar sin necesidad de instanciar la clase

    static queEres(){
        console.log('los peroos son animales ....')
    }
    //los setter y gueters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza
    }
   
}

Perro.queEres()//llamando al metodo static queEres()

const mimi = new Animal('Mimi', 'hembra')
const lolo = new Perro('Lolo', 'macho','gigante')
console.log(mimi)
mimi.saludar()
mimi.sonar()

console.log(lolo)
lolo.saludar()
lolo.sonar()
lolo.ladrar()
lolo.setRaza = 'Gran Danes'
console.log(lolo.getRaza)

console.clear()
console.group('html')
console.log(1)
console.log(2)
console.groupEnd()

console.groupCollapsed('html')
console.log(1)
console.log(2)
console.groupEnd()

console.table(Object.entries(console))
console.clear()

console.time('cuanto tarda mi codigo')
const arreglo = Array(1000000)
for(let i = 0; i< arreglo.length; i++){
    arreglo[i]=i
}
console.timeEnd('cuanto tarda mi codigo')
console.clear()

for(let i = 0; i <= 10 ; i++){
    console.count('codigo for')
    console.log(i)
}
console.clear()

let x = 0,
y= 2,
pruebaxy = 'se espera que x siempre sea menor que y'

console.assert(x<y,{x,y,pruebaxy})
console.clear()

console.log(Date())

console.log(Math.round(Math.random()*10))
console.clear()
console.log(Math)

// function saludar(nombre = 'desconocido') asi es actualmente
function saludar(nombre){
    nombre = nombre || 'desconocido'
    console.log(`Hola ${nombre}`)
}
saludar('Jhon')
saludar()


console.log(window)
//window.alert('hola soy un alerta')
//window.confirm('hola esto es una confirmacion')
//prompt('hola esto es un prompt y le permite al usuario ingresar un valor')


//Funciones anonimas autoejecutables
(function(){
    console.log('mi primera funcion auto ejecutable')
})();

(function(d,w,c){
    console.log('mi segunda funcion auto ejeutable')
    console.log(d)
    console.log(w)
    c.log('esto es cn console.log')
})(document,window,console);

//Formas de escribir las funciones anonimas autoejecutables

//clasica
(function(){
    console.log('version clasica')
})();

//La Crokford(JavaScript the good Parts)
((function(){
    console.log('version Crokford')
})());

//Unaria
+function(){
    console.log('version Unaria')
}();

//facebook
!function(){
    console.log('version Faceboork')
}();

import saludo, {PI} from "./constantes.js"
import { aritmetica } from "./aritmetica.js"

new saludo()
console.log(PI)
console.log('archivo principal')
console.log(aritmetica.sumar(5,4))
console.log(aritmetica.resta(5,4))
*/