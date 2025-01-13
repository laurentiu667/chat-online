<?php
    require_once("./CommonAction.php");
    require_once("../DB/DAO/UserDataBase.php");

    class AjaxMainPageAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_MEMBER);
        }

        protected function executeAction() {
  
            $result = ["username" => $_SESSION["username"]];
            return compact("result");
        }
    }