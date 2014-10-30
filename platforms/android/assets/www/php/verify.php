<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
	include 'include.php';

	if($_POST["type"] == "get"){
		$data = $_POST["data"];
		$key = $data["code"];
		$email = $data["email"];

		$result = mysqli_query($con, "SELECT * FROM test_users WHERE email='$email'");

		$array = mysqli_fetch_all($result, MYSQLI_ASSOC);

		if($array[0]["verificationkey"] == $key){
			mysqli_query($con, "UPDATE test_users SET verified='1' WHERE email='$email'");
			echo json_encode("success");
		} else{
			echo json_encode("failed");
		}
	}

	mysqli_close($con);
?>