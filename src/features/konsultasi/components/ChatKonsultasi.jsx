import { useEffect, useState, useRef } from "react";
import { format } from "date-fns";
import { VscSend } from "react-icons/vsc";
import { IoLogoWechat } from "react-icons/io5";
import { Navbar } from "../../../components/shared/Navbar.jsx";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
// import { LuMessageSquarePlus } from "react-icons/lu";
import useUser from "../../../stores/useStore.js";
import socket from "../../../socket/socket.js";

export const Chatkonsultasi = () => {
  const { user } = useUser();
  const { konsultasiId } = useParams();
  const location = useLocation();
  const konsultasi_id = parseInt(konsultasiId);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const [isTyping, setIsTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);

  const namaDokter = location.state?.nama_dokter || "Dokter Tidak Diketahui";
  const spesialisDokter =
    location.state?.spesialis || "spesialis Tidak Diketahui";
  const imageProfile =
    location.state?.image_profile || "image profile Tidak Diketahui";
  const jamKerja = location.state?.jam_kerja || "jam kerja tidak diketahui";

  const latestMessageRef = useRef(null);

  useEffect(() => {
    socket.emit("joinRoom", konsultasi_id);

    socket.on("receiveMessage", (msg) => {
      console.log("Message received in frontend:", msg);
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [konsultasi_id]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/messages/${konsultasi_id}`
        );
        setMessages(response.data.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [konsultasi_id]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setIsUserTyping(true);
    } else {
      setIsUserTyping(false);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        konsultasiId: konsultasi_id,
        senderId: user.id,
        content: message,
      });
      setMessage("");
      setIsUserTyping(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <section className="min-h-screen w-full flex flex-col bg-gray-200">
        <div className="bg-secondary-300 w-full py-2 px-32">
          <div className="flex items-center">
            <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-black">
              <img
                className=" object-cover object-top "
                src={imageProfile}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-bold pl-3">{namaDokter}</h3>
              <p className="text-sm pl-3 opacity-50">{spesialisDokter}</p>
              <p className="text-sm pl-3 opacity-50">{jamKerja}</p>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="flex flex-grow flex-col justify-between py-4 px-32">
          <div className="flex flex-grow flex-col overflow-y-auto space-y-4">
            {loading ? (
              <p>Loading messages...</p>
            ) : messages.length === 0 ? (
              <div className="flex flex-col flex-grow items-center justify-center text-gray-500">
                <IoLogoWechat size={120}/>
                <p className="text-xl font-medium">
                  Silakan mulai konsultasi Anda
                </p>
              </div>
            ) : (
              <>
                {messages &&
                  messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        message.senderId !== user.id
                          ? "items-start"
                          : "items-end"
                      }`}
                      ref={
                        index === messages.length - 1 ? latestMessageRef : null
                      }
                    >
                      <div
                        className={`${
                          message.senderId !== user.id
                            ? "bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl"
                            : "bg-gray-800 text-white rounded-l-xl rounded-tr-xl"
                        } max-w-md p-3`}
                      >
                        <p>{message.content}</p>
                        <span className="text-xs text-gray-500 mt-1">
                            {format(new Date(message.sent_at), "hh:mm a")}
                        </span>
                      </div>
                    </div>
                  ))}

                {/* {isTyping && (
                  <div className="flex items-center space-x-2">
                    <div className="bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl p-3 max-w-md">
                      <TypingAnimation isUserTyping={false} />
                    </div>
                  </div>
                )} */}

                {/* Animasi mengetik untuk user */}
                {isUserTyping && (
                  <div className="flex items-center space-x-2 justify-end">
                    <div className="bg-gray-800 text-white rounded-l-xl rounded-tr-xl p-3 max-w-md">
                      <TypingAnimation isUserTyping={true} />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex mx-auto w-full justify-center">
            <div className="p-0.5 flex items-center bg-white rounded-full w-full ">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={handleMessage}
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
    </>
  );
};

// eslint-disable-next-line react/prop-types
const TypingAnimation = ({ isUserTyping }) => {
  return (
    <div
      className={`flex space-x-1 ${
        isUserTyping ? "justify-end" : "justify-start"
      }`}
    >
      <span className="text-2xl animate-bounce">.</span>
      <span className="text-2xl animate-bounce delay-75">.</span>
      <span className="text-2xl animate-bounce delay-150">.</span>
    </div>
  );
};
