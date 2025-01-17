import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn") === "true") {
            const ws = new WebSocket("ws://localhost:8080");

            ws.onopen = () => {
                console.log("Connected to WebSocket");
            };

            ws.onmessage = (event) => {
                try {
                    // Analysez les données reçues (supposons qu'elles soient envoyées sous forme de JSON)
                    const data = JSON.parse(event.data);

                    // Ajoutez un message avec le nom d'utilisateur dans le tableau des messages
                    const messageWithSender = `${data.username}: ${data.message}`;

                    // Mettez à jour l'état avec les nouveaux messages
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        messageWithSender,
                    ]);

                    console.log("Received message:", messageWithSender);
                } catch (error) {
                    console.error("Error parsing message:", error);
                }
            };

            ws.onclose = () => {
                if (
                    localStorage.getItem("isLoggedIn") === "false" ||
                    localStorage.getItem("token") === "expired"
                ) {
                    ws.close();
                    setSocket(null);
                    console.log("Disconnected from WebSocket");
                    // alert("le token a expirer svp reconnectez vous")
                }
            };

            setSocket(ws);
            return () => {
                ws.close();
            };
        } else {
            console.log("====================================");
            console.log("not connected, so not server nigga");
            console.log("====================================");
            navigate("/index");
        }
    }, []); // que cela se lance une seul fois

    const sendMessage = () => {
        if (socket) {
            socket.send(message);
            const dataUser = {
                username: localStorage.getItem("username"),
                message: message,
            };

            socket.send(JSON.stringify(dataUser));

            setMessages((prevMessages) => [
                ...prevMessages,
                `${localStorage.getItem("username")}: ${message}`,
            ]);

            console.log("Sent message: ", message);

            setMessage("");
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        } else {
            console.error("Socket not connected");
        }
    };

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setMessage(e.currentTarget.value);
    };

    return (
        <div className="grid place-items-center motion-preset-fade-lg">
            <div className="chat bg-black bg-opacity-50 border border-violet-700 rounded-[4px] w-[60%] h-[80%] p-3 grid grid-rows-[50px,1fr]">
                <div className="flex gap-3 bg-bl justify-center items-center">
                    <div className="text-green-400">Connected</div>
                    <div>{localStorage.getItem("username")}</div>
                </div>

                <div className="grid grid-rows-[1fr,40px]">
                    <div className="message overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className="message-item text-white bg-gray-700 p-2 rounded mb-2"
                            >
                                {msg}
                            </div>
                        ))}
                    </div>
                    <div className="send bg-white p-[0.25em] rounded-[4px] flex">
                        <input
                            ref={inputRef}
                            onChange={handleInputChange}
                            placeholder="Send a message"
                            className="w-[90%] rounded-[2px] h-full px-2"
                            type="text"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-violet-900 w-[10%] h-[100%] rounded-[2px] text-white"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
