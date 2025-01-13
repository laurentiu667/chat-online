<?php
    require_once("./CommonAction.php");
    require_once("../DB/DAO/UserDataBase.php");
    
    class AjaxLoginAction extends CommonAction {

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
                

                    $result = ["user" => "USER_CONNECTED", "username" => $_SESSION["username"]];
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
    }
