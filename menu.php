<?php
// La Abuela's Kitchen - Sistema de Menú Premium
// Estilo Boar's Head
header('Content-Type: text/html; charset=utf-8');

// Datos del Restaurante
$restaurant = [
    'name' => 'La Abuela\'s Kitchen',
    'tagline' => 'Auténtica Comida Caribeña',
    'description' => 'Experiencia culinaria dominicana',
    'schedule' => [
        'Miércoles' => '8:00 AM - 12:00 AM',
        'Jueves' => '8:00 AM - 12:00 AM',
        'Viernes' => '8:00 AM - 12:00 AM',
        'Sábado' => '8:00 AM - 12:00 AM',
        'Domingo' => '8:00 AM - 12:00 AM',
        'Lunes' => '8:00 AM - 12:00 AM',
        'Martes' => '8:00 AM - 12:00 AM'
    ]
];

// Datos del Menú por Secciones
$menu = [
    [
        'id' => 'leccion1',
        'title' => 'Lección 1 - Pa\' Picar',
        'description' => 'Entradas y aperitivos',
        'items' => [
            'Yuquita Frita Con Salsa De Queso',
            'Dip De Aguacate (Acompañado de pancito o casabe)',
            'Montaditos De Pan Al Ajillo Con Pollo',
            'Nachos Con Queso',
            'Papas Fritas Con Queso',
            'Pastel En Hoja Con Pollo (Acompañado de salsa de ajo, salsa honey mustard, salsa de queso o salsas tradicionales)',
            'Palitos Mozzarella (Acompañado de salsa de ajo, salsa honey mustard, salsa de queso o salsas tradicionales)',
            'Brochetas De Tostones Con Salami',
            'Brocheta De Pollo Con Vegetales',
            'Brocheta De Camarones Con Vegetales',
            'Canastitas Con Pollo Y Queso',
            'Canastitas Con Res Y Queso',
            'Canastitas Con Atún (Sin queso)',
            'Canastitas Con Camarones (Camarones a la crema o a la criolla)',
            'Canastitas Mixta Pollo Y Camarones',
            'Canastitas Con El Chivo De Abuela (Sin queso)',
            'Canastitas Con El Chicharrón De Abuela (Sin queso)'
        ]
    ],
    [
        'id' => 'leccion2',
        'title' => 'Lección 2 - Los Caldos De Abuela',
        'description' => 'Caldos y sopas tradicionales',
        'items' => [
            'Sancocho',
            'Mondongo',
            'Pipian De Chivo',
            'Cocido Con Patica De Cerdo',
            'Patica De Cerdo',
            'Patimongo Con Patica De Cerdo',
            'Patimongo Con Pata De Vaca',
            'Cocido Con Pata De Vaca',
            'Caldo De Pata De Vaca'
        ]
    ],
    [
        'id' => 'leccion3',
        'title' => 'Lección 3 - Las Sopas De Abuela',
        'description' => 'Sopas variadas',
        'items' => [
            'Sopa Boba (Con o sin fideos)',
            'Sopa De Vegetales',
            'Sopa Con Pollo (Exquisito filete de pechuga a la plancha cortada en cubos)',
            'Sopa Con Res',
            'Sopa Con Pescado',
            'Sopa Con Camarones',
            'Sopa Con Filete De Tilapia',
            'Sopa Con Filete De Mero',
            'Sopa Con Mariscos'
        ]
    ],
    [
        'id' => 'leccion4',
        'title' => 'Lección 4 - Las Ensaladas',
        'description' => 'Ensaladas frescas',
        'items' => [
            'Ensalada Campesina',
            'Ensalada De La Abuela',
            'Ensalada Con Atún',
            'Ensalada Caprese',
            'Ensalada Con Camarones'
        ]
    ],
    [
        'id' => 'leccion5',
        'title' => 'Lección 5 - Las Pastas',
        'description' => 'Pastas deliciosas',
        'items' => [
            'La Campesina De Abuela (Exquisita pasta al estilo campesino)',
            'Pasta Con Camarones (En salsa roja o blanca)',
            'Pasta Mixta Pollo Con Bacon (En salsa roja o blanca)',
            'Boloñesa De Abuela (En salsa roja o blanca)',
            'Pasta Con Pechuga De Pollo (Alfredo)',
            'Pasta Con Bacon (Carbonara)',
            'Pasta Con Chuleta (En salsa roja o blanca)',
            'Tradicional En Salsa Pomodoro'
        ]
    ],
    [
        'id' => 'leccion8',
        'title' => 'Lección 8 - Los Mofongos',
        'description' => 'Mofongos variados',
        'items' => [
            'Mofonguitos De Abuela (Triada de mofongos para compartir)',
            'Mofongo De Abuela',
            'Mofongo Con Pechuga A La Crema',
            'Mofongo Con Pechuga Al Ajillo',
            'Mofongo Con Chuleta (A la crema, o solo frita)',
            'Mofongo Bañado En Queso',
            'Mofongo Con Bacon (A la crema, al queso o solo frito)',
            'Mofongo Con Camarones (A la crema, al ajillo o a la criolla)',
            'Mofongo Con Chivo De Abuela (A la crema, al ajillo o a la criolla)'
        ]
    ],
    [
        'id' => 'leccion9',
        'title' => 'Lección 9 - Las Chanclas',
        'description' => 'Chanclas y patacones',
        'items' => [
            'Chancla De Abuela De Pollo (Patacón majao)',
            'Chancla De Abuela De Res (Patacón majao)',
            'Chancla De Abuela Mixta Res Y Pollo (Patacón majao)',
            'Chancla De Abuela Mixta Pollo Y Bacon (Patacón majao)',
            'Chancla De Abuela Mixta Res Y Bacon (Patacón majao)'
        ]
    ],
    [
        'id' => 'leccion10',
        'title' => 'Lección 10 - Las Quesadillas',
        'description' => 'Quesadillas variadas',
        'items' => [
            'Nachos Para Tres',
            'Quesadilla Solo Queso (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesadilla Con Pollo (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesadilla Con Res (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesadilla Mixta Res Y Pollo (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesadilla Con Camarones (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesibirria De Chivo (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesibirria De Cerdo (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesibirria De Res (Incluye mozzarella y cheddar, con pico de gallo)',
            'Quesimixta De Birrias (Incluye mozzarella y cheddar, con pico de gallo)'
        ]
    ],
    [
        'id' => 'leccion12',
        'title' => 'Lección 12 - Los Tablones De Abuela',
        'description' => 'Tablones para compartir',
        'items' => [
            'Tablón Para 2 Personas (Alitas, carnita, pechuga, tostones, papas fritas, salsas)',
            'Tablón Para 3 Personas (Alitas, carnita, longaniza, pechuga, tostones, papas, batata, yuquita, salsas)',
            'Tablón Para 5 Personas (Alitas, carnita, longaniza, chuleta, pechuga, tostones, papas, yuquita, batata, salsas)'
        ]
    ],
    [
        'id' => 'leccion13',
        'title' => 'Lección 13 - Los Sándwiches',
        'description' => 'Sándwiches variados',
        'items' => [
            'Club Sandwich',
            'Sándwich Con Pollo Y Bacon',
            'Sándwich Huevo, Queso Y Tocino',
            'Sándwich Con Atún',
            'Sándwich De Pollo Y Queso',
            'Sándwich Con Salami Y Queso',
            'Sándwich Derretido De Queso',
            'Pan Dominicano (Pan con salami)',
            'Pan Con Aguacate',
            'Pan Con Huevo Frito',
            'Pan Con Chocolate'
        ]
    ],
    [
        'id' => 'mariscos',
        'title' => 'Los Mariscos Y Pescados',
        'description' => 'Mariscos y pescados frescos',
        'items' => [
            'Filete De Mero (A la criolla, empanizado, al ajillo, a la plancha, al coco o al vapor)',
            'Filete De Tilapia (A la criolla, empanizado, frito, al ajillo, a la plancha, al coco o al vapor)',
            'Tilapia Entera (Al guiso de abuela, al ajillo, a la criolla, al coco, a la plancha o al vapor)',
            'Camarones (Al ajillo, a la crema, a la criolla, a la vinagreta, a la plancha con vegetales y al coco)',
            'El Salmón De Abuela (Al ajillo, a la plancha, al coco o al vapor)',
            'Dúo Del Mar - Mero con camarones (Al ajillo, a la criolla, a la plancha, al coco o al vapor)'
        ]
    ],
    [
        'id' => 'carnes',
        'title' => 'Las Carnes',
        'description' => 'Carnes variadas',
        'items' => [
            'Las Alitas De Abuela (10 unidades para compartir en salsas bbq, buffalo o solo fritas)',
            'Chivo Guisado De Abuela',
            'Guinea Criolla Guisada',
            'Rabo Encendió De Abuela',
            'Bacon A La Plancha',
            'Pechuga En Salsa De Hongos',
            'Pechuga En Salsa De Queso',
            'Pechuga A La Crema',
            'Pechuga A La Plancha',
            'Pechuga A La Plancha Con Vegetales Salteados',
            'Pechuga Frita',
            'Pechuga Empanizada',
            'Alitas (Buffalo, bbq o solo fritas)',
            'Pechurinas De Abuela',
            'Carnitas De Cerdo Frita',
            'Longaniza Criolla Frita',
            'Chuleta (Buffalo, bbq o solo fritas)'
        ]
    ],
    [
        'id' => 'tacos',
        'title' => 'Los Tacos De Abuela',
        'description' => 'Triadas y Dúos de Tacos',
        'items' => [
            'Triada De Tacos Con Pollo (Acompañado de pico de gallo y guacamole)',
            'Triada De Tacos Con Huevos Revueltos (Con o sin vegetales, acompañado de pico de gallo y guacamole)',
            'Triada De Tacos Con Res (Acompañado de pico de gallo y guacamole)',
            'Triada De Tacos De Mixto Pollo Y Res (Acompañado de pico de gallo y guacamole)',
            'Triada De Tacos De Birria De Res (Acompañado de pico de gallo y guacamole)',
            'Triada De Tacos De Birria De Cerdo (Acompañado de pico de gallo y guacamole)',
            'Triada De Tacos De Birria De Chivo (Acompañado de pico de gallo y guacamole)',
            'Triada De Tacos Con Camarones (Acompañado de pico de gallo y guacamole)',
            'Triada De Tacos Mixta De Birrias (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos Con Pollo (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos De Huevos Revueltos (Con o sin vegetales, acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos Con Res (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos De Mixto Pollo Y Res (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos De Birria De Res (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos De Birria De Cerdo (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos De Birria De Chivo (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos Con Camarones (Acompañado de pico de gallo y guacamole)',
            'Dúo De Tacos Mixta De Birrias (Acompañado de pico de gallo y guacamole)'
        ]
    ]
];

