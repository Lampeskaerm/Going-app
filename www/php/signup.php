<?php

	include 'include.php';

	if($_POST["type"] == "post"){
		$username = $_POST["username"];
		$password = $_POST["password"];

		$salt = generateSalt(22);

		$salt = '$2a$%13$' . strtr($salt, array('_' => '.', '~' => '/'));

		$password_hash = crypt($password, $salt);

		mysqli_query($con, "INSERT INTO test_users (username, password) values ('$username', '$password_hash')");

		$result = mysqli_query($con, "SELECT * FROM test_users");
		
		$array = mysqli_fetch_all($result, MYSQLI_ASSOC);

		echo json_encode($array);
	}




	mysqli_close($con);
?>