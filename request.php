
<?php

declare(strict_types=1);

require_once('vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$API_KEY = getenv('API_KEY');
$API_SECRET = getenv('API_SECRET');
$searchDomain = $_POST["domain"];
$url = "https://api.ote-godaddy.com/v1/domains/available?domain={$searchDomain}&checkType=FAST&forTransfer=false";


$curl = curl_init($url);

$headers = array(
    "Accept: */*",
    "Authorization: sso-key {$API_KEY}:{$API_SECRET}"
);

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
echo $response;
curl_close($curl);
?>