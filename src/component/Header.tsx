
import Buttons from "./Buttons.tsx";
import Title from "./title.tsx";

function Header() {
    return (
        
        <div className="pl-2 pr-2 border border-second-color  flex justify-between items-center">
          <Title link="/index" title={"chatitfy"} />
          
            <ul className="flex justify-between items-center h-full text-second-color gap-2">
                <li><Buttons text={"Sign In"} borderColor="#616161" link="/login"/></li>
                <li><Buttons text={"Sign Up"} borderColor="#533EC8" link="/register"/></li>
            </ul>
        </div>
    );
}

export default Header;
