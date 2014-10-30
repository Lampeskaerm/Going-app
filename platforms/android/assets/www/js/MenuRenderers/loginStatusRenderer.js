(function ($) {

	$.fn.loginStatusRenderer = function() {
		var resultsContainer = $(this);

		resultsContainer.html(renderLoginStatus);
		loginStatusEvents();

		return this;
	}

	function loginStatusEvents(){
		 $(".loginStatusView").find(".name").click(function(){
		 	updateView("userpage");
		 });
	}

	function renderLoginStatus(){
		var html = "<div class='name'><b> " + Globals.user["firstname"] + "</b>!</div>" +
					"<div class='text'> Welcome, </div>";

		return html;
	}

})(jQuery);