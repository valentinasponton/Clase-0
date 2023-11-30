<script>
let carruselPosicion = 0;

function carruselSiguiente() {
    carruselPosicion++;
    mostrarCarrusel();
}

function carruselAnterior() {
    carruselPosicion--;
    mostrarCarrusel();
}

function mostrarCarrusel() {
    const carruselItems = document.querySelectorAll(".carrusel-item");
    if (carruselPosicion < 0) {
        carruselPosicion = carruselItems.length - 1;
    }
    if (carruselPosicion >= carruselItems.length) {
        carruselPosicion = 0;
    }
    carruselItems.forEach((item, index) => {
        item.style.display = index === carruselPosicion ? "block" : "none";
    });
}

mostrarCarrusel();
</script>