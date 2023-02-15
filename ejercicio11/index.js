let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let respuesta = document.getElementById('res')
let valores = [3,4,5,6]

let boadicionar = document.getElementById('adicionar')
boadicionar.addEventListener('click', adicionar)

function esNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
        
    }else{
        return false
    }
}


function estaLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}



function adicionar(){
    if(esNumero(numero.value) && !estaLista(numero.value, valores)){
        alert('agregado')
       
    }else {
        window.alert('valor invalido o ya encontrado en la lista')
    }
}