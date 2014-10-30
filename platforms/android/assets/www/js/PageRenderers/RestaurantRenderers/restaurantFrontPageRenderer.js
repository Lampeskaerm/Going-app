(function ($) {

	$.fn.restaurantFrontPageRenderer = function () {
		var resultsContainer = $(this);

		LoadData(resultsContainer);
		return this;
	}

	function frontPageEvents(resultsContainer){
		
	}
	
	function LoadData(resultsContainer){

		var dataForPost = {type: "get"};

		var successFunction = function(result) {
			Globals.test.restaurants = result;

			resultsContainer.html(renderFrontPage);
			frontPageEvents(resultsContainer);

			googleMap();
		}

		var errorFunction = function(xhr, status, error) {
			resultsContainer.html("Fejl :(");
		}

		doAjaxCall("restaurants.php", dataForPost, successFunction, errorFunction);
	}

	function renderFrontPage(){
		var html =	'<div class="frontPage">' +
						'<div class="newsHolder">' +
							'<div> Nyheder! </div>' +
						'</div>' +
					'</div>';

		return html;
	}
})(jQuery);