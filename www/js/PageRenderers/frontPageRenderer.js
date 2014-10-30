(function ($) {

	$.fn.frontPageRenderer = function () {
		var resultsContainer = $(this);

		LoadData(resultsContainer);
		return this;
	}

	function frontPageEvents(resultsContainer){
		resultsContainer.find(".button").click(function(){
			if(isDecimal($('#lat').val()) && isDecimal($('#lng').val())){
				var name = $('#name').val();
				var lat = $('#lat').val();
				var lng = $('#lng').val();
				var desc = $('#desc').val();
				var data = {name:name, lat:lat, lng:lng, desc:desc};

				reloadData(resultsContainer, data);
			}
		});
	}

	function reloadData(resultsContainer, data){
		//var jsonData = JSON.stringify(data);
		var dataForPost = {type: "post", data: data};

		var successFunction = function(result) {
			Globals.test.restaurants = result;

			resultsContainer.html(renderFrontPage);
			frontPageEvents(resultsContainer);

			googleMap();
		}

		var errorFunction = function(result) {
			//Error message
		}

		doAjaxCall("test.php", dataForPost, successFunction, errorFunction);
	}

	function LoadData(resultsContainer){

		var dataForPost = {type: "get"};

		var successFunction = function(result) {
			Globals.test.restaurants = result;

			resultsContainer.html(renderFrontPage);
			frontPageEvents(resultsContainer);
			topMenuRenderer("frontPage");

			googleMap();
		}

		var errorFunction = function(xhr, status, error) {
			//Error
		}

		doAjaxCall("test.php", dataForPost, successFunction, errorFunction);
	}

	function renderFrontPage(){
		var html =	'<div class="frontPage">' +
						'<div class="header">Going Eating</div>' +
						'<div class="menuContainer"></div>' +
						'<div class="mainInfo">' + 
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
									'<label for="desc" class="textField label">Description: </label>' +
									'<input type="text" id="desc" class="textField">' +
								'</form>' +
							'</div>' +
							'<div class="button">' +
								'<div class="buttonText">Add to map</div>' +
							'</div>' +
						'</div>'+
					'</div>';

		return html;
	}
})(jQuery);