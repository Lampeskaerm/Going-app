function topMenuRenderer(page) {
	var container = $(".mainMenu");

		container.html(renderTopMenu(page));
		topMenuEvents(container);
}

function topMenuEvents(container) {
	$("body").find(".optionsTap").click(function(){
		var div = $(".optionsMenu");
		if(div.is(":visible"))
			div.hide();
		else
			div.show();
	});
}

function renderTopMenu(page) {
	var html = '';
	switch(page){
		case "restaurantFrontPage":
			html +=	'<div class="slider">' +
						'<div class="sliderTap">Restaurants</div>'+
						'<div class="optionsTap">Opts</div>' +
					'</div>';
			break;
		default:
	}

	return html;
}