<?php

    header('Content-type: text/xml');   //MUITO IMPORTANTE

    //chama o arquivo de conexão com o bd
    include("../conectar.php");
    
    $dom = new DOMDocument();
    $dom->loadXML(file_get_contents('php://input'));

    $contatos = simplexml_import_dom($dom);

    $id = $contatos->contato->id;

    //consulta sql
    $query = sprintf("delete from Contato where id = %d",
        mysqli_real_escape_string($conexao, $id));

    $rs = mysqli_query($conexao, $query);
    
    $xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
    $xml.="<contatos>";

    $xml.="<success>" . mysqli_errno($conexao) == 0 . "</success>";

    $xml.="</contatos>";
        
    //envia resultado do XML
    echo $xml;

?>
