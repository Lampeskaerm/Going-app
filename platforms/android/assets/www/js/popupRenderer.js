function popupRenderer(opt){
	var container = $(".popupView");
	var opt = opt + "Renderer";

	container[opt]();

	container.show();
}