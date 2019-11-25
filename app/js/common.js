$(function() {

	// Custom JS
	var map;

            DG.then(function () {
                map = DG.map('map', {
                    center: [42.871877, 74.586491],
                    zoom: 13
                });

				mapicon = DG.icon({
					iconUrl: '../img/marker.svg', /* Иконка маркера */
					iconAnchor: [42.871877, 74.586491], 
					popupAnchor: [42.871877, 74.586491],
					className: 'map-icon',
					iconSize: [64, 64] /* Размер иконки */
				});          
				DG.marker([42.871877, 74.586491], {icon: mapicon}).addTo(map).bindPopup('<div class="map-popup"><h2>FamsTour</h2><br/>Авто и мото туры<br/>по лесным и горным маршрутам</div>');     /* Координаты маркера и текст попапа */
            });


});
