<?php
    //chama o arquivo de conexão com o bd
    include("../conectar.php");
    
    $info = $_POST['contatos'];

    //Decodifica a informação que vem em json
    $data = json_decode(stripcslashes($info));

    $nome = $data->nome;
    $email = $data->email;

    //consulta sql
    $query = sprintf("insert into Contato (nome, email) values ('%s', '%s')",
        mysqli_real_escape_string($conexao, $nome),
        mysqli_real_escape_string($conexao, $email));

    $rs = mysqli_query($conexao, $query);
    
    echo json_encode(array(
        "success" => mysqli_errno($conexao) == 0,
        "contatos" => array(
            "id" => mysqli_insert_id($conexao),
            "nome" => $nome,
            "email" => $email
        )
    ));
?>
