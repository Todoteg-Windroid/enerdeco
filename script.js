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
                delay: 5000,
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

            // Eventos
            on: {
                slideChange: function () {
                    // Reiniciar animación de la barra de progreso
                    const progressBar = document.querySelector('.progress-indicator');
                    progressBar.style.animation = 'none';
                    setTimeout(() => {
                        progressBar.style.animation = 'progressBar 5s linear infinite';
                    }, 10);
                }
            }
        });

        // Pausar autoplay cuando el usuario interactúa
        const sliderContainer = document.querySelector('.modern-slider');
        
        sliderContainer.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });

        sliderContainer.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });

        // Smooth scroll para los enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });