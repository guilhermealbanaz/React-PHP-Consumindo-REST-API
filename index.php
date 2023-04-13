<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'conexao.php';

$qProd = 'SELECT id, titulo, descricao FROM produtos ORDER BY id DESC';

$res = $conn->prepare($qProd);
$res->execute();

if(($res) and ($res->rowCount() != 0)){
    while($row = $res->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $lista_produtos['records'][$id] = [
            'id'=> $id,
            'titulo'=> $titulo,
            'descricao'=> $descricao,
        ];
    }

    http_response_code(200);
    echo json_encode($lista_produtos);
}