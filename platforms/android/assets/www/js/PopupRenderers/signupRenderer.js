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
			var array = [$("#username"), $("#password"), $("#firstname"), $("#lastname"),$("#birthday"),$("#email")];
			if(checkValidation(array)){
				var obj = getValuesAsObject(array);
				obj["birthday"] = getCorrectDateFormat(obj["birthday"]);
				Globals.temporarySave = obj["email"];
				signUp(obj);
			}
		});
	}

	function signUp(obj){

		var dataForPost = {type: "post", data:obj};

		var successFunction = function(result) {
			if(result == "success"){
				popupRenderer("verification");
			} else {
				clearTemporarySave();
				$(".email").find(".errorText").html("Email already in use.");
			}
		}

		var errorFunction = function(xhr, status, error){
			//Error
		}

		doAjaxCall("signup.php",dataForPost,successFunction,errorFunction);

	}

	function renderSignup(){
		var html = '<div class="signupContainer popupContainer">' + 
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
						'<div class="firstname">' + 
							'<form>' +
								'<label>First name: </label>' +
								'<input type="text" id="firstname" class="textField">' +
							'</form>' +
							'<div class="errorText"></div>' +
						'</div>' +
						'<div class="lastname">' + 
							'<form>' +
								'<label>Last name: </label>' +
								'<input type="text" id="lastname" class="textField">' +
							'</form>' +
							'<div class="errorText"></div>' +
						'</div>' +
						'<div class="birthday">' + 
							'<form>' +
								'<label>Birthday: </label>' +
								'<input type="text" id="birthday" class="textField">' +
							'</form>' +
							'<div class="errorText"></div>' +
						'</div>' +
						'<div class="email">' +
							'<form>' +
								'<label>Email: </label>' +
								'<input type="text" id="email" class="textField">' +
							'</form>' +
							'<div class="errorText"></div>' +
						'</div>' +
						'<div class="buttonHolder">' +
							'<div class="actionButton signupButton">Sign Up</div>' +
							'<div class="cancelButton">Cancel</div>' +
						'</div>' +
					'</div>';
		return html;
	}

})(jQuery);