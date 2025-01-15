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
   
        try {
            const base64Url = data.token.split(".")[1];
            const payload = atob(base64Url);
            const decodedToken = JSON.parse(payload);
            console.log("decodedToken : ", decodedToken);
            
        } catch (error) {
            console.log("error de decodage du token", error);
            return null;
        }
    };

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            checkSession();
        }, 5000);

     
        return () => clearInterval(intervalId);
    }, []);

    return null;
};

export default SessionChecker;