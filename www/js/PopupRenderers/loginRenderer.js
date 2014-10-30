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
			if(checkValidation($("#username"), $("#password"))){
				tryLogin($("#username").val(), $("#password").val());
			}
		});
	}

	
	function tryLogin(username, password){
		var dataForPost = {type: "get", username: username, password: password};

		var successFunction = function(result) {
			Globals.loginStatus = result.status;
			Globals.user = result.user;

			updateView(Globals.currentSection);
		}

		var errorFunction = function(xhr, status, error){
			//Error
		}

		doAjaxCall("login.php",dataForPost,successFunction,errorFunction);
	}

	function renderLogin (){
		var html = '<div class="loginContainer">' + 
						'<div class="username">' + 
							'<form>' +
								'<label>Username: </label>' +
								'<input type="text" id="username" class="textField">' +
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
							'<div class="loginButton">Login</div>' +
							'<div class="cancelButton">Cancel</div>' +
						'</div>' +
					'</div>';
		return html;
	}
})(jQuery);