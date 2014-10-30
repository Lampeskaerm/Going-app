function popupRenderer(opt){
	var container = $(".popupView");

	switch(opt) {
		case "login":
			container.loginRenderer();
			break;
		case "signup":
			container.signupRenderer();
			break;
		default:
	}

	container.show();
}