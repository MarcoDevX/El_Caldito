// script.js — El Caldito de Abuela
// Renderiza el menú, gestiona el tema, navbar y demás interactividad.

/* ── Menu data ── */
const MENU = [
  { id:1,  lec:"Lección 1",  nom:"Pa' Picar",             platos:[
    {n:"Yuquita Frita Con Salsa De Queso",          d:null,                                       v:null,                                          e:"🍟", p:"$4.99"},
    {n:"Dip De Aguacate",                            d:"Acompañado de pancito o casabe",           v:null,                                          e:"🥑", p:"$5.99"},
    {n:"Montaditos De Pan Al Ajillo Con Pollo",      d:null,                                       v:null,                                          e:"🍞", p:"$6.99"},
    {n:"Nachos Con Queso",                           d:null,                                       v:null,                                          e:"🧀", p:"$7.99"},
    {n:"Papas Fritas Con Queso",                     d:null,                                       v:null,                                          e:"🍟", p:"$5.99"},
    {n:"Pastel En Hoja Con Pollo",                   d:null,                                       v:"Salsa de ajo, honey mustard, queso o tradicional",e:"🫔", p:"$4.99"},
    {n:"Palitos Mozzarella",                         d:null,                                       v:"Salsa de ajo, honey mustard o queso",         e:"🧀", p:"$5.99"},
    {n:"Brochetas De Tostones Con Salami",           d:null,                                       v:null,                                          e:"🍢", p:"$7.99"},
    {n:"Brocheta De Pollo Con Vegetales",            d:null,                                       v:null,                                          e:"🍢", p:"$8.99"},
    {n:"Brocheta De Camarones Con Vegetales",        d:null,                                       v:null,                                          e:"🦐", p:"$10.99"},
    {n:"Canastitas Con Pollo Y Queso",               d:null,                                       v:null,                                          e:"🫙", p:"$6.99"},
    {n:"Canastitas Con Res Y Queso",                 d:null,                                       v:null,                                          e:"🫙", p:"$7.99"},
    {n:"Canastitas Con Atún",                        d:"Sin queso",                                v:null,                                          e:"🐟", p:"$8.99"},
    {n:"Canastitas Con Camarones",                   d:null,                                       v:"A la crema o a la criolla",                   e:"🦐", p:"$9.99"},
    {n:"Canastitas Mixta Pollo Y Camarones",         d:null,                                       v:null,                                          e:"🫙", p:"$10.99"},
    {n:"Canastitas Con El Chivo De Abuela",          d:"Sin queso",                                v:null,                                          e:"🐐", p:"$9.99"},
    {n:"Canastitas Con El Chicharrón De Abuela",     d:"Sin queso",                                v:null,                                          e:"🥩", p:"$8.99"},
  ]},
  { id:2,  lec:"Lección 2",  nom:"Los Caldos De Abuela",  platos:[
    {n:"Sancocho",                    d:null, v:null, e:"🍲", p:"$12.99", img:"sancocho.jpg"},
    {n:"Mondongo",                    d:null, v:null, e:"🥘", p:"$11.99"},
    {n:"Pipián De Chivo",              d:null, v:null, e:"🍲", p:"$13.99"},
    {n:"Cocido Con Patica De Cerdo",   d:null, v:null, e:"🥣", p:"$12.99"},
    {n:"Patica De Cerdo",              d:null, v:null, e:"🍖", p:"$11.99"},
    {n:"Patimongo Con Patica De Cerdo",d:null, v:null, e:"🥣", p:"$13.99"},
    {n:"Patimongo Con Pata De Vaca",   d:null, v:null, e:"🥣", p:"$14.99"},
    {n:"Cocido Con Pata De Vaca",      d:null, v:null, e:"🍲", p:"$14.99"},
    {n:"Caldo De Pata De Vaca",        d:null, v:null, e:"🫕", p:"$12.99"},
  ]},
  { id:3,  lec:"Lección 3",  nom:"Las Sopas De Abuela",   platos:[
    {n:"Sopa Boba",                  d:null,                                    v:"Con o sin fideos",e:"🍜", p:"$8.99"},
    {n:"Sopa De Vegetales",           d:null,                                    v:null,              e:"🥦", p:"$7.99"},
    {n:"Sopa Con Pollo",              d:"Pechuga a la plancha en cubos",         v:null,              e:"🍗", p:"$9.99"},
    {n:"Sopa Con Res",                d:null,                                    v:null,              e:"🥩", p:"$10.99"},
    {n:"Sopa Con Pescado",            d:null,                                    v:null,              e:"🐟", p:"$10.99"},
    {n:"Sopa Con Camarones",          d:null,                                    v:null,              e:"🦐", p:"$11.99"},
    {n:"Sopa Con Filete De Tilapia",  d:null,                                    v:null,              e:"🐠", p:"$11.99"},
    {n:"Sopa Con Filete De Mero",     d:null,                                    v:null,              e:"🐡", p:"$12.99"},
    {n:"Sopa Con Mariscos",           d:null,                                    v:null,              e:"🦞", p:"$13.99"},
  ]},
  { id:4,  lec:"Lección 4",  nom:"Las Ensaladas",          platos:[
    {n:"Ensalada Campesina",   d:null, v:null, e:"🥗", p:"$8.99"},
    {n:"Ensalada De La Abuela",d:null, v:null, e:"🥗", p:"$9.99"},
    {n:"Ensalada Con Atún",    d:null, v:null, e:"🐟", p:"$10.99"},
    {n:"Ensalada Caprese",     d:null, v:null, e:"🍅", p:"$8.99"},
    {n:"Ensalada Con Camarones",d:null,v:null, e:"🦐", p:"$12.99"},
  ]},
  { id:5,  lec:"Lección 5",  nom:"Las Pastas",             platos:[
    {n:"La Campesina De Abuela",       d:"Pasta al estilo campesino",  v:null,                    e:"🍝", p:"$10.99"},
    {n:"Pasta Con Camarones",           d:null,                         v:"Salsa roja o blanca",   e:"🦐", p:"$12.99"},
    {n:"Pasta Mixta Pollo Con Bacon",   d:null,                         v:"Salsa roja o blanca",   e:"🍝", p:"$11.99"},
    {n:"Boloñesa De Abuela",           d:null,                         v:"Salsa roja o blanca",   e:"🍝", p:"$10.99"},
    {n:"Pasta Con Pechuga De Pollo",   d:null,                         v:"Alfredo",               e:"🍗", p:"$11.99"},
    {n:"Pasta Con Bacon",               d:null,                         v:"Carbonara",             e:"🥓", p:"$11.99"},
    {n:"Pasta Con Chuleta",             d:null,                         v:"Salsa roja o blanca",   e:"🥩", p:"$12.99"},
    {n:"Tradicional En Salsa Pomodoro", d:null,                         v:null,                    e:"🍅", p:"$9.99"},
  ]},
  { id:6,  lec:"Lección 8",  nom:"Los Mofongos",           platos:[
    {n:"Mofonguitos De Abuela",         d:"Triada para compartir",                        v:null,                              e:"🍌", p:"$11.99"},
    {n:"Mofongo De Abuela",             d:null,                                            v:null,                              e:"🍌", p:"$9.99"},
    {n:"Mofongo Con Pechuga A La Crema",d:null,                                            v:null,                              e:"🍗", p:"$11.99"},
    {n:"Mofongo Con Pechuga Al Ajillo", d:null,                                            v:null,                              e:"🍗", p:"$11.99"},
    {n:"Mofongo Con Chuleta",           d:null,                                            v:"A la crema o solo frita",         e:"🥩", p:"$12.99"},
    {n:"Mofongo Bañado En Queso",       d:null,                                            v:null,                              e:"🧀", p:"$10.99"},
    {n:"Mofongo Con Bacon",             d:null,                                            v:"A la crema, al queso o frito",    e:"🥓", p:"$11.99"},
    {n:"Mofongo Con Camarones",         d:null,                                            v:"A la crema, al ajillo o criolla", e:"🦐", p:"$13.99"},
    {n:"Mofongo Con Chivo De Abuela",   d:null,                                            v:"A la crema, al ajillo o criolla", e:"🐐", p:"$12.99"},
  ]},
  { id:7,  lec:"Lección 9",  nom:"Las Chanclas",           platos:[
    {n:"Chancla De Abuela De Pollo",            d:"Patacón majao", v:null, e:"🥪", p:"$9.99"},
    {n:"Chancla De Abuela De Res",              d:"Patacón majao", v:null, e:"🥪", p:"$10.99"},
    {n:"Chancla Mixta Res Y Pollo",             d:"Patacón majao", v:null, e:"🥪", p:"$10.99"},
    {n:"Chancla Mixta Pollo Y Bacon",           d:"Patacón majao", v:null, e:"🥓", p:"$10.99"},
    {n:"Chancla Mixta Res Y Bacon",             d:"Patacón majao", v:null, e:"🥓", p:"$11.99"},
  ]},
  { id:8,  lec:"Lección 10", nom:"Las Quesadillas",        platos:[
    {n:"Nachos Para Tres",           d:null,                                        v:null, e:"🌽", p:"$12.99"},
    {n:"Quesadilla Solo Queso",      d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🧀", p:"$8.99"},
    {n:"Quesadilla Con Pollo",       d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🍗", p:"$9.99"},
    {n:"Quesadilla Con Res",         d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🥩", p:"$10.99"},
    {n:"Quesadilla Mixta Res Y Pollo",d:"Mozzarella y cheddar con pico de gallo",  v:null, e:"🌮", p:"$11.99"},
    {n:"Quesadilla Con Camarones",   d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🦐", p:"$12.99"},
    {n:"Quesibirria De Chivo",       d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🐐", p:"$11.99"},
    {n:"Quesibirria De Cerdo",       d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🐷", p:"$10.99"},
    {n:"Quesibirria De Res",         d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🥩", p:"$11.99"},
    {n:"Quesimixta De Birrias",      d:"Mozzarella y cheddar con pico de gallo",    v:null, e:"🌮", p:"$12.99"},
  ]},
  { id:9,  lec:"Lección 12", nom:"Los Tablones De Abuela", platos:[
    {n:"Tablón Para 2 Personas", d:"Alitas, carnita, pechuga, tostones, papas, salsas variadas",                   v:null, e:"🍽️", p:"$24.99"},
    {n:"Tablón Para 3 Personas", d:"Alitas, carnita, longaniza, pechuga, tostones, papas, batata o yuca, salsas", v:null, e:"🍽️", p:"$34.99"},
    {n:"Tablón Para 5 Personas", d:"Alitas, carnita, longaniza, chuleta, pechuga, tostones, papas, yuca, batata, salsas", v:null, e:"🍽️", p:"$54.99"},
  ]},
  { id:10, lec:"Lección 13", nom:"Los Sándwiches",         platos:[
    {n:"Club Sandwich",                 d:null, v:null, e:"🥪", p:"$9.99"},
    {n:"Sándwich Con Pollo Y Bacon",    d:null, v:null, e:"🥓", p:"$8.99"},
    {n:"Sándwich Huevo, Queso Y Tocino",d:null, v:null, e:"🍳", p:"$7.99"},
    {n:"Sándwich Con Atún",             d:null, v:null, e:"🐟", p:"$8.99"},
    {n:"Sándwich De Pollo Y Queso",     d:null, v:null, e:"🍗", p:"$8.99"},
    {n:"Sándwich Con Salami Y Queso",   d:null, v:null, e:"🧀", p:"$7.99"},
    {n:"Sándwich Derretido De Queso",   d:null, v:null, e:"🧀", p:"$6.99"},
    {n:"Pan Dominicano (Con Salami)",   d:null, v:null, e:"🍞", p:"$5.99"},
    {n:"Pan Con Aguacate",              d:null, v:null, e:"🥑", p:"$6.99"},
    {n:"Pan Con Huevo Frito",           d:null, v:null, e:"🍳", p:"$5.99"},
    {n:"Pan Con Chocolate",             d:null, v:null, e:"🍫", p:"$4.99"},
  ]},
  { id:11, lec:null,         nom:"Los Mariscos Y Pescados",platos:[
    {n:"Filete De Mero",                   d:null, v:"Criolla, empanizado, ajillo, plancha, coco o vapor",  e:"🐟", p:"$15.99"},
    {n:"Filete De Tilapia",                d:null, v:"Criolla, empanizado, frito, ajillo, plancha o vapor", e:"🐠", p:"$14.99"},
    {n:"Tilapia Entera",                   d:null, v:"Guiso, ajillo, criolla, coco, plancha o vapor",      e:"🐡", p:"$16.99"},
    {n:"Camarones",                        d:null, v:"Ajillo, crema, criolla, vinagreta, plancha o coco",   e:"🦐", p:"$17.99"},
    {n:"El Salmón De Abuela",              d:null, v:"Al ajillo, plancha, coco o vapor",                    e:"🐙", p:"$18.99"},
    {n:"Dúo Del Mar (Mero Con Camarones)", d:null, v:"Ajillo, criolla, plancha, coco o vapor",              e:"🦞", p:"$19.99"},
  ]},
  { id:12, lec:null,         nom:"Las Carnes",             platos:[
    {n:"Las Alitas De Abuela",                        d:"10 unidades para compartir", v:"BBQ, buffalo o fritas",     e:"🍗", p:"$12.99"},
    {n:"Chivo Guisado De Abuela",                     d:null,                         v:null,                         e:"🐐", p:"$15.99"},
    {n:"Guinea Criolla Guisada",                      d:null,                         v:null,                         e:"🍗", p:"$13.99"},
    {n:"Rabo Encendío De Abuela",                     d:null,                         v:null,                         e:"🥩", p:"$14.99"},
    {n:"Bacon A La Plancha",                          d:null,                         v:null,                         e:"🥓", p:"$7.99"},
    {n:"Pechuga En Salsa De Hongos",                  d:null,                         v:null,                         e:"🍄", p:"$12.99"},
    {n:"Pechuga En Salsa De Queso",                   d:null,                         v:null,                         e:"🧀", p:"$12.99"},
    {n:"Pechuga A La Crema",                          d:null,                         v:null,                         e:"🍗", p:"$11.99"},
    {n:"Pechuga A La Plancha",                        d:null,                         v:null,                         e:"🍗", p:"$10.99"},
    {n:"Pechuga A La Plancha Con Vegetales",          d:null,                         v:null,                         e:"🥦", p:"$11.99"},
    {n:"Pechuga Frita",                               d:null,                         v:null,                         e:"🍗", p:"$10.99"},
    {n:"Pechuga Empanizada",                          d:null,                         v:null,                         e:"🍗", p:"$11.99"},
    {n:"Alitas",                                      d:null,                         v:"Buffalo, BBQ o fritas",      e:"🍗", p:"$10.99"},
    {n:"Pechurinas De Abuela",                        d:null,                         v:null,                         e:"🍗", p:"$9.99"},
    {n:"Carnitas De Cerdo Frita",                     d:null,                         v:null,                         e:"🥩", p:"$12.99"},
    {n:"Longaniza Criolla Frita",                     d:null,                         v:null,                         e:"🌭", p:"$8.99"},
    {n:"Chuleta",                                     d:null,                         v:"Buffalo, BBQ o frita",       e:"🥩", p:"$13.99"},
  ]},
  { id:13, lec:null,         nom:"Los Tacos — Triadas",   platos:[
    {n:"Triada Con Pollo",             d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$9.99"},
    {n:"Triada Con Huevos Revueltos",  d:"Con o sin vegetales, pico de gallo y guacamole",  v:null, e:"🍳", p:"$8.99"},
    {n:"Triada Con Res",               d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$10.99"},
    {n:"Triada Mixto Pollo Y Res",     d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$10.99"},
    {n:"Triada Birria De Res",         d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$11.99"},
    {n:"Triada Birria De Cerdo",       d:"Pico de gallo y guacamole",                       v:null, e:"🐷", p:"$10.99"},
    {n:"Triada Birria De Chivo",       d:"Pico de gallo y guacamole",                       v:null, e:"🐐", p:"$11.99"},
    {n:"Triada Con Camarones",         d:"Pico de gallo y guacamole",                       v:null, e:"🦐", p:"$12.99"},
    {n:"Triada Mixta De Birrias",      d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$12.99"},
  ]},
  { id:14, lec:null,         nom:"Los Tacos — Dúos",      platos:[
    {n:"Dúo Con Pollo",               d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$6.99"},
    {n:"Dúo Con Huevos Revueltos",    d:"Con o sin vegetales, pico de gallo y guacamole",  v:null, e:"🍳", p:"$5.99"},
    {n:"Dúo Con Res",                 d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$7.99"},
    {n:"Dúo Mixto Pollo Y Res",       d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$7.99"},
    {n:"Dúo Birria De Res",           d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$8.99"},
    {n:"Dúo Birria De Cerdo",         d:"Pico de gallo y guacamole",                       v:null, e:"🐷", p:"$7.99"},
    {n:"Dúo Birria De Chivo",         d:"Pico de gallo y guacamole",                       v:null, e:"🐐", p:"$8.99"},
    {n:"Dúo Con Camarones",           d:"Pico de gallo y guacamole",                       v:null, e:"🦐", p:"$9.99"},
    {n:"Dúo Mixta De Birrias",        d:"Pico de gallo y guacamole",                       v:null, e:"🌮", p:"$8.99"},
  ]},
  { id:15, lec:null,         nom:"Otros",                  platos:[
    {n:"Los Tacos De Abuela", d:"Tres triadas para compartir con pico de gallo y guacamole", v:null, e:"🌮", p:"$21.99"},
  ]},
];

document.addEventListener('DOMContentLoaded', function () {

  /* ── Marquee ── */
  const marqueeItems = ["Sabor Dominicano","Cocina de Abuela","San Juan de la Maguana","Tradición","Familia","Amor en Cada Bocado","Recetas Auténticas","Desde el Corazón"];
  const track = document.getElementById('marquee-track');
  if (track) {
    const full = [...marqueeItems, ...marqueeItems].map(t => `<span class="marquee-item">${t}</span>`).join('');
    track.innerHTML = full + full;
  }

  /* ── Menu rendering ── */
  let activeCat = 'all';

  function buildTabs() {
    const bar = document.getElementById('cat-bar');
    if (!bar) return;
    bar.appendChild(mkBtn('Todos', 'all', true));
    MENU.forEach(c => {
      const label = c.lec ? c.lec : c.nom;
      bar.appendChild(mkBtn(label, c.id, false));
    });
  }

  function mkBtn(label, id, active) {
    const b = document.createElement('button');
    b.className = 'cat-btn' + (active ? ' on' : '');
    b.textContent = label;
    b.dataset.id = id;
    b.addEventListener('click', () => filterCat(id));
    return b;
  }

  function filterCat(id) {
    activeCat = id;
    document.querySelectorAll('.cat-btn').forEach(b => {
      b.classList.toggle('on', b.dataset.id == id);
    });
    renderDishes();
  }

  function renderDishes() {
    const grid = document.getElementById('dishes-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const cats = activeCat === 'all' ? MENU : MENU.filter(c => c.id == activeCat);

    cats.forEach(cat => {
      if (activeCat === 'all') {
        const h = document.createElement('div');
        h.className = 'menu-cat-header';
        h.innerHTML = (cat.lec ? `<span class="lec-badge">${cat.lec}</span>` : '') + cat.nom;
        grid.appendChild(h);
      }
      cat.platos.forEach(p => {
        const card = document.createElement('article');
        card.className = 'dish-card';
        const hasImg = !!p.img;
        card.innerHTML = `
          <div class="dish-thumb">
            ${hasImg
              ? `<img src="${p.img}" alt="${p.n}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\"dish-emoji-ph\\">${p.e}</div>'">`
              : `<div class="dish-emoji-ph">${p.e}</div>`}
          </div>
          <div class="dish-body">
            <h3>${p.n}</h3>
            ${p.d ? `<p>${p.d}</p>` : ''}
            ${p.v ? `<div class="dish-variants">↳ ${p.v}</div>` : ''}
            <div class="dish-price">${p.p || 'Consultar precio'}</div>
          </div>`;
        grid.appendChild(card);
      });
    });
  }

  buildTabs();
  renderDishes();

  /* ── Navbar scroll ── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── Mobile menu toggle ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
    document.querySelectorAll('.mobile-menu a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }

  /* ── Smooth scroll ── */
  document.querySelectorAll('[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* ── Theme ── */
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
      themeBtn.textContent = '☀️';
    }
    themeBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      themeBtn.textContent = isDark ? '☀️' : '🌙';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  /* ── Reveal on scroll ── */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* ── Hero parallax ── */
  const heroBg = document.querySelector('.hero-bg');
  const hero   = document.querySelector('.hero');
  if (hero) hero.classList.add('loaded');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight) {
        heroBg.style.transform = `scale(1) translateY(${window.scrollY * 0.25}px)`;
      }
    }, { passive: true });
  }

  /* ── Hero scroll-to helper (used by inline onclick in HTML) ── */
  window.scrollTo = function (sel) {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

});
