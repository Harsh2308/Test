<?php 

//Get token for super admin
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://woodendoordev.com/oauth/token");
curl_setopt($ch, CURLOPT_POST, 1);


curl_setopt($ch, CURLOPT_POSTFIELDS, 
         http_build_query(array('username' => 'threefrisbees@gmail.com','password'=>'Agent123@luxuri','grant_type'=>'password')));

// Receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);

curl_close ($ch);

$server_output=json_decode($server_output);

$access_token=$server_output->access_token;
$employeeID=$server_output->employeeID;

//expire hold
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://woodendoordev.com/api/inquiries/AutoExpirePropertyHold?holdStatusID=2&employeeID=".$employeeID."&brokerID=1");
$headers = array(
    "Accept: application/json",
    "Authorization: Bearer ".$access_token,
 );
 curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
 curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array()));

$server_output = curl_exec($ch);

curl_close ($ch);
//print_r($server_output);

?>