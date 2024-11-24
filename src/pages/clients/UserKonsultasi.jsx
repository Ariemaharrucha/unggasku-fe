import React, { useEffect, useState, useRef } from 'react'
import { Layout } from '../../layouts/Layout'
import { VscSend } from "react-icons/vsc";



export const UserKonsultasi = () => {
    const [messages, setMessages] = useState([
        { text: "Halo, apakah ada yang bisa saya bantu?", sender: "dokter", time: getCurrentTime() },
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [firstUserMessahgeSend, setFirstUserMessageSend] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [isUserTyping, setIsUserTyping] = useState(false);
    const latestMessageRef = useRef(null);

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");

        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    const handleSendMessage = () => {
        if (inputMessage.trim() !== "") {
            const newMessage = { text: inputMessage, sender: "user", time: getCurrentTime() };
            setMessages([...messages, newMessage]);
            setInputMessage("");
            setIsUserTyping(false);

            if (!firstUserMessahgeSend) {
                setFirstUserMessageSend(true);
                setIsTyping(true);

                setTimeout(() => {
                    const dokterResponse = {
                        text: "Saya bisa bantu. Tolong ceritakan detail kronologi kenapa hewan unggas anda? Apakah hewan unggas anda bermasalah dengan kesehatan, pakan, lingkungan, atau yang lainnya?",
                        sender: "dokter",
                        time: getCurrentTime(),
                    };
                    setMessages((prevMessages) => [...prevMessages, dokterResponse]);
                    setIsTyping(false);
                }, 1000);
            }
        }
    };

    const handleUserTyping = (e) => {
        setInputMessage(e.target.value);
        if (e.target.value.trim() !== "") {
            setIsUserTyping(true);
        } else {
            setIsUserTyping(false);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSendMessage();
        }
    }

    useEffect(() => {
        console.log(latestMessageRef.current);
        if (latestMessageRef.current) {
            latestMessageRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [messages])

    return (
        <Layout>
            <section className='min-h-screen w-full flex flex-col bg-gray-200'>
                <div className='bg-secondary-300 w-full py-2 px-32'>
                    <div className='flex overflow-hidden object-cover'>
                        <img className='w-16 h-16 object-cover object-top rounded-full border-2 border-black' src="\src\assets\Images\layanan\dr_card1.jpeg" alt="" />
                        <div className='flex flex-col'>
                            <h3 className='text-lg font-bold pl-3'>Dr. Stefanus Fandi W</h3>
                            <p className='text-sm pl-3 opacity-50'>Nutrisi hewan unggas</p>
                            <p className='text-sm pl-3 opacity-50'>08.00 - 20.00</p>
                        </div>
                    </div>
                </div>

                {/* Chat */}
                <div className='flex flex-grow flex-col'>
                    <div className='flex flex-grow flex-col overflow-y-auto max-h-[76vh] p-6 px-32 space-y-4'>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${message.sender === "dokter" ? "items-start" : "items-end"}`}
                                ref={index === messages.length - 1 ? latestMessageRef : null}>
                                <div className={`${message.sender === "dokter"
                                    ? "bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl"
                                    : "bg-gray-800 text-white rounded-l-xl rounded-tr-xl"
                                    } max-w-md p-3`}>
                                    {message.text}
                                </div>
                                <span className='text-xs text-gray-500 mt-1'>{message.time}</span>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex items-center space-x-2">
                                <div className="bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl p-3 max-w-md">
                                    <TypingAnimation isUserTyping={false} />
                                </div>
                            </div>
                        )}

                        {/* Animasi mengetik untuk user */}
                        {isUserTyping && (
                            <div className="flex items-center space-x-2 justify-end">
                                <div className="bg-gray-800 text-white rounded-l-xl rounded-tr-xl p-3 max-w-md">
                                    <TypingAnimation isUserTyping={true} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='flex mx-auto w-full justify-center'>
                        <div className="p-1 flex items-center bg-white rounded-full w-full mx-32">
                            <div className="flex w-full">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    value={inputMessage}
                                    onChange={handleUserTyping}
                                    onKeyDown={handleKeyDown}
                                    className="flex-grow px-7 text-lg border rounded-full focus:outline-none border-none"
                                />
                                <div className="p-2">
                                    <button
                                        onClick={handleSendMessage}
                                        className="bg-yellow-400 text-primary-950 p-2 rounded-full"
                                    >
                                        <VscSend />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

const TypingAnimation = ({ isUserTyping }) => {
    return (
        <div className={`flex space-x-1 ${isUserTyping ? 'justify-end' : 'justify-start'}`}>
            <span className="text-2xl animate-bounce">.</span>
            <span className="text-2xl animate-bounce delay-75">.</span>
            <span className="text-2xl animate-bounce delay-150">.</span>
        </div>
    );
};