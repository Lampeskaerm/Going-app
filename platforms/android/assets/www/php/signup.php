<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	include 'include.php';

	if($_POST["type"] == "post"){
		$data = $_POST["data"];
		$username = $data["username"];
		$password = $data["password"];
		$firstname = $data["firstname"];
		$lastname = $data["lastname"];
		$birthday = $data["birthday"];
		$email = $data["email"];

		$date = date('Y-m-d', strtotime($birthday));

		$salt = generateSalt(22);

		$salt = '$2a$%13$' . strtr($salt, array('_' => '.', '~' => '/'));

		$password = crypt($password, $salt);

		$check = mysqli_query($con, "SELECT * FROM test_users WHERE email='$email'");

		$array = mysqli_fetch_all($check, MYSQLI_ASSOC);

		if(empty($array)){
			$key = generateUniqueCode(5);
			mysqli_query($con, "INSERT INTO test_users (username, password, firstname, lastname, birthday, email, verificationkey) values ('$username', '$password', '$firstname', '$lastname', '$date', '$email', '$key')");
			sendVerification($email, $key);
			echo json_encode("success");
		} else {
			echo json_encode("failed");
		}
	}

	mysqli_close($con);
?>