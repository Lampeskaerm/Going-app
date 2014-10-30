(function ($) {

	$.fn.signupRenderer = function() {
		var resultsContainer = $(this);

		resultsContainer.html(renderSignup);
		signupEvents(resultsContainer);

		return this;
	}

	function signupEvents(resultsContainer){
		$("body").find(".cancelButton").click(function(){
			hidePopup();
		});

		$("body").find(".signupButton").click(function(){
			clearErrorText();
			if(checkValidation($("#username"), $("#password"))){
				signUp($("#username").val(), $("#password").val());
			}
		});
	}

	function signUp(username, password){

		var dataForPost = {type: "post", username: username, password: password};

		var successFunction = function(result) {
			updateView(Globals.currentSection);
		}

		var errorFunction = function(xhr, status, error){
			//Error
		}

		doAjaxCall("signup.php",dataForPost,successFunction,errorFunction);

	}

	function renderSignup(){
		var html = '<div class="signupContainer">' + 
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
							'<div class="signupButton">Sign Up</div>' +
							'<div class="cancelButton">Cancel</div>' +
						'</div>' +
					'</div>';
		return html;
	}

})(jQuery);