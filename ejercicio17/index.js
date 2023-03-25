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
*/

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