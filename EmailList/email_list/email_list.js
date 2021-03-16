$(document).ready(function() {
	$("#email").focus();
	//rules and methods are defined in the documentation
	//https://jqueryvalidation.org/documentation/
	//The plugin also has contricuted methods
	//https://github.com/jzaefferer/jquery-validation/tree/master/src/additional
	//
	$("#email_form").validate({
		rules: {
			email_1: {
				required: true,
				email: true
			},
			email_2: {
				required: true,
				email: true,
				equalTo: "#email_1"
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			state: {
				required: true,
				rangelength: [2, 2]
			},
			zip: {
				required: true,
				digits: true,
				rangelength: [5, 5]
			},
			creditcard: {
				required:true,
				creditcard:true,
			},
			camelcode:{
				required:true,
				camelcode:true,
			}
		},
		messages: {
			email_2: {
				equalTo: "This entry must equal previous entry."
			},
			state: {
				rangelength: "Please enter a 2-character state code."
			},
			zip: {
				rangelength: "Please enter a 5-digit zip code."
			},
			creditcard:{
				creditcard:"Please enter a Luhn checksum validated credit card number."
				},
			camelcode:{
				camelcode:"5 camels, alternate uppercase and lowercase for total of 10 alpha characters:"
			}	
		}
	}); // end validate
}); // end ready
