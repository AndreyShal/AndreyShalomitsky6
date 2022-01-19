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