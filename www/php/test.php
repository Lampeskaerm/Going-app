<?php
	include 'include.php';

	if($_POST["type"] == "get"){
		$result = mysqli_query($con, "SELECT * FROM test_restaurants");

		$array = mysqli_fetch_all($result, MYSQLI_ASSOC);

		echo json_encode($array);
	}else{
		$obj = $_POST["data"];

		mysqli_query($con, "INSERT INTO test_restaurants (name, lat, lng, description) values ('$obj[name]', '$obj[lat]', '$obj[lng]', '$obj[desc]')");

		$result = mysqli_query($con, "SELECT * FROM test_restaurants");

		$array = mysqli_fetch_all($result, MYSQLI_ASSOC);

		echo json_encode($array);
	}

	mysqli_close($con);
?>
