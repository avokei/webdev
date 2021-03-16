$(document).ready(function() {
	

	$('#click').click(function() {
		alert('You clicked');
    });
	
	$('#dblClick').dblclick(function() {
		alert('You double clicked');
	});	
	
	$('#mouseOver').mouseover(function() {
		alert('Mouseover');
	});	
	
	$('#rightClick').contextmenu(function() {
		alert('You right clicked');
	});	
	
	$('#keyDown').keydown( function() {
		alert('You pressed a key');
	});

	$('#select').select( function() {
		alert('You selected text');
	});
	
	$('#submitButton').click( function() {
		alert($('#submitText').val());
	});
	
	$('#mouseLeave').mouseleave(function() {
		alert('Your mouse left the button');
	});	
	
	$('#textEnter').keypress( function(e) {
		if(e.keyCode==13)
			alert($('#textEnter').val());
	});
	
	$('#clickLeave').click( function() {
		$('#clickLeave').mouseleave( function() {
			alert('You clicked and moved the mouse');
		});
	});
	
}); // end ready