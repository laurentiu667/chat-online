
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

import Header from "./component/Header";
import Footer from "./component/Footer";
import SessionChecker from "./component/sessionCheck";
import { HeaderProvider } from "./context/headerContext";
function App() {
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

                <Header />

                <SessionChecker />
                <Routes>
                    <Route path="/index" element={<IndexPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="*" element={<Navigate to="/index" />} />
                </Routes>
                <Footer />
            </HeaderProvider>
        </Router>
    );
}

export default App;
