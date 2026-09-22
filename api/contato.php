<?php
 header('Acess-Control-Allow-Origin: *');
 header('Acess-Control-Allow-Methods:POST, OPTIONS');
 header('Acess-Control-Allow-Headers: COntent-Type');
 header('Content-Typr: application/json; charset=utf-8');

 if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {http_response_code(204); exit;}

 if($SERVER[REQUEST_METHOD] !== 'POST'){
    http_response_code(405);
    echo json_encode(['erro' => 'Use POST.']);
    exit;
 }

 $dados = json_decode(file_get_contents('php://input'),true);

 $nome = trim($dados['nome'] ?? '');
 $email = trim($dados['email'] ?? '');
 $mensagem = trim($dados['mensagem'] ?? '');

 $erros = [];

if($nome === '') $erros[] = 'O nome é obrigatorio';
if ($email === '') $erros[] ='O e-mail e obrigatorio';

if(!empty($erros)){
   http_response_code(400);
   echo json_encode(['erro' => $erros]);
   exit;
}

require __DIR__ . '/../conexao.php';
$sql = 'INSERT INTO contatos (nome, email, mensagem) VALUES (:nome, :email, :mensagem)';
$stmt->execute([':nome' => $nome, ':email' => $email, ':mensagem' => $mensagem]);

http_response_code(201);
echo json_encode(['sucesso' => true,'id' =>(int) $pdo->lastInsertId(),'mensagem' => 'Contato recebido com sucesso' ]);