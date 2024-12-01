import { useState, useRef, useEffect } from "react";
import { VscSend } from "react-icons/vsc";
import { DashboardDokterLayout } from '../../../layouts/DashboardDokterLayout'
import useUser from "../../../stores/useStore.js";
import axios from "axios";


export const DokterChat = () => {
  const {user} = useUser();
  const [activeIndex, setActiveIndex] = useState(0);
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([])

  const [inputMessage, setInputMessage] = useState("");
  const [firstUserMessageSent, setFirstUserMessageSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [IsDokterTyping, setIsDokterTyping] = useState(false);
  const latestMessageRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (user?.id) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/dokter/${user.id}/users`
          );
          setUsers(response.data.data);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      }
    };
    fetchUsers();
  }, [user?.id]);

  const handleSendMessage = () => {

  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleDokterTyping = (e) => {
    setInputMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setIsDokterTyping(true);
    } else {
      setIsDokterTyping(false);
    }
  };
 
  return (
    <DashboardDokterLayout >
      <section className="min-h-screen">
        <div className="w-full bg-secondary-300 py-3 px-6">
          <h1 className="text-xl font-bold text-gray-800">Chat</h1>
        </div>

        <div className="flex h-auto">
          <div className="w-1/4 bg-white">
            {users && users.map((user, index) => (
              <div key={user.id}>
                <div
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 cursor-pointer ${activeIndex === index
                    ? "bg-gray-200 text-gray-900"
                    : "bg-white text-gray-900"
                    }`}
                >
                  <div className="relative flex items-center space-x-4">
                    <div className="size-16 overflow-hidden rounded-full border-2 border-primary-950">
                      <img
                        src={user.image_profile}
                        alt={`Foto user ${user.username}`}
                        className=" object-cover  "
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{user.username}</div>
                      <div className="text-xs text-gray-400">
                        {/* {user.tanggal} */}
                      </div>
                    </div>
                  </div>
                </div>
                {index < users.length - 1 && activeIndex !== index && (
                  <div className="h-[0.1px] bg-primary-950 mx-8 my-1" />
                )}
              </div>
            ))}
          </div>

          <div className="flex-1 h-[92.5vh] flex flex-col justify-between p-4 bg-gray-200">
            <div className="flex-grow space-y-4 overflow-y-auto p-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${message.sender === "user" ? "items-start" : "items-end"
                    }`}
                  ref={
                    index === messages.length - 1 ? latestMessageRef : null
                  }
                >
                  <div
                    className={`${message.sender === "user"
                      ? "bg-gray-800 text-white rounded-r-xl rounded-tl-xl"
                      : "bg-yellow-400 text-gray-900 rounded-l-xl rounded-tr-xl"
                      } p-3 max-w-md`}
                  >
                    {message.text}
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {message.time}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-2">
                  <div className=" bg-gray-800 text-white rounded-r-xl rounded-tl-xl p-3 max-w-md">
                    <TypingAnimation IsDokterTyping={false} />
                  </div>
                </div>
              )}

              {IsDokterTyping && (
                <div className="flex items-center space-x-2 justify-end">
                  <div className="bg-yellow-400 text-gray-900 rounded-l-xl rounded-tr-xl p-3 max-w-md">
                    <TypingAnimation IsDokterTyping={true} />
                  </div>
                </div>
              )}
            </div>

            <div className="p-0.5 flex items-center bg-white rounded-full mt-4">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={handleDokterTyping}
                  onKeyDown={handleKeyDown}
                  className="flex-grow px-6 text-lg border rounded-full focus:outline-none border-none"
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
    </DashboardDokterLayout>
  )
}

const TypingAnimation = ({ IsDokterTyping }) => {
  return (
    <div
      className={`flex space-x-1 ${IsDokterTyping ? "justify-end" : "justify-start"
        }`}
    >
      <span className="text-2xl animate-bounce">.</span>
      <span className="text-2xl animate-bounce delay-75">.</span>
      <span className="text-2xl animate-bounce delay-150">.</span>
    </div>
  );
};