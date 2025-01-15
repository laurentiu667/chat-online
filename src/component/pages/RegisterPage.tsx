import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface DataUser {
    id: number;
    username: string;
    password: string;
    email: string;
}

interface DataFetch {
    user: DataUser[];
}
function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secondpassword, setSecondpassword] = useState("");
    const [email, setEmail] = useState("");
    const [alertDivCreationAccount, setAlertDivCreationAccount] = useState("");
    const navigate = useNavigate();

    const handleUsernameInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUsername(event.target.value);
    };

    const handlePasswordInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value);
    };
    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleSecondPasswordInput = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSecondpassword(event.target.value);
    };

    const confirmRegister = () => {
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("email", email);
        formData.append("secondpassword", secondpassword);

        fetch("http://localhost:8000/server/action/registerAction.php", {
            method: "POST",
            body: formData,
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data: DataFetch) => {
                // si c est un tableau
                if (Array.isArray(data.user)) {
                    // setData(data);
                    console.log("====================================");
                    console.log("voici les data user", data.user);
                    console.log("====================================");
                    setAlertDivCreationAccount("Account created successfully");
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                } else {
                    if (data.user === "ERROR_PASSWORD_UNMATCH") {
                        console.log(data.user);
                        setAlertDivCreationAccount("Passwords do not match");
                    } else if (data.user === "ERROR_MISSING_INFO") {
                        console.log(data.user);
                        setAlertDivCreationAccount(
                            "Please fill in all the fields"
                        );
                    }
                }
            })
            .catch((error) => {
                console.error(
                    "Erreur lors de la récupération des données:",
                    error
                );
            });
    };

    return (
        <div className=" h-full w-full z-50 grid place-items-center">
            <div className="container-signup w-[80%] h-fit md:w-[500px] bg-black border border-main-color p-2 flex flex-col justify-between items-center gap-4 rounded ">
                <span className="w-[90%] h-20 grid place-items-center">
                    <a href="/register">
                        <img src="public\enregistement.svg" alt="" />
                    </a>
                </span>
                <p className="alert-creation-account text-center text-violet-500">
                    {alertDivCreationAccount}
                </p>
                <div className="flex flex-col gap-8 w-full">
                    <input
                        onChange={handleEmailInput}
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        className="input-general"
                        placeholder="please enter your email account"
                    />
                    <input
                        onChange={handleUsernameInput}
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        className="input-general"
                        placeholder="please enter your username"
                    />
                    <input
                        onChange={handlePasswordInput}
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        className="input-general"
                        placeholder="please enter your password"
                    />

                    <input
                        onChange={handleSecondPasswordInput}
                        type="password"
                        name="secondpassword"
                        id="secondpassword"
                        value={secondpassword}
                        className="input-general"
                        placeholder="please confirm your password"
                    />
                </div>

                <button
                    className="bg-main-color w-full h-14 focus:motion-preset-confetti text-white"
                    type="submit"
                    onClick={confirmRegister}
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}

export default RegisterPage;
