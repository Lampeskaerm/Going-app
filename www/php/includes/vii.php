<?php

	// Create connection
	$con=mysqli_connect("ophion-programming.com.mysql","ophion_programm","gB8FwUEN","ophion_programm");

	// Check connection
	if (mysqli_connect_errno()) {
	 	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
?>