$(document).ready(function () {
	
	$('#submit_button').click(function () {
		
		$.get('/ajax_gateways/ajax_handy.php', { action: $('#send_select').val(), value: $('#send_value').val() },
			function(data){
			//alert("Data Loaded: " + data);
			$('#response_area').text(data);
		 });

		return false;
	});
	
});

womAdd();