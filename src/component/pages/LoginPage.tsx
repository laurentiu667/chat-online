import { useState } from "react";



function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const toConnect = () => {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        fetch("http://localhost:8000/server/action/loginAction.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {

                console.log('====================================');
                console.log(data);
                console.log('====================================');
                
            });
    };
    return (
        <div className=" h-full w-full z-50 grid place-items-center">
            <div className="container-signup w-[80%] h-[300px] md:w-[500px] md:h-[300px] bg-black border border-main-color p-2 flex flex-col justify-between gap-4 rounded">
                <h1 className="text-[2em] text-white self-center">Sign In</h1>
                <p className="alert-creation-account">{}</p>
                <div className="flex flex-col gap-8">
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
