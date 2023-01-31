/*console.log('todo bien?')
console.log('todo bien?')
console.log('todo bien?')
console.log('todo bien?')
console.log('todo bien?')

var c = 1
while(c <= 6){
    console.log(`paso ${c}`)
    c++
}

var c = 1

do{
    console.log('todo bien')
    c++
}while(c <= 6)

*/


var boton = document.getElementById('boton')
boton.addEventListener('click', reproducir)

function reproducir(){

    var cuerpo = document.querySelector('body')
    /*
    let pasos = 1
    while(pasos <= 6){
    cuerpo.innerHTML +=`paso${pasos} `
    pasos++
    }

    for(let c = 1 ; c <= 6 ; c++){
        cuerpo.innerHTML += `paso${c} `
    }
    */
   let c = 1
   do{
    cuerpo.innerHTML += `paso${c} `
    c++
   }while(c <=6)
}
