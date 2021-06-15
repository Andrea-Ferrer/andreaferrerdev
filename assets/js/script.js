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

//Segundo slider
/*
const filaDos = document.querySelector (".contenedor-slider-dos");
const sliderDos = document.querySelector (".card-slider-dos");

const flechaIzquierdaDos = document.getElementById ("flecha-izquierda-dos");
const flechaDerechaDos = document.getElementById ("flecha-derecha-dos");

//Event Listener para flecha derecha
flechaDerechaDos.addEventListener("click", () =>{
    fila.scrollLeft += fila.offsetWidth;
});

//Event Listener para flecha izquierda
flechaIzquierdaDos.addEventListener("click", () =>{
    fila.scrollLeft -= fila.offsetWidth;
});
*/




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