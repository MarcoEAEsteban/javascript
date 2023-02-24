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
        respuesta.innerHTML = ''

       
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

        let mayor = valores[0]
        let menor = valores[0]
        let suma = 0
        let media = 0

        for(let pos in valores){
            suma += valores[pos]
            if(valores[pos] > mayor)
                mayor = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = suma / tot

        respuesta.innerHTML = ''
        respuesta.innerHTML += `<p>En total, tenemos ${tot} numeros cadastrados</p>`
        respuesta.innerHTML += `<p>EL mayor valor informado  es ${mayor}.</p>`
        respuesta.innerHTML += `<p>El menos valor informado es ${menor}</p>`
        respuesta.innerHTML += `<p>La suma de todos los valores es ${suma}</p>`
        respuesta.innerHTML += `<p>El promedio de los valores es ${media}</p>`

    }
}