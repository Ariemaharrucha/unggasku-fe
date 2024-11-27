import { useState, useRef, useEffect } from "react";
import { VscSend } from "react-icons/vsc";
import { Navbar } from "../../../components/shared/Navbar.jsx";


const DokterList = [
  {
    nama: "Dr. Stefanus Fandi W",
    tanggal: "23 Oktober 2024",
    foto: "/src/assets/Images/layanan/dr_card1.jpeg",
  },
  {
    nama: "Dr. Ahmad syariffudin",
    tanggal: "23 Oktober 2024",
    foto: "/src/assets/Images/layanan/dr_card2.jpeg",
  },
  {
    nama: "Dr. Candra dewi",
    tanggal: "23 Oktober 2024",
    foto: "/src/assets/Images/layanan/dr_card3.jpeg",
  },
];

export const Konsultasi = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [messages, setMessages] = useState([
    {
      text: "Halo, apakah ada yang bisa saya bantu?",
      sender: "dokter",
      time: getCurrentTime(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [firstUserMessageSent, setFirstUserMessageSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const latestMessageRef = useRef(null);

  // Fungsi untuk mendapatkan waktu saat ini
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  // Fungsi untuk mengirim pesan
  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        text: inputMessage,
        sender: "user",
        time: getCurrentTime(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
      setIsUserTyping(false);

      if (!firstUserMessageSent) {
        setFirstUserMessageSent(true);
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

  // Fungsi untuk mendeteksi tombol Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  // Fungsi untuk menangani perubahan input pengguna dan menampilkan animasi mengetik
  const handleUserTyping = (e) => {
    setInputMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setIsUserTyping(true);
    } else {
      setIsUserTyping(false);
    }
  };

  // Fungsi untuk melakukan scroll ke pesan terbaru
  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages]);

  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>
        <section className="min-h-screen">
          <div className="w-full bg-secondary-300 py-3 px-6">
            <h1 className="text-xl font-bold text-gray-800">Chat</h1>
          </div>

          <div className="flex h-screen">
            <div className="w-1/4 bg-white">
              {DokterList.map((dokter, index) => (
                <div key={index}>
                  <div
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 py-2 cursor-pointer ${
                      activeIndex === index
                        ? "bg-gray-200 text-gray-900"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    <div className="relative flex items-center space-x-4">
                      <div className="size-16 overflow-hidden rounded-full border-2 border-primary-950">
                        <img
                          src={dokter.foto}
                          alt={`Foto dokter ${dokter.nama}`}
                          className=" object-cover  "
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{dokter.nama}</div>
                        <div className="text-xs text-gray-400">
                          {dokter.tanggal}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < DokterList.length - 1 && activeIndex !== index && (
                    <div className="h-[0.1px] bg-primary-950 mx-8 my-1" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex-1 flex flex-col justify-between p-4 bg-gray-200">
              <div className="flex-grow space-y-4 overflow-y-auto ">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      message.sender === "dokter" ? "items-start" : "items-end"
                    }`}
                    ref={
                      index === messages.length - 1 ? latestMessageRef : null
                    }
                  >
                    <div
                      className={`${
                        message.sender === "dokter"
                          ? "bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl"
                          : "bg-gray-800 text-white rounded-l-xl rounded-tr-xl"
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
                    <div className="bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl p-3 max-w-md">
                      <TypingAnimation isUserTyping={false} />
                    </div>
                  </div>
                )}

                {isUserTyping && (
                  <div className="flex items-center space-x-2 justify-end">
                    <div className="bg-gray-800 text-white rounded-l-xl rounded-tr-xl p-3 max-w-md">
                      <TypingAnimation isUserTyping={true} />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-0.5 flex items-center bg-white rounded-full">
                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={handleUserTyping}
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
      </>
    </div>
  );
};

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
