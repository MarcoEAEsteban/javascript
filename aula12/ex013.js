const ahora = new Date()
const diaSem = ahora.getDay()
const nombre = "marco"

/*
    0 = domingo
    1 = lunes
    2 = martes
    3 = miercoles
    4 = jueves
    5 = viernes
    6 = sabado
*/
console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('domingo')
        break

    case 1:
        console.log(`lunes ${nombre}`)
        break

    case 2:
        console.log('martes')
        break

    case 3:
        console.log('miercoles')
        break

    case 4:
        console.log('jueves')
        break

    case 5:
        console.log('viernes')
        break  
        
    case 6:
        console.log('sabado')
        break

    default:
        break
}