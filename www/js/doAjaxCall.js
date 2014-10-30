function doAjaxCall(serviceUrl, dataForPost, successFunction, errorFunction){

	console.log("doing ajax call");

	var ajaxQuery = jQuery.ajax({
		type: "POST",
		url: "/www/php/" + serviceUrl,
		data: dataForPost
	});

	ajaxQuery.done(function (result){
		console.log("Ajax success");
		successFunction(jQuery.parseJSON(result));
	});

	ajaxQuery.fail(function (xhr, desc, exceptionobj){
		console.log("error in ajax :" + xhr.responseText);
        errorFunction(xhr, desc, exceptionobj);
	});

	return ajaxQuery;
}