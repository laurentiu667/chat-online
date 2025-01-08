
import { Link } from "react-router-dom";

interface ButtonsProps {
    text: string;
    borderColor: string;
    link: string;
}

function Buttons({ text, borderColor, link }: ButtonsProps) {
    return (
        <Link to={link}>
            <button
                className={`w-32 h-10 border`}
                style={{ borderColor }}
            >
                {text}
            </button>
        </Link>
    );
}

export default Buttons;
