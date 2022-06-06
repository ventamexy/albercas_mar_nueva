// --- Carousel servicios
let myCarousel = document.querySelector('#carousel-services');
new bootstrap.Carousel(myCarousel, {
  interval: 7000,
  wrap: true
});

// --- Carousel slider principal
let carouselServicios = document.querySelector('#carouselServicios');
new bootstrap.Carousel(carouselServicios, {
  interval: 10000,
  wrap: true
});