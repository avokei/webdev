"use strict";
var $ = function (id) {
    return document.getElementById(id);
}
var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
		futureValue += futureValue * rate / 100;
    }
    futureValue = futureValue.toFixed(2);
	return futureValue;
}
var processEntries = function() {
    var investment = parseFloat( $("investment").value );
    var rate = parseFloat( $("annual_rate").value );
    var years = parseInt( $("years").value );
	
	if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
		alert("One or more entries is invalid");
	}
	else {
		$("future_value").value	= calculateFV(investment,rate,years);
	}
	
	if(investment<0 || investment>100000){
		alert("Your investment value is out of range (Must be between 0 and 100,000)")
	}
	if(rate<0.0 || rate>15.0){
		alert("Your annual interest rate is out of range (Must be between 0 and 15)")
	}
	if(years<0 || years>50){
		alert("The amount of years is out of range (Must be between 0 and 50)")
	}


window.onload = function () {
    $("calculate").onclick = processEntries;
    $("investment").focus();
}