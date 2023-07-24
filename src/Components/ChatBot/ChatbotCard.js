import React from "react";
import chatIcon from "../../assets/Cutie.png";

function ChatbotCard(props) {
  return (
    <div>
      <div className="d-flex justify-content-end" onClick={props.onToggle}>
        <i class="bi bi-x-lg"></i>
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <img src={chatIcon} className="img-fluid" height="35%" width="35%" />

        <p>Hi, I'm Embrace</p>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#C0D9FF" }}>
        <div className="container-fluid d-flex justify-content-end">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "auto",
              padding: "5px",
              margin: "5px",
              marginRight: "-8%",
            }}
          >
            <text>Hello</text>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "auto",
              padding: "5px",
              margin: "5px",
            }}
          >
            <text>Hello, Varun</text>
          </div>
        </div>
        <div className="row">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "auto",
              padding: "5px",
              margin: "5px",
            }}
          >
            <text>How can I help you?</text>
          </div>
        </div>
        <div className="row">
          <form className="form">
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
                style={{ border: "none", width: "75%" }}
              />
              <i class="bi bi-mic-fill me-3"></i>
              <i class="bi bi-send-fill"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatbotCard;
