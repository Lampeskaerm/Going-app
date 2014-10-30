function updateView(opt){
	var result = $(".mainPage");
	Globals.currentSection = opt;
	hidePopup();

	switch (opt) {
		case "restaurantFrontPage":
			result.restaurantFrontPageRenderer();
			break;
		default:
	}

	if(opt.search("FrontPage") != (-1)) {
		updateHeader(opt);
	}
}

function updateHeader(opt) {
	var result = $(".mainHeader");

	topMenuRenderer(opt);

	switch (opt) {
		case "restaurantFrontPage": 
			result.html("Going Eating");
			break;
		default:
	}
}

