let boton = document.getElementById('boton')
boton.addEventListener('click', verificar)

function verificar(){
    let res = document.getElementById('res')
    let sex = document.getElementsByName('sex')
    let genero = ''
    if(sex[0].checked){
        genero = 'masculino'
        res.innerHTML += genero
    }else{
        genero = 'femenino'
        res.innerHTML += genero
    }
}


let bot = document.getElementById('agregar')
bot.addEventListener('click', agregar)

function agregar(){
    let respuesta = document.getElementById('respuesta')
    let frutas = document.getElementsByName('frutas')
    let tipos = ''

    if(frutas[0].checked){
        tipos = 'Pera'
        respuesta.innerHTML += tipos 
    }else if(frutas[1].checked){
            tipos = 'Manzana'
            respuesta.innerHTML += tipos
    }else if(frutas[2].checked){
            tipos = 'Patano'
            respuesta.innerHTML += tipos
    }else if(frutas[3].checked){
            tipos = 'Uva'
            respuesta.innerHTML += tipos
    }else{

    }
    
}