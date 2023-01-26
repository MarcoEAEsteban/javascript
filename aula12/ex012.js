/*
crearemos un sistema de saludos segun el horario;
buenos dias 6-11
buenas tarde 12-17
buenas noches 18-24
*/
const ahora = new Date()
const hora = ahora.getHours()
if(hora < 12){
    console.log('buenos dias')
}else if(hora < 18){
    console.log('buenas tardes')
}else if(hora < 6){
    console.log('buenas madragadas')
}else{
    console.log('buenas noches')
}