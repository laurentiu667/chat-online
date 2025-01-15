import Buttons from "./Buttons";
import Title from "./title";
import { useNavigate } from "react-router-dom";

function Header() {
   
    const navigate = useNavigate();

    const clickLogout = () => {
        navigate("/index");

        let form = new FormData();
        form.append("logout", "true");
        fetch("http://localhost:8000/server/action/logoutAction.php", {
            method: "POST",
            body: form,
            credentials: "include",
        }) 
        .then((response) => response.json())
        .then((data) => {
        
      
          
        });
    };

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" ? true : false;

    return (
        <div className="pl-2 pr-2 bg-transparent flex justify-between items-center">
            <Title link="/index" title={"chatitfy"} />

            <ul className="flex justify-between items-center h-full text-second-color gap-2">
                {isLoggedIn ? (
                    <li>
                        <span>hi, {localStorage.getItem('username')}</span>
                        <button
                            onClick={clickLogout}
                            className="text-red-500 ml-4"
                        >
                            Log Out
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Buttons
                                text={"Sign In"}
                                borderColor="#616161"
                                link="/login"
                            />
                        </li>
                        <li>
                            <Buttons
                                text={"Sign Up"}
                                borderColor="#533EC8"
                                link="/register"
                            />
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Header;
