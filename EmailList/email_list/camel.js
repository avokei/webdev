$.validator.addMethod( "camelcode", function( value, element ) {
	return this.optional( element ) || value.length == 10 &&
		value.match(/[A-Z][a-z]{1}$/);
}, "Please use camelcode format" );
