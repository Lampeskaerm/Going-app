function googleMap(){

	var map = showMap();
	addMarkersToMap(map);
}

var showMap = function(){
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(55.78540,12.52138),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);

	return map;
}

function addMarkersToMap(map) {
	
	for(var i in Globals.test.restaurants){
		var restaurant = Globals.test.restaurants[i];
		var markerPos = new google.maps.LatLng(restaurant["lat"],restaurant["lng"]);
		var marker = new google.maps.Marker({
			position: markerPos,
			map: map,
			title: restaurant["name"]
		});

		handleMarkerClick(marker, restaurant, i);
	}
}

function handleMarkerClick(marker, restaurant, i){

	var infowindow = new google.maps.InfoWindow({
		content: restaurant["description"]
	});
	
	google.maps.event.addListener(marker,'click', function(){
		infowindow.open(marker.get('map'),marker);
	});
}