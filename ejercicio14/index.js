const res = document.getElementById('res')
let texto = document.getElementById('texto')
const boton = document.getElementById('boton')

boton.addEventListener('click',enviar)
function enviar(){
   encontarPalabra() 
}

function encontarPalabra(){
    let frase = texto.value
    let palabras = ['si']
    
    for(const pos in palabras){
        let palabra = palabras[pos]

        if(frase.constructor != String || palabra.constructor != String){
            throw TypeError('ambos argumentos deben ser cadenas de caracteres(String)')
        }
        let palabrasI = frase.split(' ').map(p =>p.toLocaleLowerCase())
        let respuesta = palabrasI.indexOf(palabra.toLocaleLowerCase()) != -1

        console.log(respuesta)
        if(respuesta == true){
            res.innerHTML = `Se e verdade que na vida cada un tem o que merece, vocês merecem toda a felicidad`
        }else{
            
            res.innerHTML = `Lo bueno de ser soltero, es que te puedes meter en la cama por el lado que quieras`
        }


    }
    /*
    if(frase.constructor != String || palabra.constructor != String){
        throw TypeError('ambos argumentos deben ser cadenas de caracteres(String)')
    }
    let palabras = frase.split(' ').map(p =>p.toLocaleLowerCase())
    let respuesta = palabras.indexOf(palabra.toLocaleLowerCase()) != -1
    if(respuesta === true){
        res.innerHTML = `Se e verdade que na vida cada un tem o que merece, vocês merecem toda a felicidad`
    }else{
        res.innerHTML = `Lo bueno de ser soltero, es que te puedes meter en la cama por el lado que quieras`
    }
    */
    
}


