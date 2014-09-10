<?php
	date_default_timezone_set('PRC');
	
	function get_client_ip() {
		if(getenv('HTTP_CLIENT_IP')) {
			$client_ip = getenv('HTTP_CLENT_IP');
		} else if (getenv('HTTP_X_FORWARD_FOR')) {
			$client_ip = getenv('HTTP_X_FORWARD_FOR');
		} else if (getenv('REMOTE_ADDR')) {
			$client_ip = getenv('REMOTE_ADDR');
		} else {
			$client_ip = $_SERVER['REMOTE_ADDR'];
		}
		return $client_ip;
	}

	if ( $ip = get_client_ip() ) {
		echo $ip;
	} else {
		die();
	}
?>
