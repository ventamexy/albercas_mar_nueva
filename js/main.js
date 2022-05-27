// Toggle menu-bar

document.addEventListener('DOMContentLoaded', function () {
    evenetListener();
});

function evenetListener() {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');


    navegacion.classList.toggle('mostrar')
    // if(navegacion.classList.contains('mostrar')){
    //     navegacion.classList.remove('mostrar')
    // }else{
    //     navegacion.classList.add('mostrar')
    // }
}


// Mapa
if ( document.getElementById('mapa') ) {

    var map = L.map('mapa').setView([17.960890, -102.195890], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([17.960890, -102.195890]).addTo(map).bindPopup('Albercas del mar').openPopup();
    // .bindTooltip('GDLWebCamp 2018, Boletos ya disponibles')
    // .openTooltip();
}
// (function () {
//     $(function () {
//         // Colorbox

//         $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');

//         $('.alberca-info').colorbox({ inline: true, width: '50%' });
//         $('.boton_newsletter').colorbox({ inline: true, width: '50%' });
//     })
// })();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCfwWEYfalbck6zdiwdfwIsPQYZ_hJdXd8",
    authDomain: "fb-api-5835a.firebaseapp.com",
    databaseURL: "https://fb-api-5835a-default-rtdb.firebaseio.com",
    projectId: "fb-api-5835a",
    storageBucket: "fb-api-5835a.appspot.com",
    messagingSenderId: "225448914734",
    appId: "1:225448914734:web:9bf9354378ab882add14bf",
    measurementId: "G-8JZJJDZM18"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore()

db.collection('anuncio-albercas-del-mar')
    .where("visible", "==", true)
    .get()
    .then(snapshot => {
        let data = [];
        snapshot.forEach(doc => {
            data.push(
                Object.assign(
                    {
                        id: doc.id
                    },
                    doc.data()
                )
            );
        });
        console.log(data)


        let output = ` <div class="contenedor-anuncios">`;

        data.forEach(function (anun) {
            output += `
                <div class="anuncio">
                <img src="${anun.url}" alt="">
                <div class="contenido-anuncio clearfix">
                <h3>${anun.name}</h3>
                <p>${anun.descripcion}</p>
                </div>
                </div>
                `;
        });
        document.getElementById('elem').innerHTML = output
        // console.log(element);
    })
    .catch(err => console.log(err));



// const url = 'https://fb-api-5835a-default-rtdb.firebaseio.com/anuncio.json';

// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {

//         let output = ` <div class="contenedor-anuncios">`;

//         data.forEach(function (anun) {
//             output += `
//             <div class="anuncio">
//             <img src="${anun.url}" alt="">
//             <div class="contenido-anuncio">
//             <h3>${anun.name} </h3>
//             <p>${anun.descripcion}</p>
//             </div>
//             </div>
//             `;
//         });
//         document.getElementById('elem').innerHTML = output;
//         // console.log(element);


//         console.log(Object.keys(data));
//     })
//     // .catch(err => console.log(err))
