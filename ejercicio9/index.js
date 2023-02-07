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