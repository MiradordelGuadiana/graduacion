// 1. Efecto de aparición al deslizar (Scroll Animation)
const secciones = document.querySelectorAll('.oculta');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        // Si la sección entra en la pantalla, le añadimos la clase 'visible'
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3 // Se activa cuando el 30% de la sección es visible
});

secciones.forEach(seccion => {
    observador.observe(seccion);
});

// 2. Botón sorpresa final (Explosión de corazones y flores)
const boton = document.getElementById('botonSorpresa');

boton.addEventListener('click', () => {
    // Array con los emojis que quieres que exploten
    const emojis = ['❤️', '🌸', '💖', '🌹', '✨', '🎓']; // ¡Añadí el birrete por su graduación!
    const cantidad = 60; // Cantidad de emojis que saldrán en la explosión

    for (let i = 0; i < cantidad; i++) {
        // Creamos un nuevo elemento div para cada emoji
        const particula = document.createElement('div');
        particula.classList.add('particula');
        
        // Elegimos un emoji al azar de nuestra lista
        particula.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Los hacemos aparecer en el centro de la pantalla
        particula.style.left = '50vw';
        particula.style.top = '50vh';

        // Calculamos distancias y rotaciones aleatorias para que vuelen en todas direcciones
        const tx = (Math.random() - 0.5) * 100 + 'vw'; 
        const ty = (Math.random() - 0.5) * 100 + 'vh'; 
        const rot = (Math.random() * 360) + 'deg';

        // Le pasamos estos valores aleatorios al CSS
        particula.style.setProperty('--tx', tx);
        particula.style.setProperty('--ty', ty);
        particula.style.setProperty('--rot', rot);

        // Añadimos el emoji a la página
        document.body.appendChild(particula);

        // Limpiamos la página eliminando el emoji después de 2.5 segundos (lo que dura la animación)
        setTimeout(() => {
            particula.remove();
        }, 2500);
    }
});