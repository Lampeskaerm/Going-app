(function($){
	
	$.fn.verificationRenderer = function (){
		var resultsContainer = $(this);

		resultsContainer.html(renderVerification);
		verificationEvents();

		return this;
	}

	function verificationEvents() {
		$("body").find(".cancelButton").click(function(){
			clearTemporarySave();
			hidePopup();
		});

		$("body").find(".verifyButton").click(function(){
			var array = [$("#code")];
			if(checkValidation(array)){
				var code = $("#code").val();
				var obj = {code:code, email:Globals.temporarySave};
				verifyCode(obj);
			}
		});
	}

	function verifyCode(obj){
		var dataForPost = {type: "get", data:obj};

		var successFunction = function(result) {
			if(result == "success"){
				clearTemporarySave();
				$("body").find(".verificationContainer").html("Success!");
				fadeOutDiv($(".popupView"));
			} else {
				$("body").find(".verificationCode").find(".errorText").html("Wrong code - try again");
			}
		}

		var errorFunction = function(xhr, status, error){
			//Error
		}

		doAjaxCall("verify.php",dataForPost,successFunction,errorFunction);
	}

	function renderVerification() {
		var html = '<div class="verificationContainer popupContainer">' +
						'<div class="verificationText">' + Globals.texts.verification + '</div>' +
						'<div class="verificationCode">' +
							'<form>' +
								'<label>Verification code: </label>' +
								'<input type="text" id="code" class="textField">' +
							'</form>' +
							'<div class="errorText"></div>' +
						'</div>' +
						'<div class="buttonHolder">' +
							'<div class="actionButton verifyButton">Verify Code</div>' +
							'<div class="cancelButton">Type it in later</div>' +
						'</div>' +
					'</div>';

		return html;
	}
})(jQuery);