import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHeader } from "../../context/headerContext";
function mainPage() {
    const navigate = useNavigate();
    const { username } = useHeader();

    useEffect(() => {
        fetch("http://localhost:8000/server/action/mainPageAction.php", {
            method: "GET",
            credentials: "include",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.isConnected === false) {
                    navigate("/index");
                } else {
                    navigate("/main");
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [navigate]);
    return (
        <div className="grid place-items-center motion-preset-fade-lg">
            <div className="chat bg-black bg-opacity-50 border border-violet-700 rounded-[4px]  w-[60%] h-[80%] p-3 grid grid-rows-[50px,1fr]">
                <div className="flex gap-3 bg-bl justify-center items-center">
                    <div className="text-green-400">Connected</div>
                    <div>{username}</div>
                </div>

                <div className="grid grid-rows-[1fr,40px]">
                    <div className="message"></div>
                    <div className="send bg-white p-[0.25em] rounded-[4px]">
                        <input placeholder="send message" className="w-[90%] rounded-[2px] h-full" type="text" />
                        <button className="bg-violet-900 w-[10%] h-[100%] rounded-[2px] text-white">send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default mainPage;
