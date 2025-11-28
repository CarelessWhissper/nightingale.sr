<?php

$DB_HOST = "localhost";
$DB_USER = "nighting_localhost";  
$DB_PASS = "Javascript@123";
$DB_NAME = "nighting_myuser_commissions"; 

// Create connection
$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

// Check connection
if ($conn->connect_error) {
    die(json_encode([
        "success" => false,
        "message" => "Database connection failed: " . $conn->connect_error
    ]));
}
