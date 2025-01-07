<?php
    require_once("./AjaxRegisterAction.php");

    $action = new AjaxRegisterAction();
    $data = $action->execute();
    
    header("Access-Control-Allow-Origin: *");
    // Permet les méthodes que le serveur accepte
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    // Permet les en-têtes que la requête peut inclure
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    echo json_encode($data["result"]);
