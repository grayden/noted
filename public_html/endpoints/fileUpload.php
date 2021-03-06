<?php
	

	$topSolrId = getTopSolrID();
	$id = $topSolrId + 1;

	$fileName = $_FILES['file']['tmp_name'];
	$url = "http://localhost:8983/solr/docs/update/extract?literal.id=$id&commit=true";
	$fileParam = array("myfile" => "@$fileName", 
		"literal.collection" => $_POST["collection"], 
		"literal.source" => $_POST["source"],
		"literal.name" => $_POST["name"]
		);
	$postFile = curl_init($url);
	curl_setopt($postFile, CURLOPT_POST, 1);
	curl_setopt($postFile, CURLOPT_POSTFIELDS, $fileParam);
	curl_setopt($postFile, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($postFile, CURLOPT_HEADER, 0);
	$data = curl_exec($postFile);
	curl_close($postFile);

	echo $id;

	function getTopSolrID()
	{
		$url = "http://localhost:8983/solr/docs/select?q=*%3A*&sort=id+desc&rows=1&fl=id&wt=json";
		$curl = curl_init($url);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HEADER, 0);
		$resp = curl_exec($curl);
		$encodedResp = json_decode($resp);
		return $encodedResp->response->docs[0]->id;
	}
?>