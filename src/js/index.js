/*
Objetivo 1: Cuando el usurio clicar no botton de ver trailer , debemos abrir la modal con el video de trailer. 

    -paso 1: pegar el elemento que representa el boton en la tela usando JavaScrip
    -paso 2: identificar cuando el usuario clica en el boton
    -paso 3: pegar el elemento da modal no js
    -paso 4: abrir la modal en la tela
*/
const botonTrailer = document.querySelector('.boton-trailer');
const video = document.getElementById('video');
const linkDoVideo =  video.src;
const modal = document.querySelector(".modal");
const cerrarTrailer = document.querySelector('.fechar-modal');

function alternarModal(){
    modal.classList.toggle('aberto')
}

botonTrailer.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});



/* 
Objetibo 2: Cualdo el usuario clicar en X devemos cerrar a modal.

    -paso 1: pegar el elemento de cerrar usando js.
    -paso 2: identificar cuando el usuario clica en el X.
    -paso 3: cerrar la modal

*/


cerrarTrailer.addEventListener("click", ()=>{
    alternarModal()
    video.setAttribute("src", " "); 
})