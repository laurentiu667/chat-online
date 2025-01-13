import Buttons from "./Buttons.tsx";
import Title from "./title.tsx";
import { useEffect, useState } from "react";
function Header() {
    const [isConnected, setIsConnected] = useState(false);
    useEffect(() => {
        fetch("http://localhost:8000/server/action/mainAction.php", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("====================================");
                console.log(data);
                console.log("====================================");
                if (data.isConnected === true) {
                    setIsConnected(true);
                } else {
                    setIsConnected(false);
                }
            });
    });
    return (
        <div className="pl-2 pr-2 bg-transparent flex justify-between items-center">
            <Title link="/index" title={"chatitfy"} />

            <ul className="flex justify-between items-center h-full text-second-color gap-2">
                {isConnected ? (
                    <li>connected</li>
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
