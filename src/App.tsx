import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
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
import Blob from "./component/blob";
import { AuthProvider } from "./component/authentification"; 

function App() {
    return (
        <AuthProvider> {/* Fournisseur du contexte */}
            <Router>
                <Blob
                    height={"70%"}
                    width={"40%"}
                    color="#533ec8"
                    top={"0px"}
                    left={"0px"}
                />
                <Blob
                    height={"70%"}
                    width={"40%"}
                    color="#533ec8"
                    top={"50%"}
                    left={"60%"}
                />
                <Header />

                <main className="">
                    <Routes>
                        <Route path="/" element={<Navigate to="/index" />} />
                        <Route path="/index" element={<IndexPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/main" element={<MainPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
