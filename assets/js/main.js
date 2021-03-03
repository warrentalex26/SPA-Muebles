let boton = document.querySelector('.icon');
let cambiarImagen = document.querySelector('.container');
let slider = document.querySelector('.contenido-izquierdo');
let contador = 0;
let imagenes = ['assets/img/desktop-image-hero-1.jpg', 'assets/img/desktop-image-hero-2.jpg', 'assets/img/desktop-image-hero-3.jpg'];

function menu() {
    let oculto = document.getElementById('oculto');
    let mostrar = document.querySelectorAll('.mostrar');

    oculto.classList.toggle('oculto')
    oculto.classList.toggle("margen-menu");

    mostrar.forEach(ele => {
        ele.classList.toggle('mostrar-menu');
    });

}

setInterval(() => {
    contador++;
    if (contador === 3) {
        contador = 0
    }
    slider.style.background = `url(${imagenes[contador]})`
    slider.style.backgroundRepeat = 'no-repeat'
    slider.style.backgroundSize = 'cover'


}, 4000);

cambiarImagen.addEventListener('keydown', (eve) => {

    if (eve.keyCode = 'ArrowRight') {

        contador++;
        if (contador === 3) {
            contador = 0
        }
        slider.style.background = `url(${imagenes[contador]})`
        slider.style.backgroundRepeat = 'no-repeat'
        slider.style.backgroundSize = 'cover'



    } else if (eve.code = 'ArrowLeft') {
        contador--;
        if (contador === 0) {
            contador = 0;
        }
        slider.style.background = `url(${imagenes[contador]})`
        slider.style.backgroundRepeat = 'no-repeat'
        slider.style.backgroundSize = 'cover'

    }

})