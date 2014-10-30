(function ($) {

	$.fn.userpageRenderer = function() {
		var resultsContainer = $(this);

		LoadData(resultsContainer);
		userpageEvents(resultsContainer);

		return this;
	}

	function userpageEvents(resultsContainer){
		resultsContainer.find(".button").click(function(){
			if(isDecimal($('#lat').val()) && isDecimal($('#lng').val())){
				var name = $('#name').val();
				var lat = $('#lat').val();
				var lng = $('#lng').val();
				var address = $('#address').val();
				var desc = $('#desc').val();
				var data = {name:name, lat:lat, lng:lng, address:address, desc:desc};

				reloadData(resultsContainer, data);
			}
		});
	}

	function reloadData(resultsContainer, data){
		//var jsonData = JSON.stringify(data);
		var dataForPost = {type: "post", data: data};

		var successFunction = function(result) {
			Globals.test.restaurants = result;

			resultsContainer.html(renderUserpage);
			userpageEvents(resultsContainer);

			googleMap();
		}

		var errorFunction = function(result) {
			//Error message
		}

		doAjaxCall("restaurants.php", dataForPost, successFunction, errorFunction);
	}

	function LoadData(resultsContainer){
		resultsContainer.html(renderUserpage);
		userpageEvents(resultsContainer);
		
		if(Globals.user.status == "trusted"){
			googleMap();
		}
	}

	function renderUserpage(){
		var user = Globals.user;
		var birthday = getBirthdayObject(user.birthday);
		var age = getAge(birthday);

		var html = '<div class="userpageContainer">' +
						'<div class="infoHolder">' +
							'<div class="picHolder row"></div>' +
							'<div class="name row">Navn: ' + user.firstname + ' ' + user.lastname + '</div>' +
							'<div class="username row">Brugernavn: ' + user.username + '</div>' +
							'<div class="age row">Alder: ' + age + '</div>' +
							'<div class="status row">Your user status: ' + user.status + '</div>' +
							'<div class="userID row">User ID: ' + user.id + '</div>' +
						'</div>';

					if(user.status == "trusted"){
			html +=		'<div class="mapContainer">' +
							'<div id="mapCanvas" class="mapCanvas"></div>' +
							'<div class="formHolder">' +
								'<form>' +
									'<label for="name" class="textField label">Restaurant name: </label>' +
									'<input type="text" id="name" class="textField">' +
								'</form>' +
								'<form>' +
									'<label for="lat" class="textField label">Latitude: </label>' +
									'<input type="text" id="lat" class="textField">' +
								'</form>' +
								'<form>' +
									'<label for="lng" class="textField label"> Longitude: </label>' +
									'<input type="text" id="lng" class="textField">' +
								'</form>' +
								'<form>' +
									'<label for="address" class="textField label"> Address: </label>' +
									'<input type="text" id="address" class="textField">' +
								'</form>' +
								'<form>' +
									'<label for="desc" class="textField label">Description: </label>' +
									'<input type="text" id="desc" class="textField">' +
								'</form>' +
							'</div>' +
							'<div class="button">' +
								'<div class="buttonText">Add to map</div>' +
							'</div>' +
						'</div>';
					}

		return html;
	}

})(jQuery);