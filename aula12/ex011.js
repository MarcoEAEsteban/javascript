/*
votos validos en brasil:
    -hasta los 15 no votan
    -apartir de los 16 es obcional
    -de 18 hasta 66 años es obligatorio
    -67 es obcinal
*/
const nombre = 'marco'
const edad = 67
if (edad < 16){
    console.log(`${nombre} no puedes votar`)
} else if (edad <18 || edad > 66){
    console.log(`${nombre} su voto es obcional`)
} else {
    console.log(`${nombre} su voto es obligatorio`)
}