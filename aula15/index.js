
let palNueva = document.getElementById('agregar')
let lista = []
let boton = document.getElementById('botagregar')

boton.addEventListener('click', colocar)
function colocar(){
    let numeros = document.getElementById('palabras')
    numeros.innerHTML += palNueva.value
    lista.push(palNueva.value)
    console.log(lista)
    formulario.reset()
}