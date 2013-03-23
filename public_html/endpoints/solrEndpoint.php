<?php

$ch = curl_init('http://localhost:8983/solr/docs/select?q=*%3A*&fl=id%2Ccontent&wt=json&indent=true');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
curl_close($ch);

header('Content-type: application/json');
echo $data;
?>