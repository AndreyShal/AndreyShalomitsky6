// function init() {
//     let map = new ymaps.Map('map-test', {
//         center: [41.37727452558995, -72.8634395],
//         zoom: 15
//     });

//     return map;
// }
// ymaps.ready(init);
// iconImageHref: '/img/map/label.svg',


ymaps.ready(function () {
    var myMap = new ymaps.Map('map-test', {
        center: [41.37727452558995, -72.8634395],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/map/label.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([41.37727452558995, -72.8634395], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '/img/map/label.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
    // .add(myPlacemarkWithContent);
});
