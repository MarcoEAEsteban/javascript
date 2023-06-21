/*
const json = {
    cadena : 'jon',
    numero : 35 ,
    booleano : true,
    arreglo : ['correr', 'programar', 'cocinar'],
    objeto : {
        twitter : '@mircha',
        email : 'jonmircha@gmail.com'
    },
    nulo : null
}
console.log(json)

//metodo JSON.parse()
console.log(JSON)
console.log(JSON.parse('{"cadena":"jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@mircha","email":"jonmircha@gmail.com"},"nulo":null}'))
console.log(JSON.parse("[1,2,3]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))
console.log(JSON.parse("19"))
console.log(JSON.parse("null"))
//console.log(JSON.parse("undefined"))
//console.log(JSON.parse("hola mundo"))

//metodo JSON.stringify()
console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,3]))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify(19))
console.log(JSON.stringify(null))
console.log(JSON.stringify(json))
*/

//haciendo hablar al texto
let boton = document.getElementById('clik')
function hablar(){
    let texto = 'Ya no importa cada noche que esperé'
    const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
    hablar(texto)
}
