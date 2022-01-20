var countriesSelect = document.querySelector('#countries-select');
var citiesSelect = document.querySelector('#cities-select');

var data = {
    USA: ['Utica', 'New York', 'Los Angeles'],
    Russia: ['Moscow', 'Saint Petersburg', 'Voronezh'],
    Belarus: ['Munsk', 'Vitebsk', 'Orsha'],
    Ukrainian: ['Kiev', 'Lions', 'Odessa'],
}

var countries = Object.keys(data);
addOptions(countriesSelect, countries);

var defaultCities = data[countries[0]];
addOptions(citiesSelect, defaultCities);

countriesSelect.addEventListener('change', function () {
    var cities = data[this.value];
    citiesSelect.length = 0;

    addOptions(citiesSelect, cities);
});

function addOptions(select, arr) {
    for (var i = 0; i < arr.length; i++) {
        select.add(new Option(arr[i]));
    }
}