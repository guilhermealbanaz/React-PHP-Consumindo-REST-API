<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

$res = file_get_contents("php://input");
$data = json_decode($res, true);

if($data){
    $query = "UPDATE produtos SET titulo= :t, descricao= :d WHERE id=:i";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':t', $data['titulo'], PDO::PARAM_STR);
    $stmt->bindParam(':d', $data['descricao'], PDO::PARAM_STR);
    $stmt->bindParam(':i', $data['id'], PDO::PARAM_INT);

    $stmt->execute();

    if($stmt->rowCount()){
        $response = [
            "erro" => false,
            "message" => "Produto editado com sucesso!",
        ];
    }else{
        $response = [
            "erro" => true,
            "message" => "Produto não foi editado!",
        ];
    }
}else{
    $response = [
        "erro" => true,
        "message" => "Produto não foi editado!",
    ];
}
http_response_code(200);
echo json_encode($response);