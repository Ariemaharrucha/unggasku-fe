/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { VscSend } from "react-icons/vsc";
import { DashboardDokterLayout } from "../../../layouts/DashboardDokterLayout";
import useUser from "../../../stores/useStore.js";
import axios from "axios";
import socket from "../../../socket/socket.js";
import { format } from "date-fns";

export const DokterChat = () => {
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [IsDokterTyping, setIsDokterTyping] = useState(false);
  const latestMessageRef = useRef(null);

  // fetch pasien
  useEffect(() => {
    const fetchUsers = async () => {
      if (user?.id) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/dokter/${user.id}/users`
          );
          console.log(response.data.data);
          setUsers(response.data.data);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      }
    };
    fetchUsers();
  }, [user?.id]);

  // fetch message
  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser?.konsultasi_id) {
        try {
          setLoading(true);
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/messages/${
              selectedUser.konsultasi_id
            }`
          );
          setMessages(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.error("Failed to fetch messages:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMessages();
  }, [selectedUser?.konsultasi_id]);

  // socktet
  useEffect(() => {
    if (selectedUser?.konsultasi_id) {
      socket.emit("joinRoom", selectedUser.konsultasi_id);

      const handleReceiveMessage = (msg) => {
        console.log("Message received in frontend:", msg);
        setMessages((prev) => [...prev, msg]);
      };

      socket.on("receiveMessage", handleReceiveMessage);
      return () => {
        socket.off("receiveMessage", handleReceiveMessage);
      };
    }
  }, [selectedUser?.konsultasi_id]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim() !== "") {
      setIsDokterTyping(true);
    } else {
      setIsDokterTyping(false);
    }
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        konsultasiId: selectedUser.konsultasi_id,
        senderId: user.id,
        content: message,
      });
      setMessage("");
      setIsDokterTyping(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <DashboardDokterLayout>
      <section className="min-h-screen">
        <div className="w-full bg-secondary-300 py-3 px-6">
          <h1 className="text-xl font-bold text-gray-800">Chat</h1>
        </div>

        <div className="flex h-auto">
          <div className="w-1/4 bg-white">
            {users &&
              users.map((user, index) => (
                <div key={user.id}>
                  <div
                    onClick={() => {
                      if (selectedUser?.id !== user.id) {
                        setSelectedUser(user);
                        setMessages([]);
                        console.log(user);
                      }
                    }}
                    className={`cursor-pointer px-4 py-2 ${
                      selectedUser?.id === user.id ? "bg-gray-200" : "bg-white"
                    }`}
                  >
                    <div className=" flex items-center gap-2">
                      <div className="size-16 overflow-hidden rounded-full">
                        <img
                          src={user.image_profile}
                          alt={`Foto user ${user.username}`}
                          className=" object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold ">{user.username}</div>
                        <div className="text-xs text-gray-400">
                          {/* {user.tanggal} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* chat */}
          <div className="flex-1 h-[92.5vh] flex flex-col justify-between p-4 bg-gray-200">
            <div className="flex-grow space-y-4 overflow-y-auto p-2">
              {loading ? (
                <p>Loading messages...</p>
              ) : (
                <>
                  {messages &&
                    messages.map((message, index) => {
                      const tanggal =
                        index === 0 ||
                        new Date(messages[index].sent_at).toDateString() !==
                          new Date(messages[index - 1].sent_at).toDateString();

                      return (
                        <div key={index}>
                          {tanggal && (
                            <div className="text-center text-gray-500 text-sm my-2">
                              {format(
                                new Date(message.sent_at),
                                "EEEE, dd MMMM yyyy"
                              )}
                            </div>
                          )}

                          <div
                            className={`flex flex-col ${
                              message.senderId !== user.id
                                ? "items-start"
                                : "items-end"
                            }`}
                            ref={
                              index === messages.length - 1
                                ? latestMessageRef
                                : null
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
                        </div>
                      );
                    })}
                  {IsDokterTyping && (
                    <div className="flex items-center space-x-2 justify-end">
                      <div className="bg-gray-800 text-white rounded-l-xl rounded-tr-xl p-3 max-w-md">
                        <TypingAnimation IsDokterTyping={true} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {selectedUser ? (
              <div className="p-0.5 flex items-center bg-white rounded-full mt-4">
                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleMessage}
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
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <p className="text-xl font-medium">
                  Pilih user untuk mulai chat
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </DashboardDokterLayout>
  );
};

const TypingAnimation = ({ IsDokterTyping }) => {
  return (
    <div
      className={`flex space-x-1 ${
        IsDokterTyping ? "justify-end" : "justify-start"
      }`}
    >
      <span className="text-2xl animate-bounce">.</span>
      <span className="text-2xl animate-bounce delay-75">.</span>
      <span className="text-2xl animate-bounce delay-150">.</span>
    </div>
  );
};
