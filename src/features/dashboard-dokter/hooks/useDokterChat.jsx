import { useState, useEffect, useRef } from "react";
import socket from "../../../socket/socket.js";
import { getMessages, getUsers } from "../services/api.dokterChat.js";

export const useDokterChat = (user) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [IsDokterTyping, setIsDokterTyping] = useState(false);
  const latestMessageRef = useRef(null);

  // Fetch users (patients)
  useEffect(() => {
    const fetchUsers = async () => {
      if (user?.id) {
        try {
          const response = await getUsers(user?.id)
          setUsers(response);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      }
    };
    fetchUsers();
  }, [user?.id]);

  // Fetch messages when a user is selected
  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser?.konsultasi_id) {
        try {
          setLoading(true);
          const response = await getMessages(selectedUser.konsultasi_id);
          setMessages(response);
        } catch (error) {
          console.error("Failed to fetch messages:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMessages();
  }, [selectedUser?.konsultasi_id]);

  // Socket logic for receiving messages
  useEffect(() => {
    if (selectedUser?.konsultasi_id) {
      socket.emit("joinRoom", selectedUser.konsultasi_id);

      const handleReceiveMessage = (msg) => {
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

  // Scroll to the latest message
  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages]);

  return {
    message,
    setMessage,
    messages,
    users,
    selectedUser,
    setSelectedUser,
    loading,
    IsDokterTyping,
    handleSendMessage,
    handleMessage,
    handleKeyDown,
    latestMessageRef,
  };
};
