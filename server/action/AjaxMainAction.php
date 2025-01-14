<?php
    require_once("./CommonAction.php");

    class AjaxMainAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {
       
       
            
            $result = ["message" => "Action exécutée avec succès"];

            return compact("result");
        }
    }