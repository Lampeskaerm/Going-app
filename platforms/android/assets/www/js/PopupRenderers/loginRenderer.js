(function ($) {

	$.fn.loginRenderer = function() {
		var resultsContainer = $(this);

		resultsContainer.html(renderLogin);
		loginEvents(resultsContainer);

		return this;
	}

	function loginEvents(resultsContainer){
		$("body").find(".cancelButton").click(function(){
			hidePopup();
		});

		$("body").find(".loginButton").click(function(){
			clearErrorText();
			var array = [$("#email"), $("#password")]
			if(checkValidation(array)){
				tryLogin($("#email").val(), $("#password").val());
			}
		});
	}

	
	function tryLogin(email, password){
		var dataForPost = {type: "get", email: email, password: password};

		var successFunction = function(result) {
			Globals.loginStatus = result.status;
			Globals.user = result.user;

			if(Globals.loginStatus == "success") Globals.loggedIn = true;

			updateView(Globals.currentSection);
		}

		var errorFunction = function(xhr, status, error){
			//Error
		}

		doAjaxCall("login.php",dataForPost,successFunction,errorFunction);
	}

	function renderLogin (){
		var html = '<div class="loginContainer popupContainer">' + 
						'<div class="email">' + 
							'<form>' +
								'<label>email: </label>' +
								'<input type="text" id="email" class="textField">' +
							'</form>' +
							'<div class="errorText"></div>' +
						'</div>' +
						'<div class="password">' +
							'<form>' +
								'<label>Password: </label>' +
								'<input type="password" id="password" class="textField">' +
							'</form>' +
							'<div class="errorText"></div>' +
						'</div>' +
						'<div class="buttonHolder">' +
							'<div class="loginButton actionButton">Login</div>' +
							'<div class="cancelButton">Cancel</div>' +
						'</div>' +
					'</div>';
		return html;
	}
})(jQuery);