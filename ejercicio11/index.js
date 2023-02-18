let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let respuesta = document.getElementById('res')
let valores = []

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
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.innerHTML = `valor ${numero.value} adicionado`
        lista.appendChild(item)

       
    }else {
        window.alert('valor invalido o ya encontrado en la lista')
    }
    numero.value = ''
    numero.focus()
}

let botfin = document.getElementById('finalizar')
botfin.addEventListener('click', resultado)

function resultado(){
    if(valores.length == 0){
        alert('digite un valor')
    }else {
        let tot = valores.length

        respuesta.innerHTML = ''
        respuesta.innerHTML += `<p>En total, tenemos ${tot} numeros cadastrados</p>`

    }
}