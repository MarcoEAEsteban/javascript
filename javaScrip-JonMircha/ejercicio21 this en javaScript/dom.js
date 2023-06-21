/*
console.log("***Elementos del Documento***")
console.log(window.document)
console.log(document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.characterSet)
console.log(document.scripts)
setTimeout(() => {
    console.log(document.getSelection().toString())
}, 4000);

//document.write('hola mundo')
*/
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('card'))
console.log(document.getElementsByName('nombre'))
console.log(document.getElementById('menu'))

console.log(document.querySelectorAll('li'))

document.querySelectorAll('a').forEach(el => console.log(el));