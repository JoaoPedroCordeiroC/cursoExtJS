<?php
    //chama o arquivo de conexão com o bd
    include("../conectar.php");
    
    switch ($_SERVER['REQUEST_METHOD']) {

        case 'GET':
            listaContatos();
            break;
    
        case 'POST':
            criaContato();
            break;
        
        case 'PUT':
            atualizaContato();
            break;

        case 'DELETE':
            deletaContato();
            break;
    };

    function listaContatos() {

        //consulta sql
        $query = mysqli_query($conexao, "select * from Contato") or die(mysql_error());
        
        //faz um looping e cria um array com os campos da consulta
        $rows = array('contatos' => array());
        while($contato = mysqli_fetch_assoc($query)) {
            $rows['contatos'][] = $contato;
        }

        //encoda para formato JSON
        echo json_encode($rows);
    };

    function criaContato() {

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
    };

    function atualizaContato() {

        parse_str(file_get_contents("php://input"), $post_vars);
        $info = $post_vars['contatos'];

        //Decodifica a informação que vem em json
        $data = json_decode(stripcslashes($info));

        $nome = $data->nome;
        $email = $data->email;
        $id = $data->id;

        //consulta sql
        $query = sprintf("update Contato set nome = '%s', email = '%s' where id = %d",
            mysqli_real_escape_string($conexao, $nome),
            mysqli_real_escape_string($conexao, $email),
            mysqli_real_escape_string($conexao, $id));

        $rs = mysqli_query($conexao, $query);
        
        echo json_encode(array(
            "success" => mysqli_errno($conexao) == 0
        ));
    };

    function deletaContato() {

        parse_str(file_get_contents("php://input"), $post_vars);
        $info = $post_vars['contatos'];

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
    };
?>
