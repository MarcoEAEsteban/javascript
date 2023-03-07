let posMuebles = document.getElementById('muebles')
posMuebles.addEventListener('change', cambio)
const tiposMuebles = document.getElementById('opciones')

let muebles = ['silla', 'mesa','escritorio']
const op1 = ['redonda','cuadrada','triangulo']
const op2 = ['grande','mediana','pequeña']
const op3 = ['marron','verde','rojo']

for(var pos in muebles){
    let opcion = document.createElement('option')
    posMuebles.appendChild(opcion)
    opcion.innerHTML += muebles[pos]  
}

function cambio(){
    let seleccion = posMuebles.options[posMuebles.selectedIndex]
    let pos = muebles.indexOf(seleccion.value)
    const model = eval('op'+(pos+1))
    const modelos = model
    
    tiposMuebles.innerHTML = ''
    for(const pos in modelos){
        const tipos = document.createElement('option')
        tiposMuebles.appendChild(tipos)
        tipos.innerHTML = modelos[pos]
}
    
}





