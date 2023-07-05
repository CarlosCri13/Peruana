// Obtener referencia a la sección de la galería y a las imágenes
const galeriaSection = document.getElementById("galeria");
const imagenes = galeriaSection.querySelectorAll("img");

// Función para mostrar la animación al pasar el mouse por encima de una imagen
function mostrarAnimacion() {
  this.classList.add("animacion");
}

// Función para eliminar la animación al retirar el mouse de una imagen
function ocultarAnimacion() {
  this.classList.remove("animacion");
}

// Agregar eventos de mouse a cada imagen
imagenes.forEach((imagen) => {
  imagen.addEventListener("mouseover", mostrarAnimacion);
  imagen.addEventListener("mouseout", ocultarAnimacion);
});

// Obtener referencia a todos los enlaces del menú
const menuLinks = document.querySelectorAll("header nav a");

// Función para desplazamiento suave al hacer clic en un enlace
function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: "smooth" });
}

// Agregar evento de clic a cada enlace del menú
menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Agregar una clase de animación a la galería al cargar la página
window.addEventListener("load", function () {
  galeriaSection.classList.add("animacion");
});

// Agregar una clase de animación al hacer scroll en la página
window.addEventListener("scroll", function () {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  sections.forEach(function (section) {
    const sectionPosition = section.offsetTop;

    if (scrollPosition > sectionPosition - windowHeight + 200) {
      section.classList.add("animacion");
    } else {
      section.classList.remove("animacion");
    }
  });
});


// Obtener referencia al elemento de texto "Te quiero"
const teQuieroText = document.querySelector("#te-quiero");

// Función para aplicar el efecto de zoom al pasar el mouse sobre el texto
function aplicarZoom() {
  teQuieroText.style.transform = "scale(1.2)";
}

// Función para eliminar el efecto de zoom al retirar el mouse del texto
function eliminarZoom() {
  teQuieroText.style.transform = "scale(1)";
}

// Agregar eventos de mouse al texto "Te quiero"
teQuieroText.addEventListener("mouseover", aplicarZoom);
teQuieroText.addEventListener("mouseout", eliminarZoom);