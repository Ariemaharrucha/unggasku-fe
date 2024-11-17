import React, { useState, useRef, useEffect } from "react";
import { Layout } from "../../layouts/Layout";
import { VscSend } from "react-icons/vsc";

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
    { text: "Halo, apakah ada yang bisa saya bantu?", sender: "dokter", time: getCurrentTime() },
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
      const newMessage = { text: inputMessage, sender: "user", time: getCurrentTime() };
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
      latestMessageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages])

  return (
    <div>
      <Layout>
        <section className="h-screen flex flex-col">
          <div className="w-full bg-secondary-300 py-4 px-6">
            <h1 className="text-2xl font-bold text-gray-800">Chat</h1>
          </div>

          {/* Sidebar untuk daftar dokter */}
          <div className="flex flex-grow">
            <div className="w-1/3 bg-white">
              {DokterList.map((dokter, index) => (
                <div key={index}>
                  <div
                    onClick={() => setActiveIndex(index)}
                    className={`p-4 cursor-pointer ${activeIndex === index ? "bg-gray-200 text-gray-900" : "bg-white text-gray-900"
                      }`}
                  >
                    <div className="relative flex items-center space-x-4">
                      <img
                        src={dokter.foto}
                        alt={`Foto dokter ${dokter.nama}`}
                        className="w-20 h-20 object-cover object-top rounded-full border-2 border-primary-950"
                      />
                      <span
                        className={`absolute bottom-2 left-7 w-4 h-4 rounded-full ${index !== DokterList.length - 1 ? "bg-green-500" : "bg-red-600"
                          } border-2 border-white translate-x-2 translate-y-2`}
                      ></span>
                      <div>
                        <div className="font-semibold">{dokter.nama}</div>
                        <div className="text-xs text-gray-400">{dokter.tanggal}</div>
                      </div>
                    </div>
                  </div>
                  {index < DokterList.length - 1 && activeIndex !== index && (
                    <div className="h-[0.1px] bg-primary-950 mx-8 my-1" />
                  )}
                </div>
              ))}
            </div>

            {/* Area chat dengan scrollable */}
            <div className="w-2/3 flex flex-col bg-gray-200">
              <div className="flex-grow p-6 space-y-4 overflow-y-auto max-h-[83vh]">
                {/* Tampilkan pesan */}
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${message.sender === "dokter" ? "items-start" : "items-end"}`}
                    ref={index === messages.length - 1 ? latestMessageRef : null}
                  >
                    <div
                      className={`${message.sender === "dokter"
                        ? "bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl"
                        : "bg-gray-800 text-white rounded-l-xl rounded-tr-xl"
                        } p-3 max-w-md`}
                    >
                      {message.text}
                    </div>
                    <span className="text-xs text-gray-500 mt-1">{message.time}</span>
                  </div>
                ))}

                {/* Animasi mengetik untuk dokter */}
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

              {/* Input area tetap di bawah */}
              <div className="p-1 mx-6 flex items-center bg-white rounded-full">
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
      </Layout>
    </div>
  );
};

const TypingAnimation = ({ isUserTyping }) => {
  return (
    <div className={`flex space-x-1 ${isUserTyping ? 'justify-end' : 'justify-start'}`}>
      <span className="text-2xl animate-bounce">.</span>
      <span className="text-2xl animate-bounce delay-75">.</span>
      <span className="text-2xl animate-bounce delay-150">.</span>
    </div>
  );
};
