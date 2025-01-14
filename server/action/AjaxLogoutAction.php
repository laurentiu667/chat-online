<?php
    require_once("./CommonAction.php");

    class AjaxLogoutAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {

            $logout = $_POST["logout"] ?? null;
       
            if ($logout === "true") {
                session_unset();
                session_destroy();
                session_start();
            
              

                $_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
                $_SESSION["username"] = "Invité";

             
                $result = ['visibility' => $_SESSION["visibility"], 'username' => $_SESSION["username"]];
            } 

          
          
            return compact("result");
        }
    }