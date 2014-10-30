<?php
	
	include '../../includes/vii.php';
	
	function generateSalt($max) {
        $characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
        $i = 0;
        $salt = "";
        while ($i < $max) {
            $salt .= $characterList{mt_rand(0, (strlen($characterList) - 1))};
            $i++;
        }
        return $salt;
	}

	function testInput($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}

	function sendVerification($email, $key) {
		$headers = 'From: noreply@ophion-programming.com' . "\r\n" .
			'Reply-To: noreply@ophion-programming.com' . "\r\n" .
			'X-mailer: PHP/' . phpversion();
		$subject = "Verification Code";
		$msg = "Welcome to Going! To verify your email please copy the following code into the specified field in the app! [CODE]";
		$msg = str_replace("[CODE]", $key, $msg);
		mail($email, $subject, $msg, $headers);


	}

	function generateUniqueCode($max) {
		$characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		$i = 0;
		$key = "";
		while ($i < $max) {
			$key .= $characterList{mt_rand(0, (strlen($characterList) - 1))};
            $i++;
		}
		return $key;
	}
?>