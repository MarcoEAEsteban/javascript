let res = document.getElementById('res')

let boton = document.getElementById('boton')
boton.addEventListener('click', crear)

function crear(){
    let c = 1 
    while(c <= 10){
        res.innerHTML += `${c} entrada <br>`
        c++
    }
    let b = 1
    do{
        res.innerHTML += `${b} salida <br>`
        b++
    }while(b <= 10)
}

