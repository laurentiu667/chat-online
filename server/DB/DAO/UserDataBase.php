<?php
    require_once("Connection.php");
    class UserDataBase {
        public static function enregistrement($username, $psw) {
            try {
                $connection = Connection::getConnection();
                $sql = "INSERT INTO chat_online(username, psw) VALUES (:username, :psw)";
                $statement = $connection->prepare($sql);
                $statement->bindParam(1, $username);
                $statement->bindParam(2, $psw);
                $statement->execute();
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }
        public static function allUserReturn() {
            try {
                $connection = Connection::getConnection();
                $sql = "SELECT * FROM chat_online";
                $statement = $connection->prepare($sql);
                $statement->execute();
                $result = $statement->fetchAll();
                return $result;
            } catch (PDOException $e) {
                echo "Erreur: " . $e->getMessage();
            }
        }

      
    }
        
?>