function updateHeader(opt) {
	var result = $(".mainHeader");

	topMenuRenderer(opt);

	switch (opt) {
		case "restaurantFrontPage": 
			result.html("<div class='headerText'>Going Eating</div>");
			break;
		default:
	}
}