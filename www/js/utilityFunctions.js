function isDecimal(input){
	var test1 = /^[\d\.]{3,}$/.test(input);
	var test2 = (input.split(".").length-1);
	if( test1 && test2 < 2)
		return true;

	else
		return false;
}

function isStringEmpty(input){
	if(input == "" || input == null)
		return true;
	else
		return false;
}

function validateForm(input) {
	if(isStringEmpty(input))
		return false;
	else
		return true;
}

function isValid(str) { 
	return /^\w+$/.test(str); 
}

function checkValidation(div1, div2){
	var value1 = div1.val();
	var value2 = div2.val();

	if(!validateForm(value1) && !validateForm(value2)){ 
		$("body").find(".errorText").html("No input received. Write correct input");
		return false;
	} else if(!validateForm(value1)){
		div1.parent().parent().find(".errorText").html("No input received. Write correct input");
		return false;
	} else if(!validateForm(value2)){
		div2.parent().parent().find(".errorText").html("No input received. Write correct input");
		return false;
	} else if(!isValid(value1)) {
		div1.parent().parent().find(".errorText").html("Illegal characters used. Write correct input");
		return false;
	} else if(!isValid(value2)) {
		div2.parent().parent().find(".errorText").html("Illegal characters used. Write correct input");
		return false;
	} else {
		return true;
	}
}

function hidePopup(){
	$(".popupView").hide();
	$(".optionsMenu").hide();
}

function clearErrorText(){
	$("body").find(".errorText").empty();
}