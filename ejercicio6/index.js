let bo = document.getElementById('boton')
bo.addEventListener('click', clicar)

function clicar(){
    let num = document.getElementById('numero')
    let numero = Number(num.value)
    let valor = document.getElementById('tabla')

    if(num.value.length == 0){
        alert('Digite un numero')
    }else{
        valor.innerHTML = ''
        for(let c = 1; c <=12 ; c++){
            let item = document.createElement('option')
            item.innerText += `${numero} x ${c} = ${numero*c}`
            item.value = `valor${c}`
            valor.appendChild(item)
        }
        
    }
    

}


