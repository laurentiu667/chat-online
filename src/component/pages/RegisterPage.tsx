import { useState, useRef  } from "react";
interface DataUser {
    id: number;
    username: string;
    password: string;
    email: string;
}

// l objet retourner
interface DataFetch {
    // ici l objet retourner contient
    user: DataUser[];
}
function RegisterPage() {
    const [data, setData] = useState<DataFetch>({ user: [] });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [secondpassword, setSecondpassword] = useState("");
    const [email, setEmail] = useState("");
    const [alertDivCreationAccount, setAlertDivCreationAccount] = useState("");


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
        })
            .then((response) => response.json())
            .then((data: DataFetch) => {
                // Vérification si 'data.user' est bien un tableau
                if (Array.isArray(data.user)) {
                    setData(data);
                    console.log('====================================');
                    console.log("voici les data user", data.user);
                    console.log('====================================');
                    setAlertDivCreationAccount("Account created successfully");
                } else {
                    if (data.user === "ERROR_PASSWORD_UNMATCH") {
                        
                        console.log(data.user);
                        setAlertDivCreationAccount("Passwords do not match");
                    } else if (data.user === "ERROR_MISSING_INFO") {
                       
                        console.log(data.user);
                        setAlertDivCreationAccount("Please fill in all the fields");
                        
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
            <div className="container-signup w-[80%] h-[70%] md:w-[500px] md:h-[500px] bg-black border border-main-color p-2 flex flex-col justify-between gap-4 rounded">
                <h1 className="text-[2em] text-white self-center">Sign Up</h1>
                <p className="alert-creation-account">{alertDivCreationAccount}</p>
                <div className="flex flex-col gap-8">
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
