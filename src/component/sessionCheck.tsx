import React, { useEffect } from 'react';
const SessionChecker = () => {
    const checkSession = async () => {
        const response = await fetch(
            "http://localhost:8000/server/action/mainAction.php",
            {
                method: "POST",
                credentials: "include",
            }
        );
        const data = await response.json();
        console.log("data", data);

        if (data.isConnected) {
            localStorage.setItem("isLoggedIn", "true");
       
            localStorage.setItem("username", data.result.username);
        } else {
            localStorage.setItem("isLoggedIn", "false");
            localStorage.setItem("username", data.result.username);
         
        }
    };

    useEffect(() => {
        // Vérifiez la session toutes les 3 secondes
        const intervalId = setInterval(() => {
            checkSession();
        }, 3000);

        // Nettoyez l'intervalle lorsque le composant est démonté
        return () => clearInterval(intervalId);
    }, []);

    return null;
};

export default SessionChecker;