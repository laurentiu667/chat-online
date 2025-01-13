<?php


session_start(); 


abstract class CommonAction {
    protected static $VISIBILITY_PUBLIC = 0;
    protected static $VISIBILITY_MEMBER = 1;
    protected static $VISIBILITY_MODERATOR = 2;
    protected static $VISIBILITY_ADMINISTRATOR = 3; 

    private $pageVisibility;

    public function __construct($pageVisibility) {
        $this->pageVisibility = $pageVisibility;
    }

    public function execute() {
        // Gestion de la déconnexion
        if (!empty($_GET["logout"])) {
            session_unset();
            session_destroy();
            session_start();
        }

        if (empty($_SESSION["visibility"])) {
            $_SESSION["visibility"] = CommonAction::$VISIBILITY_PUBLIC;
        }
        $_SESSION["username"] = $_SESSION["username"] ?? "Invité";
     

        // Exécute l'action spécifique à la page
        $data = $this->executeAction();

        // Détermine si l'utilisateur est connecté
        $data["isConnected"] = $_SESSION["visibility"] > CommonAction::$VISIBILITY_PUBLIC;

       
        return $data;
    }

    protected abstract function executeAction();
}
