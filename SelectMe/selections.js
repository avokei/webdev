$(document).ready(function() {
  
    $('#clear').click(function() {
		$('div,span').css("background-color", "white");
    });
	$('#byLastDiv').click(function() {
		$('div:last').css("background-color", "red");
    });
	$('#byLoT').click(function() {
		$('div:last-of-type').css("background-color", "red");
    });
	$('#byAfterDiv').click(function() {
		$('div+div').css("background-color", "red");
    });
	$('#byIndex').click(function() {
		$('main > div').eq(1).css("background-color", "red");
    });
	$('#byIDAttribute').click(function() {
		$('[id|=targetid]').css("background-color", "red");
    });
	$('#byClassAttribute').click(function() {
		$('[class|=targetclass').css("background-color", "red");
    });
	$('#byText').click(function() {
		$('div:contains("target")').css('background-color', 'red');
    });	
	$('#bySecondDivWithText').click(function() {
		$('div:contains("div")').eq(1).css('background-color', 'red');
    });	
	$('#byNot').click(function() {
		$('div').not(':contains("example")').css('background-color', 'red');
    });	
	$('#byLastChild').click(function() {
		$('main > div').last().css("background-color", "red");
    });
	
}); // end ready