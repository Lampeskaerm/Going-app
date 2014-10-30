function updateView(opt){
	var container = $(".mainPage");
	var opt1 = opt + "Renderer";
	Globals.currentSection = opt;
	hidePopup();

	container[opt1]();

	if(opt.search("FrontPage") != (-1)) {
		updateHeader(opt);
	}
}

