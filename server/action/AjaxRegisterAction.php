<?php
    require_once("./CommonAction.php");
    require_once("../DB/DAO/UserDataBase.php");
    class AjaxRegisterAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction():array {   

            $username = $_POST["username"] ?? null;
            $password = $_POST["password"] ?? null;
            $secondpassword = $_POST["secondpassword"] ?? null;
            $email = $_POST["email"] ?? null;
            $password_hash = password_hash($password, PASSWORD_DEFAULT);

            if ($username != null && $password != null && $email != null && $secondpassword != null) {
                if ($password == $secondpassword) {
                    UserDataBase::enregistrement($username, $password_hash, $email);
                    // utilisateurs sera le tableau de tous les users donc interface dans ts doit inclure utilisateurs
                    $result = ["user" => UserDataBase::allUserReturn()];
                    return compact("result");
                } else {
                    $result = ["user" => "ERROR_PASSWORD_UNMATCH"];
                    return compact("result");
                }
            } else {
                $result = ["user" => "ERROR_MISSING_INFO"];
                return compact("result");
            }
          
        }
    }