<?php
/**
 * Created by PhpStorm.
 * User: flore
 * Date: 22/01/2019
 * Time: 10:18
 */

$city = filter_var($_GET['city'], FILTER_SANITIZE_STRING);


$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q=".$city."&units=metric&&APPID=39f6689d5095ab8609c5d97d61cc523d");
curl_setopt($curl, CURLOPT_HEADER, 0);
curl_exec($curl);
curl_close($curl);
