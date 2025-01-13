import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function mainPage() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/server/action/mainPageAction.php", {
            method: "GET",
            credentials: 'include'
        })
            .then((response) => response.json())
            .then((data) => {
             
                if (data.isConnected === false) {
                    navigate("/index");
         
                } else {
                   
                    navigate("/main");
                    setMessage("Welcome to the main page!");
                   
                   
                    
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [navigate]);
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default mainPage;
