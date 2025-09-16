var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************************!*\
  !*** ./dev/js/components/_vars.js ***!
  \************************************/

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************************!*\
  !*** ./dev/js/components/_functions.js ***!
  \*****************************************/
//YandexMaps on main
var map = document.getElementById("map");
if(map) {
    function init(){
        const map = new ymaps.Map("map", {
            center: [53.64865063717227,55.939788059524524],
            zoom: 16
        });

        const placemark = new ymaps.Placemark([53.64865063717227,55.939788059524524], {}, {
        });

        map.controls.remove("geolocationControl");
        map.controls.remove("searchControl");
        map.controls.remove("trafficControl");
        map.controls.remove("typeSelector");
        map.controls.remove("fullscreenControl");
        map.controls.remove("zoomControl");
        map.controls.remove("rulerControl");
        map.geoObjects.add(placemark);
    }
    ymaps.ready(init);
}

const currentLocation = location.href;
const headerMenuItem = document.querySelectorAll(".header__nav-link");
const headerBurgerItem = document.querySelectorAll(".header__burger-link");
const footerMenuItem = document.querySelectorAll(".footer__item-link");
const menuLenght = headerMenuItem.length;
for (let i = 0; i<menuLenght; i++) {
    if (headerMenuItem[i].href === currentLocation) {
        headerMenuItem[i].className = "active header__nav-link";
        headerBurgerItem[i].className = "active header__burger-link";
        footerMenuItem[i].className = "active header__nav-link";
    }
}

const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");

function toggleBurger() {
  burgerButton.classList.toggle("active");
  burgerMenu.classList.toggle("active");
}

window.addEventListener("resize", (function() {
    if(window.innerWidth > 1024 && burgerButton.classList.contains("active")) {
        burgerButton.classList.remove("active");
        burgerMenu.classList.remove("active");
    }
}
));

burgerButton.addEventListener("click", toggleBurger);
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!***********************************!*\
  !*** ./dev/js/components/main.js ***!
  \***********************************/

})();


//# sourceMappingURL=main.bundle.js.map