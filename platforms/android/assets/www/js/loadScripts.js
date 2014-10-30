function loadScripts() {
	//Pages scripts
	js("js/PageRenderers/frontPageRenderer.js");

	//Utility scripts
	js("js/updateView.js");

	updateView("frontPage");
	console.log("Scripts loaded");
}

function js(url) {
	s = document.createElement("script");
	s.type = "text/javascript";
	s.src = url;
	console.log(document.getElementsByTagName("head"));
	document.getElementsByTagName("head")[0].appendChild(s);
}
