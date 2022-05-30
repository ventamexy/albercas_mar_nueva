window.addEventListener("DOMContentLoaded", function(){

    document.querySelector("body").classList.add("none-scrollY");

    window.addEventListener('load', (event) => {
        // document.querySelector(".load-container").remove();
    });

});

window.onload = function() {

    // --- Definir propieades elementos {li}
    defineListName();

    // Selección de opción del menú en base a la sección actual.
    let pagina = window.location.pathname;
    let arrayAhref = $("#navegacion-principal a");

    if ( arrayAhref.length > 0 ) {
         
        if ( pagina != "/" ) {
    
            arrayAhref.removeClass("item-activo");
            for (var i = 0; i < arrayAhref.length; i++) {
                let elemento = arrayAhref[i];
                if ( elemento.pathname == pagina ) {
                    elemento.classList.add("item-activo");
                    // --- Se agrega la clase para no mostrar el borde inferior del elemento.
                    contenedorPadre = elemento.parentNode;
                    contenedorPadre.classList.add("background-color-none");
                    return;
                }
            }
    
        } else {
            arrayAhref[0].classList.add("item-activo");
        }

    }
 
    // Funtion for define list name.
    function defineListName() {

        let arrayListaItems = document.querySelectorAll(".listas-items");
        for (let index = 0; index < arrayListaItems.length; index++) {

            let listName = arrayListaItems[index];
            listName.dataset.listName = "list-"+(index+1);

            let arrayItems = listName.children;
            for (let indexItem = 0; indexItem < arrayItems.length; indexItem++) {
                let item = arrayItems[indexItem]; 
                item.dataset.indexElemento = indexItem;
            }

        }

    }
    
}

/**
 * 
 * Movimiento scrollY
 * 
 */
$(document).on("scroll", function() { 

    /**
     * --- Unidades en pixeles.
     */
    let offsetHeight = $(document)[0].scrollingElement.offsetHeight; // Altura total del elemento
    let scrollTop = $(document).scrollTop(); // Desplazamiento del scroll vertical.
    let clientHeight = $(document)[0].scrollingElement.clientHeight;

    // console.log(offsetHeight, clientHeight, (offsetHeight-clientHeight), " = ", scrollTop);

    if ( (offsetHeight-clientHeight) == scrollTop ) {

        $(".irAbajo i").addClass("transform-r-180");
        $(".irAbajo").removeClass("irAbajo").addClass("irArriba");

    } else {

        $(".irAbajo i").removeClass("transform-r-180");
        $(".irArriba").removeClass("irArriba").addClass("irAbajo");

    }

    /**
     * 
     * Fijar menú
     * 
     */

    if ( document.querySelector(".menu-fijado") != null ) {

        if ( scrollTop >= 200 ) {
            $(".navbar")[0].classList.add("menu-fijado");
        } else {
            $(".navbar")[0].classList.remove("menu-fijado");
        }

    }
    
});

// --- Se establece el anio actual en el campo correspondiente.
$(".anio-actual").text(new Date().getFullYear());

$(document).on("click", ".irAbajo", function(){
    window.scroll({
        top: document.body.offsetHeight,
        behavior: 'smooth'
    });
});

$(document).on("click", ".irArriba", function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});


// Selección de clase activa al {li} seleccionado y eliminación de clase activa a los demás {li}.
$(document).on("click", ".listas-items li", function() {

    // --- Eliminación de clase a los otros elementos {li}.
    let array_li = $(this)[0].parentElement.children;
    for (let index = 0; index < array_li.length; index++) {
        array_li[index].classList.remove("item-activo");
    }

    // --- Asignación de clase 'item-activo' al {li} seleccionado.
    let li = $(this)[0].parentElement.children;
    let indexElemento = $(this)[0].dataset.indexElemento;
    li[indexElemento].classList.add("item-activo");
    
});