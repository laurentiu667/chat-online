<?php
    require_once("./CommonAction.php");
    require_once("../DB/DAO/UserDataBase.php");
    class AjaxRegisterAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {   

            $username = $_POST["username"] ?? null;
            $password = $_POST["password"] ?? null;
            $password_hash = password_hash($password, PASSWORD_DEFAULT);

            if ($username != null && $password != null) {
                UserDataBase::enregistrement($username, $password_hash);
            }
            // utilisateurs sera le tableau de tous les users donc interface dans ts doit inclure utilisateurs
            $result = ["utilisateurs" => UserDataBase::allUserReturn()];
            
            return compact("result");
        }
    }