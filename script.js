const swiper = new Swiper('.swiper', {
    // Configuración básica
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // Autoplay
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    // Paginación
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Teclado
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    // Touch
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    },
});

// Smooth scroll para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        console.log(target);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* fetch('https://cors-anywhere.herokuapp.com/https://api.apitube.io/v1/news/everything?language.code=es&topic.id=industry.commodities.upstream_oil_and_gas&per_page=10'
, {
    headers: { 'X-API-Key': 'API_KEY', 'Accept': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
    const html = data.results.map(a => `
        <div class="noticia">
        <h3><a href="${a.url}" target="_blank">${a.title}</a></h3>
        <p>${a.description}</p>
        <img src="${a.image}" alt="">
        <time>${new Date(a.published_at).toLocaleString('es-ES')}</time>
        </div>
    `).join('');
    console.log(html);
    document.getElementById('news-section').innerHTML = html;
    });
 */
