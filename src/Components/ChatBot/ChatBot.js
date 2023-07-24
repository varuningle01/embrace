import React, { useState } from "react";
import chatIcon from "../../assets/Cutie.png";
import ChatbotCard from "./ChatbotCard";

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div style={{ position: "relative" }}>
      {!showChat && (
        <div
          onClick={toggleChat}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            height: "100px",

            // padding: "10px",
          }}
        >
          {/* <i className="fa fa-comment-alt"></i> */}
          <img
            src={chatIcon}
            className="img-fluid"
            height="70px"
            width="70px"
          />
          <div
            style={{ backgroundColor: "orange", height: "60px", width: "auto" }}
          ></div>
        </div>
      )}
      {/* Chat window */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "20px",
            width: "300px",
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          <ChatbotCard
            onToggle={() => {
              toggleChat();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
