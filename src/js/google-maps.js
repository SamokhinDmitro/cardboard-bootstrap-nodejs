var map;

function initMap() {

    var uluru = {lat: 48.489829, lng: 35.142450}
    map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: uluru,
        title: 'Добрый картон',
        icon: '../img/contacts/maps-icon.png',
        map: map
    });
}

