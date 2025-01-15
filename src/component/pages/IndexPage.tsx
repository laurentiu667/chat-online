import Buttons from "../Buttons";
import { useHeader } from "../../context/headerContext";

function IndexPage() {
    const { isLoggedIn } = useHeader();
    return (
        <div className="h-full w-full z-50 grid place-items-center">
            <div className="-z-10 bg-quadrillage absolute h-[80%] w-[50%] bg-no-repeat bg-cover top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 "></div>
            <div className=" text-wrap text-center h-[100%] w-[50%] flex flex-col justify-center items-center gap-10">
                <h1>accueil</h1>
                <h1 className="text-[3em] sm:text-[4em] md:text-[3em] lg:text-[6em] ">
                    Une conversation
                </h1>
                <h1 className="text-main-color text-[3em] sm:text-[3em] md:text-[5em] lg:text-[6em]">
                    plein
                </h1>
                <h1 className="text-[3em] sm:text-[3em] md:text-[5em] lg:text-[6em]">
                    de ressource
                </h1>
                <p className="text-[0.7em] sm:text-[1em] md:text-[1em] lg:text-[1em]">
                    Création d'un compte gratuit et service gratuit
                </p>
                {isLoggedIn ? (
                    <>
                        <p className="text-green-300">
                            Vous êtes actuellement connecté
                        </p>
                    </>
                ) : (
                    <Buttons
                        text={"Sign Up"}
                        borderColor="#533EC8"
                        link="/register"
                    />
                )}
            </div>
        </div>
    );
}

export default IndexPage;
