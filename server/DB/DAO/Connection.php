<?php
require_once __DIR__ . '/../constants.php';

class Connection {
    private static $connection;

    public static function getConnection() {
        
        if (Connection::$connection == null) {
            // Création du DSN avec les informations appropriées
            $dsn = "pgsql:host=" . DB_HOST . ";port=5432;dbname=" . DB_NAME;

            // Création de la connexion PDO
            Connection::$connection = new PDO($dsn, DB_USER, DB_PASS);

            // Configuration des attributs PDO
            Connection::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            Connection::$connection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }

        return Connection::$connection;
    }
}
?>
