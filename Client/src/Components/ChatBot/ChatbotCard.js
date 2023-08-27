// import React from "react";
// import chatIcon from "../../assets/Cutie.png";

// function ChatbotCard(props) {
//   return (
//     <div>
//       <div className="d-flex justify-content-end" onClick={props.onToggle}>
//         <i class="bi bi-x-lg"></i>
//       </div>
//       <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
//         <img src={chatIcon} className="img-fluid" height="35%" width="35%" />

//         <p>Hi, I'm Embrace</p>
//       </div>
//       <div className="container-fluid" style={{ backgroundColor: "#C0D9FF" }}>
//         <div className="container-fluid d-flex justify-content-end">
//           <div
//             style={{
//               backgroundColor: "white",
//               borderRadius: "5px",
//               width: "auto",
//               padding: "5px",
//               margin: "5px",
//               marginRight: "-8%",
//             }}
//           >
//             <text>Hello</text>
//           </div>
//         </div>
//         <div className="row">
//           <div
//             style={{
//               backgroundColor: "white",
//               borderRadius: "5px",
//               width: "auto",
//               padding: "5px",
//               margin: "5px",
//             }}
//           >
//             <text>Hello, Varun</text>
//           </div>
//         </div>
//         <div className="row">
//           <div
//             style={{
//               backgroundColor: "white",
//               borderRadius: "5px",
//               width: "auto",
//               padding: "5px",
//               margin: "5px",
//             }}
//           >
//             <text>How can I help you?</text>
//           </div>
//         </div>
//         <div className="row">
//           <form className="form">
//             <div
//               style={{
//                 backgroundColor: "white",
//                 borderRadius: "10px",
//                 padding: "5px",
//                 marginLeft: "-3%",
//                 margin: "5px",
//               }}
//             >
//               <input
//                 className="search"
//                 placeholder="  Type Here"
//                 style={{ border: "none", width: "75%" }}
//               />
//               <i class="bi bi-mic-fill me-3"></i>
//               <i class="bi bi-send-fill"></i>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatbotCard;
import React, { useState } from "react";
import chatIcon from "../../assets/Cutie.png";

function ChatbotCard(props) {
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hi, I'm Embrace" },
    { type: "bot", message: "Hello! How can I assist you?" },
  ]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    // Add user's message to chatMessages
    const userMessage = { type: "user", message: inputMessage };
    setChatMessages([...chatMessages, userMessage]);
    setInputMessage("");

    // Simulate bot response after a brief delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setChatMessages([...chatMessages, botResponse]);
    }, 800);
  };

  const getBotResponse = (userMessage) => {
    // Hardcoded bot responses based on user's input
    const lowerCaseMessage = userMessage.toLowerCase();
    let botMessage;

    if (lowerCaseMessage.includes("grievance")) {
      botMessage = {
        type: "bot",
        message: "Sure, I can help you with grievances. What's your concern?",
      };
    } else if (lowerCaseMessage.includes("status")) {
      botMessage = {
        type: "bot",
        message:
          "To check your grievance status, please provide your grievance ID.",
      };
    } else if (lowerCaseMessage.includes("contact")) {
      botMessage = {
        type: "bot",
        message:
          "You can contact the support team at support@example.com or call 123-456-7890.",
      };
    } else {
      botMessage = {
        type: "bot",
        message:
          "I'm sorry, I didn't understand. Could you please rephrase your question?",
      };
    }

    return botMessage;
  };

  return (
    <div>
      <div className="d-flex justify-content-end" onClick={props.onToggle}>
        <i className="bi bi-x-lg"></i>
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <img
          src={chatIcon}
          className="img-fluid"
          height="35%"
          width="35%"
          alt="Chat Icon"
        />
        <p>Hi, I'm Embrace</p>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#C0D9FF" }}>
        {chatMessages.map((message, index) => (
          <div key={index} className={`row ${message.type}`}>
            <div className="message-box">
              <text>{message.message}</text>
            </div>
          </div>
        ))}
        <div className="row">
          <form className="form" onSubmit={handleSendMessage}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "5px",
                marginLeft: "-3%",
                margin: "5px",
              }}
            >
              <input
                className="search"
                placeholder="  Type Here"
                style={{ border: "none", width: "75%", outline: "none" }}
                value={inputMessage}
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="btn btn-link bi bi-send-fill"
              ></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatbotCard;
