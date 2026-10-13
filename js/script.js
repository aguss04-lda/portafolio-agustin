// ===== NAVEGACIÓN SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ANIMACIÓN DE BARRAS DE HABILIDADES AL HACER SCROLL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const barras = entry.target.querySelectorAll('.progreso');
            barras.forEach(barra => {
                const ancho = barra.style.width;
                barra.style.width = '0';
                setTimeout(() => {
                    barra.style.width = ancho;
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

const seccionHabilidades = document.querySelector('#habilidades');
if (seccionHabilidades) {
    observer.observe(seccionHabilidades);
}

// ===== CAMBIO DE ESTILO EN LA NAVBAR AL HACER SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

console.log('¡Portafolio de Agustín Arrascaeta Cuevas cargado! 🚀');