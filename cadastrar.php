<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

$res = file_get_contents("php://input");
$data = json_decode($res, true);


if($data){

    $query = "INSERT INTO produtos (titulo,descricao) VALUES(:titulo, :descricao)";
    $cad_product = $conn->prepare($query);

    // if(empty($data['prod']['titulo']) OR empty($data['prod']['descricao'])) {
    //     $response = [
    //         "erro" => true,
    //         "message" => "Preencha os campos corretamente"
    //     ];
    // }

    $cad_product->bindParam(':titulo', $data['prod']['titulo'], PDO::PARAM_STR);
    $cad_product->bindParam(':descricao', $data['prod']['descricao'], PDO::PARAM_STR);

    $cad_product->execute();

    if($cad_product->rowCount()){
        $response = [
            "erro" => false,
            "message" => "Produto cadastrado com sucesso!"
        ];
    }else{
        $response = [
            "erro" => true,
            "message" => "Produto não cadastrado!"
        ];    
    }

}else{
    $response = [
        "erro" => true,
        "message" => "Produto não cadastrado!"
    ];
}


http_response_code(200);
echo json_encode($response);