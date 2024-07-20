// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Swiper para el primer slider en el header
    var swiper1 = new Swiper('.mySwiper-1', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Inicializar Swiper para los sliders de productos
    var swipers = [];
    var productSliders = document.querySelectorAll('.mySwiper-2');
    productSliders.forEach(function(swiperElement) {
        swipers.push(new Swiper(swiperElement, {
            loop: true,
            navigation: {
                nextEl: swiperElement.querySelector('.swiper-button-next'),
                prevEl: swiperElement.querySelector('.swiper-button-prev'),
            },
        }));
    });

    // Funcionalidad para cambiar entre pestañas
    var tabs = document.querySelectorAll('.tabInput');
    tabs.forEach(function(tab) {
        tab.addEventListener('change', function() {
            var selectedTab = this.value;
            var tabContent = document.querySelectorAll('.tab');
            tabContent.forEach(function(content, index) {
                content.style.display = (index + 1 == selectedTab) ? 'block' : 'none';
            });
        });
    });
});