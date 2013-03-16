<?php
require_once '../lib/sag/Sag.php';

$couch = new Sag('127.0.0.1', '5984');
$couch->setDatabase('noted');

header("Content-type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "GET")
    echo json_encode($couch->get($_GET["request"])->body);

?>