// Servicios del Restaurante
$services = [
    'Accesibilidad' => [
        'Espacio accesible para personas en silla de ruedas'
    ],
    'Opciones de servicio' => [
        'Asientos al aire libre',
        'Entrega a domicilio',
        'Pedidos desde el automóvil',
        'Para llevar',
        'Consumo en el lugar'
    ],
    'Aspectos destacados' => [
        'Asientos en la terraza'
    ],
    'Popular por' => [
        'Cena en solitario'
    ],
    'Qué ofrece' => [
        'Alcohol',
        'Aperitivos',
        'Bocadillos',
        'Café',
        'Cerveza'
    ],
    'Opciones del local' => [
        'Desayunos',
        'Espacio con asientos',
        'Servicio a la mesa'
    ],
    'Servicios' => [
        'Sanitarios disponibles'
    ],
    'Ambiente' => [
        'A la moda',
        'Agradable',
        'Informal',
        'Relajado'
    ],
    'Público usual' => [
        'Grupos',
        'Turistas'
    ],
    'Pagos' => [
        'Tarjetas de crédito'
    ],
    'Menores' => [
        'Ideal para ir con niños'
    ],
    'Estacionamiento' => [
        'Hay suficiente espacio',
        'Estacionamiento gratuito',
        'Estacionamiento gratuito en la calle'
    ]
];

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $restaurant['name']; ?> - Menú Premium</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="nav-wrap">
            <div class="nav-logo">
                <span>🍽️</span>
                <span><?php echo $restaurant['name']; ?></span>
            </div>
            <div class="nav-links">
                <a href="#menu" class="nav-link active" data-section="menu">Menú</a>
                <a href="#schedule" class="nav-link" data-section="schedule">Horarios</a>
                <a href="#services" class="nav-link" data-section="services">Servicios</a>
            </div>
            <button class="theme-pill" id="themeToggle">🌙</button>
            <button class="hamburger" id="hamburger">☰</button>
        </div>
        <div class="mobile-menu" id="mobileMenu">
            <a href="#menu" data-section="menu">Menú</a>
            <hr>
            <a href="#schedule" data-section="schedule">Horarios</a>
            <hr>
            <a href="#services" data-section="services">Servicios</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero" id="hero">
        <div class="hero-bg"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-eyebrow">
                <span></span>
                Bienvenido
                <span></span>
            </div>
            <h1><?php echo $restaurant['name']; ?></h1>
            <p class="hero-sub"><?php echo $restaurant['description']; ?></p>
            <div class="hero-ctas">
                <button class="btn-primary" onclick="scrollToMenu()">Ver Menú</button>
                <button class="btn-ghost" onclick="scrollToServices()">Más Info</button>
            </div>
        </div>
        <div class="hero-scroll">
            <span>Explorar</span>
        </div>
    </header>

    <!-- Marquee Strip -->
    <div class="marquee-strip">
        <div class="marquee-track">
            <div class="marquee-item">Auténtica Comida Caribeña</div>
            <div class="marquee-item">Recetas Tradicionales</div>
            <div class="marquee-item">Ingredientes Frescos</div>
            <div class="marquee-item">Auténtica Comida Caribeña</div>
            <div class="marquee-item">Recetas Tradicionales</div>
            <div class="marquee-item">Ingredientes Frescos</div>
        </div>
    </div>

    <!-- SECCIÓN: MENÚ -->
    <section class="menu-section" id="menu">
        <div class="sec-header">
            <h2>Nuestro Menú</h2>
            <p>Descubre la autenticidad de la cocina caribeña</p>
        </div>

        <!-- Búsqueda Premium -->
        <div class="search-container-premium">
            <input 
                type="text" 
                id="searchInput" 
                class="search-bar-premium" 
                placeholder="Buscar plato..."
                autocomplete="off"
            >
            <span class="search-icon-premium">🔍</span>
        </div>

        <div class="cat-bar" id="categoriesBar">
            <button class="cat-btn active" data-filter="all">Todos</button>
            <button class="cat-btn" data-filter="leccion1">Pa' Picar</button>
            <button class="cat-btn" data-filter="leccion8">Mofongos</button>
            <button class="cat-btn" data-filter="leccion9">Chanclas</button>
            <button class="cat-btn" data-filter="leccion10">Quesadillas</button>
            <button class="cat-btn" data-filter="tacos">Tacos</button>
            <button class="cat-btn" data-filter="carnes">Carnes</button>
            <button class="cat-btn" data-filter="mariscos">Mariscos</button>
        </div>

        <div class="dishes-grid" id="menuGrid">
                <?php foreach ($menu as $section): ?>
                    <div class="dish-category" data-section-id="<?php echo $section['id']; ?>">
                        <div class="cat-title">
                            <h3><?php echo $section['title']; ?></h3>
                            <p><?php echo $section['description']; ?></p>
                        </div>
                        <div class="dishes-row">
                            <?php foreach ($section['items'] as $item): ?>
                                <div class="dish-card" data-item="<?php echo strtolower($item); ?>">
                                    <div class="dish-inner">
                                        <h4><?php echo $item; ?></h4>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
    </section>

    <!-- SECCIÓN: HORARIOS -->
    <section class="info-section" id="schedule">
        <div class="sec-header">
            <h2>Horario de Atención</h2>
            <p>Abierto para disfrutar</p>
        </div>
        
        <div class="schedule-list-premium">
            <?php foreach ($restaurant['schedule'] as $day => $hours): ?>
                <div class="schedule-line">
                    <span class="schedule-day"><?php echo $day; ?></span>
                    <span class="schedule-hours"><?php echo $hours; ?></span>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- SECCIÓN: SERVICIOS -->
    <section class="info-section dark-bg" id="services">
        <div class="sec-header light-header">
            <h2>Servicios y Características</h2>
            <p>Todo lo que necesitas saber</p>
        </div>
        
        <div class="services-list-premium">
            <?php foreach ($services as $category => $items): ?>
                <div class="service-category-group">
                    <h3 class="service-category-title"><?php echo $category; ?></h3>
                    <ul class="service-items-list">
                        <?php foreach ($items as $item): ?>
                            <li class="service-item-line"><?php echo $item; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer-premium">
        <div class="footer-content">
            <h3><?php echo $restaurant['name']; ?></h3>
            <p><?php echo $restaurant['tagline']; ?></p>
            <p class="footer-credit">© 2024 <?php echo $restaurant['name']; ?>. Todos los derechos reservados.</p>
            <p class="footer-love">Hecho con ❤️ para ti</p>
        </div>
    </footer>

    <script>
        // Funciones de scroll
        function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }
        function scrollToServices() {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Hero loaded
        window.addEventListener('load', function() {
            document.querySelector('.hero').classList.add('loaded');
        });

        // Mobile menu toggle
        document.getElementById('hamburger').addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.toggle('active');
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', function() {
            document.body.classList.toggle('dark');
            this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
        });

        // Cerrar mobile menu al navegar
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobileMenu').classList.remove('active');
            });
        });

        // Navbar links navigation
        document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('data-section');
                document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    </script>
    <script src="script.js"></script>
</body>
</html>
