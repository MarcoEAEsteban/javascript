const bo = document.getElementById('boton')
bo.addEventListener('click', clicar)
var frase = document.getElementById('palabra')


function clicar(){
    if (frase.value.length == 0){
        alert('verifique el texto')
    }else{
        crearboton()
    }
   
}

function crearboton(){
    var palabra = frase.value
    var res = document.getElementById('res')
    var boton = document.createElement('input')
    boton.setAttribute('value', palabra )
    boton.setAttribute('type', 'button' )
    res.appendChild(boton)
    formulario.reset() 
}


