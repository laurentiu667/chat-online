import Header from "../src/component/Header";
import Footer from "../src/component/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import RegisterPage from "./component/pages/RegisterPage";
import IndexPage from "./component/pages/IndexPage";
import LoginPage from "./component/pages/LoginPage";
import Blob from "./component/blob";

function App() {
    return (
        <Router>
            <Header />
            <main className="">
                <Blob height={"70%"} width={"40%"} color="#533ec8" top={"0px"} left={"0px"}/>
                <Blob height={"70%"} width={"40%"} color="#533ec8" top={"50%"} left={"60%"}/>

                <Routes>
                <Route path="/" element={<Navigate to="/index" />} />
                    <Route path="/index" element={<IndexPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
