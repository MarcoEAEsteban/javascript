let aproductos = ['ropa', 'electrodomesticos','colores']
let opt_1 = ['pantalon', 'chompa']
let opt_2 = ['cafetera', 'batidora']
let opt_3 = ['rojo', 'azul']


const iproductos = document.getElementById('productos')
iproductos.addEventListener('change', cambia)
const isubproductos = document.getElementById('subproductos')

for(let pos in aproductos){
    const iopciones = document.createElement('option')
    iproductos.appendChild(iopciones)
    iopciones.innerHTML += aproductos[pos]

}

function cambia(){
    let pro = iproductos.options[iproductos.selectedIndex]
    let produ = pro.value
    let numero =Number(aproductos.indexOf(produ))
    let num = numero + 1
    let cosa = eval( "opt_"+ num)
    isubproductos.innerHTML= ''
    for(let posci in cosa){
        let isubOpciones = document.createElement('option')
        isubproductos.appendChild(isubOpciones) 
        isubOpciones.innerHTML = cosa[posci]  
    }
}








