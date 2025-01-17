<?php
    require_once("./CommonAction.php");
    require_once("../DB/DAO/UserDataBase.php");
    require_once("../../vendor/autoload.php"); 

    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    class AjaxLoginAction extends CommonAction {
        private const SECRET_KEY = "4f3c2e42b6e3127890dcd76584a1d74329de8e243b7d1d2f3c9b8e1f45a6c70d"; 
        private const TOKEN_EXPIRATION = 12000;
        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction():array {   
           
            $username = $_POST["username"] ?? null;
            $password = $_POST["password"] ?? null;

            

            if ($username != null && $password) {
                $passCompare = UserDataBase::returnHashedPassword($username);
                if (password_verify($password, $passCompare["psw"])) {
                  

        
                    
                    $_SESSION["username"] = $username;
                    $_SESSION["visibility"] = CommonAction::$VISIBILITY_MEMBER;
                

                    $token = $this->tokenGenerator($username);
                    $_SESSION["token"] = $token;
                    $result = ["user" => "USER_CONNECTED", "username" => $_SESSION["username"], "token" => $_SESSION["token"]];
                    session_status();
                    return compact("result");
                } else {
                    $result = ["user" => "ERROR_WRONG_PASSWORD"];
                    return compact("result");
                }
                
            } else {
                $result = ["user" => "ERROR_MISSING_INFO"];
                return compact("result");
            }
          
        }

        private function tokenGenerator($username) {
            $issuedAt = time();
            $expirationTime = $issuedAt + self::TOKEN_EXPIRATION; // Token expire après 1 heure
    
            $payload = [
                "iat" => $issuedAt,         // Issued at
                "exp" => $expirationTime,   // Expiration time
                "username" => $username,    // Données de l'utilisateur
            ];
    
            return JWT::encode($payload, self::SECRET_KEY, 'HS256');
        }


    }
