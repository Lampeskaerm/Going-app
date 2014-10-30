function updateHeader(opt) {
	var result = $(".mainHeader");
	var loginContainer = $(".loginStatusView");

	topMenuRenderer(opt);

	switch (opt) {
		case "restaurantFrontPage": 
			result.html("<div class='headerText'>Going Eating</div>");
			break;
		default:
	}

	if(Globals.loggedIn){
		loginContainer.loginStatusRenderer();
	} else {
		loginContainer.html("You are not logged in");
	}
}