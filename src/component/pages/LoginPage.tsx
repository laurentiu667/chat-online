import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHeader } from "../../context/headerContext";

function LoginPage() {
    const { login, logout } = useHeader();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const toConnect = () => {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        fetch("http://localhost:8000/server/action/loginAction.php", {
            method: "POST",
            body: formData,
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.isConnected === true) {
                    login(data.result.username);
                    localStorage.setItem("token", data.token);
                    navigate("/main");
                } else {
                    logout();
                    navigate("/index");
                }
            });
    };
    return (
        <div className=" h-full w-full z-50 grid place-items-center">
            <div className="container-signup w-[80%] h-fit md:w-[500px] bg-black border border-main-color p-2 flex flex-col justify-between items-center gap-4 rounded ">
                <span className="w-[90%] h-20 grid place-items-center">
                    <a href="/login">
                        <img src="public\connexion.svg" alt="" />
                    </a>
                </span>
                <p className="alert-creation-account">{}</p>
                <div className="flex flex-col gap-8 w-full">
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="username"
                        name="username"
                        id="username"
                        value={username}
                        className="input-general"
                        placeholder="username 👻"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="secondpassword"
                        id="secondpassword"
                        value={password}
                        className="input-general"
                        placeholder="Password 💜"
                    />
                </div>

                <button
                    className="bg-main-color w-full h-14 focus:motion-preset-confetti text-white"
                    type="submit"
                    onClick={toConnect}
                >
                    Connect
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
