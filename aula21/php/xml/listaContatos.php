<?php
    //Faz com que o conteudo retornado pelo servidor seja do tipo XML
    header('Content-type: text/xml');   //MUITO IMPORTANTE

    //connect to db
    include("../conectar.php");
    
    //sql query
    $query = mysqli_query($conexao, "select * from contato") or die(mysql_error());
    
    //interates the result and creates an array with each row
    $xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
    $xml.="<contatos>";

    $rows = array();
    while($contato = mysqli_fetch_assoc($query)) {
        $xml.=   "<contato>";
        $xml.=      "<id>" . $contato['id'] . "</id>";
        $xml.=      "<nome>" . $contato['nome'] . "</nome>";
        $xml.=      "<email>" . $contato['email'] . "</email>";
        $xml.=   "</contato>";
    }

    $xml.="</contatos>";
        
    //envia resultado do XML
    echo $xml;

?>