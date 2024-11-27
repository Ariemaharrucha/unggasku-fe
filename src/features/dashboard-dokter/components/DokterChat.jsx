import { useState, useRef, useEffect } from "react";
import { VscSend } from "react-icons/vsc";
import { DashboardDokterLayout } from '../../../layouts/DashboardDokterLayout'

  const UserUnggas = [
    {
      nama: "Rina Suryani",
      konsultasi: "Unggas tidak nafsu makan dan terlihat lemas.",
      tanggal: "23 Oktober 2024",
      foto: "https://images.pexels.com/photos/4911743/pexels-photo-4911743.jpeg",
    },
    {
      nama: "Budi Santoso",
      konsultasi: "Masalah pada kulit ayam ternak, terlihat bercak merah.",
      tanggal: "23 Oktober 2024",
      foto: "https://images.pexels.com/photos/7781987/pexels-photo-7781987.jpeg",
    },
    {
      nama: "Siti Nurhaliza",
      konsultasi: "Produksi telur menurun, apakah masalah dari pakan?",
      tanggal: "23 Oktober 2024",
      foto: "https://images.pexels.com/photos/11371831/pexels-photo-11371831.jpeg",
    },
    {
      nama: "Andi Wijaya",
      konsultasi: "Lingkungan kandang terlihat lembap, ayam sering bersin.",
      tanggal: "24 Oktober 2024",
      foto: "https://images.pexels.com/photos/10141309/pexels-photo-10141309.jpeg",
    },
  ];

export const DokterChat = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [messages, setMessages] = useState([
    {
      text: "Halo, Dok! Ada beberapa ayam saya yang kelihatannya tidak sehat, kok lemas dan gak mau makan?",
      sender: "user",
      time: getCurrentTime(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [firstUserMessageSent, setFirstUserMessageSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [IsDokterTyping, setIsDokterTyping] = useState(false);
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
      const newMessage = {
        text: inputMessage,
        sender: "dokter",
        time: getCurrentTime(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
      setIsDokterTyping(false);

      if (!firstUserMessageSent) {
        setFirstUserMessageSent(true);
        setIsTyping(true);

        setTimeout(() => {
          const userResponse = {
            text: "Tidak ada batuk, tapi ada yang sedikit diare.",
            sender: "user",
            time: getCurrentTime(),
          };
          setMessages((prevMessages) => [...prevMessages, userResponse]);
          setIsTyping(false);
        }, 1000);
      }
    }
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

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages]);
  return (
    <DashboardDokterLayout >
      <section className="min-h-screen">
        <div className="w-full bg-secondary-300 py-3 px-6">
          <h1 className="text-xl font-bold text-gray-800">Chat</h1>
        </div>

        <div className="flex h-auto">
          <div className="w-1/4 bg-white">
            {UserUnggas.map((user, index) => (
              <div key={index}>
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
                        src={user.foto}
                        alt={`Foto user ${user.nama}`}
                        className=" object-cover  "
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{user.nama}</div>
                      <div className="text-xs text-gray-400">
                        {user.tanggal}
                      </div>
                    </div>
                  </div>
                </div>
                {index < UserUnggas.length - 1 && activeIndex !== index && (
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