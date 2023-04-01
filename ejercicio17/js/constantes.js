export const PI = Math.PI 

export function saludar(){
    console.log('Hola módulos + ES6')
}

const personas = ()=>console.log('hola')
//export default personas

export default class saludo{
    constructor(){
        console.log('hola')
    }
}