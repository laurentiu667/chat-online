
import Buttons from "./Buttons";
import { useHeader } from "../context/headerContext"; 


function Header() {
    const { isLoggedIn, username, logout } = useHeader(); 

    const clickLogout = () => {
        logout();
    };

    return (
        <div className=" pl-2 pr-2 bg-transparent flex justify-between items-center motion-preset-fade-lg">
            <span className="w-20 h-20 grid place-items-center">
                <a href="/index"><img src="public\chatify.svg" alt="" /></a>
            </span>
            <ul className="flex justify-between items-center h-full text-second-color gap-2">
                {isLoggedIn ? (
                    <li>
                        <span>hi, {username}</span>
                        <button
                            onClick={clickLogout}
                            className="bg-violet-700 h-[2.25em] w-[6em] text-black ml-4"
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
