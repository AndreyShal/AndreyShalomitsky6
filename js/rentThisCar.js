function init() {
    let map = new ymaps.Map('map-test', {
        center: [41.37727452558995, -72.8634395],
        zoom: 15
    });

    return map;
}

ymaps.ready(init);
// iconImageHref: '../img/map/label.svg',