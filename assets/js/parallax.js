let arrayImgParallax = $(".efecto-parallax");
for (let index = 0; index < arrayImgParallax.length; index++) {
    let  contenedorImagen = arrayImgParallax[index];
    let imagen = contenedorImagen.dataset.imagen;
    contenedorImagen.style.backgroundImage = "url("+imagen+")";
}