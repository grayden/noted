<?php
	$fileName = $_FILES['file']['tmp_name'];
	$url = "http://localhost:8983/solr/docs/update/extract?literal.id=40&commit=true";
	$fileParam = array("myfile" => "@$fileName");
	echo $url;
	echo $fileParam;
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $fileParam);
	$data = curl_exec($ch);
	var_dump($data);
	curl_close($ch);
?>