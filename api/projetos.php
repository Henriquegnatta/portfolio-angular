<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

require __DIR__ . '/../conexao.php';
set_exception_handler(function ($e){
http_response_code(500);
json_encode(['erro' => 'Falhar no servidor:' . $e->getMenssage()]);
});
$sql = "SELECT id, nome, descricao, tecnologias, link_github, ano
        FROM projetos
        WHERE status = 'publicado'
        ORDER BY ano DESC, id";

$projetos = $pdo->query($sql)->fetchAll();
if ($metodo === 'POST'){
        $dados = json_decode(file_get_contents('php://input'), true);
        if(!$dados || empty($dados['nome'])){
                http_response_code(400);
                echo json_encode(['erro' => 'informe pelo menos o nome do projeto']);
                exit;
        }
        $sql = 'INSERT INTO projetos (nome, descricao, tecnologias, link_github, ano, status) VALUES (?,?,?,?,?,?)';
        $stmt = $pdo->prepare($sql);
        // $stmt -> execute([ ... ]);
        http_response_code(201);
        echo json_encode(['id' => (int) $pdo ->lastInsertId()]);
        exit;
}
echo json_encode($projetos);