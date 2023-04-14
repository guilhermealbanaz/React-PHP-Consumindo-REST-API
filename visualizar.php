<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'conexao.php';


$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
$response = '';

$query = "SELECT * FROM produtos WHERE id = :id LIMIT 1";
$stmt = $conn->prepare($query);
$stmt->bindParam(':id', $id, PDO::PARAM_INT);
$stmt->execute();

if(($stmt) and ($stmt->rowCount() != 0)){
    $row_product = $stmt->fetch(PDO::FETCH_ASSOC);
    extract($row_product);
    $product = [
        'id'=> $id,
        'titulo'=> $titulo,
        'descricao'=> $descricao,
    ];

    $response = [
        "erro" => false,
        "prod" => $product
    ];
}else{
    $response = [
        "erro" => true,
        "message" => "Produto não encontrado!"
    ];
}

http_response_code(200);
echo json_encode($response);