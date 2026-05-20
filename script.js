// script.js
// Inicializa interactividad del sitio y modo oscuro

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const navbar = document.getElementById('navbar');
    const orderBtn = document.getElementById('order-now');
    const navLinks = document.querySelectorAll('nav a');
    const contactForm = document.getElementById('contact-form');

    // Aplica el tema guardado o el preferido del usuario
    const setTheme = (theme) => {
        body.dataset.theme = theme;
        // sincronizar la clase `dark` utilizada por CSS
        if (theme === 'dark') body.classList.add('dark'); else body.classList.remove('dark');
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    };

    initTheme();

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.dataset.theme === 'dark' ? 'dark' : 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Navbar sticky y scroll suave
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (orderBtn) {
        orderBtn.addEventListener('click', function () {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Validación de formulario y mensaje de éxito
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name')?.value.trim();
            const email = document.getElementById('email')?.value.trim();
            const message = document.getElementById('message')?.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                return;
            }

            alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
            contactForm.reset();
        });
    }

    // Animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });
});
