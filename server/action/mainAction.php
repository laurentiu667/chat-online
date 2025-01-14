<?php
    require_once("./AjaxLogoutAction.php");

    $action = new AjaxLogoutAction();
    $data = $action->execute();
    
    header('Access-Control-Allow-Origin: http://localhost:5173');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    echo json_encode($data);
