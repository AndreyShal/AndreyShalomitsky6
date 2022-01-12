/* ..........................................SWIPER СЛАЙДЕР НАЧАЛО........................ */
var swiper1 = new Swiper('.swiper1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 1378px
        1378: {
            slidesPerView: 3,
            // spaceBetween: 100
        },
    }
})
/* ..........................................SWIPER СЛАЙДЕР КОНЕЦ........................ */