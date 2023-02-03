let boton = document.getElementById('boton')
boton.addEventListener('click', crear)

function crear(){

    let plato = document.getElementById('plato')
    let palabra = plato.value
    let comida = document.getElementById('comidas')
    
    if(plato.value.length == 0){
        alert('Digite un plato')

    }else{
       
        let item = document.createElement('option')
        item.setAttribute('id','item')
        item.innerHTML += palabra
        comida.appendChild(item)
        formulario.reset()
    }
}




let agregar = document.getElementById('agregar')
agregar.addEventListener('click', crea )

function crea(){
    let tabla = document.getElementById('tabla')
    let titulo = document.getElementById('titulo')
    let texto = document.getElementById('texto')
    let texto1 = document.getElementById('texto1')
    let ti = titulo.value
    let tex = texto.value
    let tex1 = texto1.value

    if(titulo.value.length == 0 || texto.value.length == 0){
        alert('Digite el espacio que falta')
    }else{
        let tar = document.createElement('tr')
        let tah = document.createElement('th')
        let tad = document.createElement('td')
        let tad1 = document.createElement('td')
        
        tah.innerHTML += ti
        tad.innerHTML += tex
        tad1.innerHTML += tex1

        tabla.appendChild(tar)
        tabla.appendChild(tah)
        tabla.appendChild(tad)
        tabla.appendChild(tad1)

        formulario.reset()


    }
}
