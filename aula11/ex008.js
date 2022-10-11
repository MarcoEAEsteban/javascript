
function verificar(){
    var pais = window.document.getElementById('pais')
    var res = window.document.getElementById('res')
    res.innerHTML = `viviendo en: ${pais} `
    if(pais == "peru"){
    res.innerHTML +='usted es peruano'
    }else{
    res.innerHTML+= 'usted es estrangero'
    }
}
