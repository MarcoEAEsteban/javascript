var dia = new Date()
var hora = dia.getHours()
var d = dia.getDay()
var min = dia.getMinutes()
var imagen = document.createElement('img')
var cuerpo = document.querySelector('body')


imagen.setAttribute('src', 'dia.png')



if ( hora >= 0 && hora < 12){
    cuerpo.style.background = 'blue'
}else if(hora < 18){
    cuerpo.style.background = 'red'

}else{
    cuerpo.style.background = 'yellow'
}

switch(d){
    case 0 :
        cuerpo.innerHTML = 'domingo <br>'
        break

    case 1 :
        cuerpo.innerHTML = 'lunes <br>'
        break
    
    case 2 :
        cuerpo.innerHTML = 'martes <br>'
        break

    case 3 :
        cuerpo.innerHTML = 'miercoles <br>'
        break

    case 4 :
        cuerpo.innerHTML = 'jueves <br>'
        break

    case 5 :
        cuerpo.innerHTML = 'viernes <br>'
        break

    case 0 :
        cuerpo.innerHTML = 'sabado <br>'
        break

    default:
        cuerpo.innerHTML = '[error!!. verifique los datos]'
        break
}

cuerpo.appendChild(imagen)
document.write(` <br>ahora son las: ${hora} : ${min} minutos`)