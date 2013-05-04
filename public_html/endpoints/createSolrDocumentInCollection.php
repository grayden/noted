<?php
	

	$topSolrId = getTopSolrID();
	$id = $topSolrId + 1;
	$_POST["id"] = $id;

	$url = "http://localhost:8983/solr/docs/update?commit=true";
	$postString = arr_to_solr_doc($_POST);
	$postFile = curl_init();
	curl_setopt($postFile, CURLOPT_POST, 1);
	curl_setopt($postFile, CURLOPT_URL, $url);
	curl_setopt($postFile, CURLOPT_HTTPHEADER, array("Content-type:text/xml; charset=utf-8"));	
	curl_setopt($postFile, CURLOPT_POSTFIELDS, $postString);
	curl_setopt($postFile, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($postFile, CURLOPT_HEADER, 0);
	curl_setopt($postFile, CURLINFO_HEADER_OUT, 1);
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

	function arr_to_solr_doc($doc){
			$fields = '';
			foreach ($doc as $field_name => $value){
				$fields .= sprintf('<field name="%s">%s</field>',$field_name, $value);
			}
			return sprintf('<add><doc>%s</doc></add>',$fields);
		}
?>