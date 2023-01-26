function carregar(){
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagen')
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `ahora son ${hora} horas`
   
    if (hora >= 0 && hora < 12){
        img.src = 'fotos/dia.png'
        msg.innerHTML += '<p> EL dia esta caliente<p>'
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        img.src = "fotos/tarde.png"
        msg.innerHTML += '<p> La tarde esta nublada<p>'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'fotos/noche.png'
        msg.innerHTML += '<p> La noche esta muy fria<p>'
        document.body.style.background = '#515154'
    }

    
}