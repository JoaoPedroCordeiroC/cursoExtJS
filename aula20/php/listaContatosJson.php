<?php
//conecta com o banco
include("conectar.php");
 
//consulta sql
$query = mysqli_query($conexao, "select * from contato") or die(mysql_error());
 
//faz um looping e cria um array com os campos da consulta
$rows = array();
while($contato = mysqli_fetch_assoc($query)) {
    $rows[] = $contato;
}

//encoda para o formato JSON
echo json_encode($rows);
?>