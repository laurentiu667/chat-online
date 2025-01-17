<?php
require_once("Chat.php"); // Inclut votre classe Chat
require_once("../../vendor/autoload.php"); 

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat()
        )
    ),
    8080 // Définit le port d'écoute du serveur WebSocket
);

echo "Serveur WebSocket démarré sur le port 8080...\n";
$server->run();
