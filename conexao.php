<?php 

$host = 'localhost';
$user = 'root';
$pass = '';
$dbname = 'produtos';

$conn = new PDO("mysql:host=$host;dbname=".$dbname,$user,$pass);