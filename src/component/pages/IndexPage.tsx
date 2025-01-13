import Buttons from "../Buttons";
function IndexPage() {
    return (
        <div className="h-full w-full z-50 grid place-items-center">
            <div className="-z-10 bg-quadrillage absolute h-[60%] w-[50%] bg-no-repeat bg-cover top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 "></div>
            <div className="h-[60%] w-[50%] flex flex-col justify-start items-center gap-10">
                <h1>accueil</h1>
                <h1 className="text-8xl">Une conversation</h1>
                <h1 className="text-8xl text-main-color">plein</h1>
                <h1 className="text-8xl">de ressource</h1>
                <p className="text-l">Création d'un compte gratuit et service gratuit</p>
                <Buttons text={"Sign Up"} borderColor="#533EC8" link="/register"/>
            </div>
        </div>
    );
}

export default IndexPage;