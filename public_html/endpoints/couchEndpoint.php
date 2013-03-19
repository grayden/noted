<?php
require_once '../lib/sag/Sag.php';

$couch = new Sag('127.0.0.1', '5984');
$couch->setDatabase('noted');

header("Content-type: application/json");


if ($_SERVER["REQUEST_METHOD"] == "GET")
    if ($_SERVER["PATH_INFO"])
        echo json_encode ($couch->get($_SERVER["PATH_INFO"])->body);
    else
        echo json_encode($couch->get($_GET["request"])->body);

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $post = file_get_contents('php://input');
    $couchResponse = $couch->post($post);
    if ($couchResponse->body->ok) 
    {
        $post = json_decode($post);
        $post->_id = $couchResponse->body->id;
        $post->_rev = $couchResponse->body->rev;
        echo json_encode($post);
    }
}

if ($_SERVER["REQUEST_METHOD"] == "PUT") 
{
    $put = json_decode(file_get_contents('php://input'));
    $couchResponse = $couch->put($put->_id, $put);
    if ($couchResponse->body->ok)
    {
        $put->_id = $couchResponse->body->id;
        $put->_rev = $couchResponse->body->rev;
        echo json_encode($put);
    }
}

if ($_SERVER["REQUEST_METHOD"] == "DELETE")
{
    $id = $_SERVER["PATH_INFO"];
    $doc = $couch->get($id);
    $rev = $doc->body->_rev;
    $resp = $couch->delete($id, $rev);
}

?>