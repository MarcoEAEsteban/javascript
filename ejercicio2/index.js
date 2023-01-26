const boton = document.getElementById('boton')
boton.addEventListener('click', verificar)

function verificar(){
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('verifique los datos y tente nuvamente')
    } else{
        const fsex = document.getElementsByName('radsex')
        const edad = ano - Number(fano.value)
        var genero = ''

        let imagen = document.createElement('img')
        imagen.setAttribute('id','foto')
        

        if(fsex[0].checked){
            genero = 'Hombre'
            if(edad >= 0 && edad < 10){
                imagen.setAttribute('src', 'fotos/niño.png')
            }else if(edad < 18){
                imagen.setAttribute('src', 'fotos/joven.png')
            }else{
                imagen.setAttribute('src', 'fotos/adulto.png')
            }
        }else if(fsex[1].checked){
            genero = ' Mujer'
            if(edad >= 0 && edad < 10){
                imagen.setAttribute('src', 'fotos/niña.png' )
            }else if( edad < 18){
                imagen.setAttribute('src', 'fotos/señorita.png')
            }else{
                imagen.setAttribute('src', 'fotos/señora.png')
            }
        }
        
        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} con ${edad} años<br>`
        res.appendChild(imagen)

    }
}