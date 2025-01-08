import React from "react";
import { Link } from "react-router-dom";


interface TitleProps {
    title: string;
    link: string;
}

function Title({ title, link }: TitleProps) {
    return (
        <div className="text-main-color">
            <Link to={`${link}`}>{title}</Link>
        </div>
    );
}

export default Title;
