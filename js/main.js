console.log("asd");
(function (window) {

    var locations = [{
        nombre: 'Hospital Ciudad de Centenario',
        direccion: 'Av. del Libertador 700, 8309 Centenario, Neuquén',
        telefono: '0299 489-8862',
        location: {
            lat: -38.82152,
            lng: -68.13699
        }
    },
    {
        nombre: 'Hospital Heller',
        direccion: 'Cnel. Godoy E. 1549-1615',
        telefono: '0299 422-6532',
        location: {
            lat: -38.9379,
            lng: -68.1171
        }
    },
    {
        nombre: 'Hospital Bouquet Roldán',
        direccion: 'Dr. Teodoro Luis Planas 1555, Neuquén',
        telefono: '0299 443-8181',
        location: {
            lat: -38.95074,
            lng: -68.07033
        }
    },
    {
        nombre: 'Hospital Provincial Neuquen "Dr. Castro Rendon"',
        direccion: 'Buenos Aires 450, 8300 Neuquén',
        telefono: '0299 449-0800',
        location: {
            lat: -38.95029,
            lng: -68.05686
        }
    }
    ];

    var infowindow;
    var map;

    function htmlFormater(data) {
        var html = '<div>';
        html += data.nombre + '<br>';
        html += data.direccion + '<br>';
        html += data.telefono + '<br>';
        html += '</div>';
        return html;
    }
    function createMarker(data) {
        var marker = new google.maps.Marker({
            position: data.location
        });
        marker.addListener('click', function () {
            if (infowindow) {
                infowindow.close();
            }
            infowindow = new google.maps.InfoWindow({
                content: htmlFormater(data)
            });
            infowindow.open(map, marker);
        });


        return marker;
    }

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {
                lat: -38.896849552835874,
                lng: -68.03255473364254
            }
        });

        var markers = [];
        for (var i = 0; i < locations.length; i++) {
            var m = createMarker(locations[i]);
            markers.push(m);
        }

        var markerCluster = new MarkerClusterer(map, markers, {
            imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
        });
    }
    window.initMap = initMap;
})(window);
