import { useEffect } from "react";
import { useHeader } from "../context/headerContext";
const SessionChecker = () => {
    const { logout } = useHeader();
    const checkSession = async () => {
        const response = await fetch(
            "http://localhost:8000/server/action/mainAction.php",
            {
                method: "POST",
                credentials: "include",
            }
        );

        const data = await response.json();

        try {
            const base64Url = data.token.split(".")[1];
            const payload = atob(base64Url);
            const decodedToken = JSON.parse(payload);

            console.log("decodedToken : ", decodedToken);
            console.log("data", data);

            // Vérification de l'expiration du token
            const currentTime = Math.floor(Date.now() / 1000); // Temps actuel en secondes
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem("token");
                console.log("Le token a expiré !");
                logout();
                // Traitez l'expiration ici (par exemple, rediriger ou supprimer le token)
            } else {
                console.log("Le token est toujours valide.");
            }
        } catch (error) {
            console.log("Erreur de décodage du token", error);
            console.log("data", data);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            checkSession();
        }, 5000); // Vérification toutes les secondes

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(intervalId);
    }, []);

    return null;
};

export default SessionChecker;
