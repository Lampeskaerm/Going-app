<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	include 'include.php';

	if($_POST["type"] == "get"){
		$email = testInput($_POST["email"]);

		$salt = generateSalt(22);

		$salt = '$2a$%13$' . strtr($salt, array('_' => '.', '~' => '/'));

		$typed_hash = crypt($_POST["password"], $salt);

		$result = mysqli_query($con, "SELECT * FROM test_users WHERE email='$email'");

		$array = mysqli_fetch_all($result, MYSQLI_ASSOC);

		$hash = $array[0]["password"];

		unset($array[0]["password"]);

		$comparison = strcmp($hash, $typed_hash);

		$result = array();

		if($comparison == 0){
			$result["user"] = $array[0];
			$result["status"] = "success";
		}else{
			$result["status"] = "failed";
		}	

		echo json_encode($result);
	}

?>