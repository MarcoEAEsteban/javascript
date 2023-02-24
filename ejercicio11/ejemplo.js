let numeros = ['a','d','c','b']
let mayor = numeros[0]
let menor = numeros[0]
let suma = 0
let total = numeros.length

for(let pos in numeros){
    suma += numeros[pos]
    if(numeros[pos]> mayor){
        mayor = numeros[pos]
    }
    if(numeros[pos] < menor){
        menor = numeros[pos]
    }
    
}
console.log(mayor) 
console.log(menor)
console.log(total)