/* ..........................................SWIPER СЛАЙДЕР НАЧАЛО........................ */
var swiper1 = new Swiper('.swiper1', {

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
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
document.getElementById("sweeties1").addEventListener('click', () => toggleMe3(document.querySelector(".menu__wrapper")));
document.getElementById("sweeties2").addEventListener('click', () => toggleMe3(document.querySelector(".menu__wrapper")));

function toggleMe3(x) {
    if (!x) return true;
    if (x.style.display === "none" || x.style.display === "") {
        document.querySelector('.menu__wrapper').classList.toggle('menu__hidden');
    }
    return true;
}

/////////////////////////////////////////////////////////////////////////////////////
InitApp(); //Инициализировать приложение

window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

function InitApp() //Растягиваем холст на весь экран
{
    document.querySelector(".menu__wrapper").width = window.innerWidth;
    document.querySelector(".menu__wrapper").height = window.innerHeight;
    document.querySelector(".wrapper").width = window.innerWidth;
    document.querySelector(".wrapper").height = window.innerHeight;
}
// ...................................................................................
// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);

const logBlock = document.querySelector('.class-car');
document.querySelector('.class-car').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.class-car').addEventListener('touchmove', handleTouchMove, false);


let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    // console.log(x1, y1);
}

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    // console.log(x2, y2);
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // r - l
        if (xDiff > 0) {
            console.log('right');
            document.querySelector('.menu__wrapper').classList.toggle('menu__hidden');
        }
        else console.log('left');
    }
    else {
        // t - b
        if (yDiff > 0) console.log('down');
        else console.log('top');
    }
    x1 = null;
    y1 = null;
}