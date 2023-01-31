
let bo = document.getElementById('boton')
bo.addEventListener('click', contar)


function contar(){
    let ini = document.getElementById('inicio')
    let fin = document.getElementById('fin')
    let pas = document.getElementById('paso')
    var res = document.getElementById('res')

    let inicio = Number(ini.value)
    let final = Number(fin.value)
    let  paso = Number(pas.value)

    if(final == ""){
        alert('rellene el final')
    }else if(paso == 0){
        alert('el paso se considerara como: 1')
        paso = 1
        for (let c = inicio; c <= final; c += paso){
            res.innerHTML += `${c} \u{1F449} `
        }

    } else if (inicio < final) {
        for (let c = inicio; c <= final; c += paso){
            res.innerHTML += `${c} \u{1F449}`
        }
        

    } else{
        for (let c = inicio; c >= final; c -= paso){
            res.innerHTML += `${c} \u{1F449}`
        }
       
    }

    res.innerHTML += `\u{1F3C1}`
        
    
}





