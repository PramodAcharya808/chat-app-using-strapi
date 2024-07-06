// src/components/Chat.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch initial messages from API or WebSocket
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:1337/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = async () => {
    try {
      await axios.post("http://localhost:1337/messages", {
        content: newMessage,
        sender: "currentUserId", // Replace with actual sender ID
        timestamp: new Date(),
      });
      // Update UI or fetch new messages
      fetchMessages();
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id}>
            <p>
              {message.sender}: {message.content}
            </p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
