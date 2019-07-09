<?php
    //chama o arquivo de conexão com o bd
    include("../conectar.php");
    
    $info = $_POST['contatos'];

    //Decodifica a informação que vem em json
    $data = json_decode(stripcslashes($info));

    $id = $data->id;
         
    //consulta sql
    $query = sprintf("delete from Contato where id = %d",
        mysqli_real_escape_string($conexao, $id));

    $rs = mysqli_query($conexao, $query);
    
    echo json_encode(array(
        "success" => mysqli_errno($conexao) == 0
    ));
?>
