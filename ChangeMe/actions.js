$(document).ready(function() {
  
    $('#reset').click(function() {
		location.reload();	
    });
	
	$('#toggle').click(function() {
		$('#targetid').toggle('blind');
    });
	
	$('#textillate').click(function() {
		$('#targetid').textillate();
    });
	
	$('#textBack').click(function() {
		$('#targetid').textillate({in:{reverse: true}});
    });
	
	$('#shuffle').click(function() {
		$('#targetid').textillate({in:{shuffle: true}});
    });	

	$('#outEffect').click(function() {
		$('#targetid').fadeOut('slow');
    });	
	
	$('#curveDown').click(function() {
		$('#targetid').arctext({radius: 500});
    });	
	
	$('#curveUp').click(function() {
		$('#targetid').arctext({radius: 300,dir:-1});
    });	
	
	$('#dblHide').dblclick(function() {
		$('#targetid').toggle();
    });	
	
	$('#mouseHoverOut').hover(function() {
		$('#targetid').fadeOut(300);
    });	
	
	$('#mouseHoverIn').hover(function() {
		$('#targetid').fadeIn(300);
    });	
	
}); // end ready