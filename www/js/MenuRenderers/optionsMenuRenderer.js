function optionsMenuRenderer() {
	var container = $(".optionsMenuContainer");

	container.html(renderOptionsMenu);
	optionsMenuEvents(container);	
}

function optionsMenuEvents(container){
	$("body").find(".loginTap").click(function () {
		popupRenderer("login");
	});
	$("body").find(".signupTap").click(function () {
		popupRenderer("signup");
	});
}

function renderOptionsMenu(){
	var html = 	'<div class="optionsMenu">' +
					'<div class="optionsMenuTap loginTap">' +
						'<div class="tapText"> Login </div>' +
					'</div>' +
					'<div class="optionsMenuTap signupTap">' +
						'<div class="tapText"> Sign Up </div>' +
					'</div>' +
				'</div>';

	return html;
}