let boton = document.getElementById('boton')
boton.addEventListener('click', crear)

function crear(){
    let paciente = document.getElementById('paciente')
    let edad = document.getElementById('edad')
    let peso = document.getElementById('peso')
    let estatura = document.getElementById('estatura')
    let pac = paciente.value
    let eda = Number(edad.value)
    let pes = Number(peso.value)
    let est = Number(estatura.value)

    let tabla = document.getElementById('tabla')
    if(pac.length == 0){
        alert('Digite el paciente')
    }else if(eda.length == 0 || pes.length == 0 || est.length == 0){
        alert('Rellene el espacio faltante')
    }else{
        let trt = document.createElement('tr')
        let thpac = document.createElement('th')
        let tdeda = document.createElement('td')
        let tdpes = document.createElement('td')
        let tdest = document.createElement('td')
        thpac.innerHTML += pac
        tdeda.innerHTML += `${eda} años`
        tdpes.innerHTML += `${pes} kg`
        tdest.innerHTML += `${est} cm`

        tabla.appendChild(trt)
        tabla.appendChild(thpac)
        tabla.appendChild(tdeda)
        tabla.appendChild(tdpes)
        tabla.appendChild(tdest)
        formulario.reset()
    }
}