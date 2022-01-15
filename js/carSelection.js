
document.getElementById("sweeties1").addEventListener('click', () => toggleMe3(document.querySelector(".menu__wrapper")));
document.getElementById("sweeties2").addEventListener('click', () => toggleMe3(document.querySelector(".menu__wrapper")));

function toggleMe3(x) {
    if (!x) return true;
    if (x.style.display === "none" || x.style.display === "") {
        document.querySelector('.menu__wrapper').classList.toggle('menu__hidden');
    }
    return true;
}
// ....................................................скрыть меню после перехода по якорной ссылк Начало.......................
let scroll__botton = document.querySelectorAll(".menu-hidden-click");
for (let i = 0; i < scroll__botton.length; i++) {
    scroll__botton[i].addEventListener("click", toggleMenu);
    function toggleMenu() {
        document.querySelector('.menu__wrapper').classList.toggle('menu__hidden');
    };
}
// ....................................................скрыть меню после перехода по якорной ссылк Конец.......................
/////////////////////////////////////////////////////////////////////////////////////
// InitApp(); //Инициализировать приложение

// window.addEventListener("resize", InitApp); //При растягивании окна приложение будет инициализироваться заново

// function InitApp() //Растягиваем холст на весь экран
// {
//     document.querySelector(".menu__wrapper").width = window.innerWidth;
//     document.querySelector(".menu__wrapper").height = window.innerHeight;
//     document.querySelector(".wrapper").width = window.innerWidth;
//     document.querySelector(".wrapper").height = window.innerHeight;
// }
// ...................................................................................
document.querySelector('.pointer-swip').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.pointer-swip').addEventListener('touchmove', handleTouchMove, false);
document.querySelector('#car__detales-wrapper').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('#car__detales-wrapper').addEventListener('touchmove', handleTouchMove, false);


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
        }
        else console.log('left');
    }
    else {
        // t - b
        if (yDiff > 0) {
            console.log('down');
            document.querySelector('.car__detales-hiden').classList.add('swip-hidden');
            document.querySelector('#wrapper__container-company').classList.remove('swip-hidden');
            document.querySelector('.pointer-swip').classList.remove('swip-hidden');
            document.querySelector(".car__detales").classList.add('car__detales-height1');
            document.querySelector("#wrapper__container-class-car").classList.remove("wrapper__container-class-car");

        }
        else {
            console.log('top');
            document.querySelector('.car__detales-hiden').classList.remove('swip-hidden');
            document.querySelector('#wrapper__container-company').classList.add('swip-hidden');
            document.querySelector('.pointer-swip').classList.add('swip-hidden');
            document.querySelector(".car__detales").classList.remove('car__detales-height1');
            document.querySelector("#wrapper__container-class-car").classList.add("wrapper__container-class-car");
        }
    }
    x1 = null;
    y1 = null;
}