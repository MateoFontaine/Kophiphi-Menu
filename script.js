// Selecciona todos los elementos con la clase 'titulo' para aplicar la funcionalidad de acordeón
const titulos = document.querySelectorAll('.titulo');

titulos.forEach(titulo => {
    titulo.addEventListener('click', () => {
        // Selecciona el contenedor "contenido" que está justo después del título
        const contenido = titulo.nextElementSibling;
        const iconoFlecha = titulo.querySelector('.icono-flecha');

        // Alternar la clase "girar" para rotar la flecha
        iconoFlecha.classList.toggle('girar');

        // Mostrar u ocultar el contenido
        if (contenido.style.display === 'block') {
            contenido.style.display = 'none';
        } else {
            contenido.style.display = 'block';
        }
    });
});
