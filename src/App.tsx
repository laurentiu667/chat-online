import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./App.css";
import RegisterPage from "./component/pages/RegisterPage";
import IndexPage from "./component/pages/IndexPage";
import LoginPage from "./component/pages/LoginPage";
import MainPage from "./component/pages/mainPage";
import Blob from "./component/Blob";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SessionChecker from "./component/sessionCheck";
import { HeaderProvider } from "./context/headerContext";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
    const [userRole, setUserRole] = useState<number | null>(null); 

    useEffect(() => {
        const checkRole = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8000/server/action/mainAction.php",
                    {
                        method: "POST",
                        credentials: "include",
                    }
                );

                const data = await response.json();
                console.log("Rôle reçu :", data.result.role);
                setUserRole(data.result.role); 
            } catch (error) {
                console.error(
                    "Erreur lors de la vérification du rôle :",
                    error
                );
            }
        };

        checkRole();
    }, []); 

    useEffect(() => {
      
        console.log("userRole a été mis à jour :", userRole);
    }, [userRole]);

    if (userRole === null) {
        return <div>Chargement...</div>; 
    }

    return (
        <Router>
            <HeaderProvider>
                <Blob
                    height="70%"
                    width="40%"
                    color="#533ec8"
                    top="0px"
                    left="0px"
                />
                <Blob
                    height="70%"
                    width="40%"
                    color="#533ec8"
                    top="50%"
                    left="60%"
                />
                <Header role={userRole} />{" "}
          
                <SessionChecker />
                <Routes>
                    <Route
                        path="/index"
                        element={<IndexPage role={userRole} />}
                    />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/main"
                        element={
                            <ProtectedRoute isAllowed={userRole > 0}>
                                <MainPage />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <Footer />
            </HeaderProvider>
        </Router>
    );
}

export default App;
