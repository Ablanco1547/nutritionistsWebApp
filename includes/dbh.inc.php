<?php

$serverName = "localhost";
$dbUsername = "adrian_user";
$dbPassword = "fOMzvIkVGGHN";
$dbName = "adrian_nutriApp";

$conn = mysqli_connect($serverName,$dbUsername,$dbPassword,$dbName);

if(!$conn){
    die("Connection failed: " . mysqli_connect.error());
}