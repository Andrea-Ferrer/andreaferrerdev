/*Interaccion de los botones del slider*/
const fila = document.querySelector (".contenedor-slider");
const slider = document.querySelector (".card-slider");

const flechaIzquierda = document.getElementById ("flecha-izquierda");
const flechaDerecha = document.getElementById ("flecha-derecha");

//Event Listener para flecha derecha
flechaDerecha.addEventListener("click", () =>{
    fila.scrollLeft += fila.offsetWidth;
});

//Event Listener para flecha izquierda
flechaIzquierda.addEventListener("click", () =>{
    fila.scrollLeft -= fila.offsetWidth;
});

/*
//Hover primer slider
slider.forEach(() => {
    slider.addEventListener("click", (e) => {
        const elemento = e.currentTarget;
        setTimeout (() => {
            slider.forEach(card => card.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 300);
    });
});
*/

//Segundo slider
/*Interaccion de los botones del slider*/
const hilera = document.querySelector("#contSlide");
const contenido = document.querySelector("#cardSlide");

const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

//event listener flecha izquierda
arrowLeft.addEventListener("click", () => {
    hilera.scrollLeft -= hilera.offsetWidth
    console.log("Hola amigos");
});
arrowRight.addEventListener("click", () =>{
    hilera.scrollLeft += hilera.offsetWidth;
    console.log("Adios amigos");
});



/*
Hover
slider.forEach(() => {
    slider.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout (() => {
            card.forEach(card => card.classList.remove("hover"));
            elemento.classList.add("hover");
        }, 300);
    });
});
*/