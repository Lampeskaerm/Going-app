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

function isValidText(str) { 
	return /^\w+$/.test(str); 
}

function isValidEmail(str) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(str);
}

function isValidBirthday(str){
	var tempStr = str.replace(/\./g, '-').replace(/\//g, '-');
	tempStr = split(tempStr, '-');
	if(!(/^\d{4}$/.test(tempStr[2]))){
		return false;
	} else {
		//Checks for leapyear, and that the birthday is on one of these 3 forms: xx-xx-xxxx, xx/xx/xxxx, xx.xx.xxxx
		return /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(str);
	}
}

function checkValidation(array){
	var validation = true;
	for(var i in array){
		var div = array[i];
		if((div.attr("id") != "email") && (div.attr("id") != "birthday")){
			if(!validateForm(div.val())){
				div.parent().parent().find(".errorText").html("No input received. Write correct input");
				validation = false;
			} else if(!isValidText(div.val())){
				div.parent().parent().find(".errorText").html("Illegal characters used. Write correct input");
				validation = false;
			}
		} else if(div.attr("id") == "email") {
			if(!validateForm(div.val())){
				div.parent().parent().find(".errorText").html("No input received. Write correct input");
				validation = false;
			} else if(!isValidEmail(div.val())){
				div.parent().parent().find(".errorText").html("Illegal email input. Write correct input");
				validation = false;
			} 
		} else if(div.attr("id") == "birthday"){
			if(!validateForm(div.val())){
				div.parent().parent().find(".errorText").html("No input received. Write correct input");
				validation = false;
			} else if(!isValidBirthday(div.val())){
				div.parent().parent().find(".errorText").html("Write birthday as dd-mm-yyyy with legal input");
				validation = false;
			}
		}
	}

	return validation;
}

function hidePopup(){
	$(".popupView").hide();
	$(".optionsMenu").hide();
}

function clearErrorText(){
	$("body").find(".errorText").empty();
}

function getValuesAsObject(array){
	var obj = {};
	for(var i in array){
		obj[array[i].attr("id")] = array[i].val();
	}
	return obj;
}

function getCorrectDateFormat(date){
	var finalDate = date.replace(/\./g, '-').replace(/\//g, '-');
	var tempDate = finalDate.split('-');
	if(!(/^\d{2}$/.test(tempDate[0]))){
		tempDate[0] = "0" + tempDate[0];
	}
	if(!(/^\d{2}$/.test(tempDate[1]))){
		tempDate[1] = "0" + tempDate[1];
	}
	finalDate = tempDate[0] + "-" + tempDate[1] + "-" + tempDate[2]
	return finalDate;
}

function clearTemporarySave(){
	Globals.temporarySave = "";
}

function fadeOutDiv(div){
	div.delay(5000).fadeOut();
}

function getAge(date){
	var age;

	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	if(month < date.month){
		age = (year-date.year)-1;
	} else if (month > date.month){
		age = (year-date.year);
	} else {
		if(date.day < day){
			age = (year-date.year)-1;
		} else {
			age = (year-date.year);
		}
	}

	return age;
}

function getBirthdayObject(date){
	var dateStr = date.split("-");
	var dateObj = {"year":dateStr[0],"month":dateStr[1],"day":dateStr[2]}; 
	return dateObj;
}