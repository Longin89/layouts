//YandexMaps on main
    function init(){
        const map = new ymaps.Map("map", {
            center: [53.64865063717227,55.939788059524524],
            zoom: 15
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

//import * as bootstrap from 'bootstrap';
