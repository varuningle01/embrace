import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Media from "../Media/Media";
import PostCard from "./PostCard";
import Chatbot from "../ChatBot/ChatBot";

function StudentCommunity() {
  return (
    <div>
      <Navbar />
      <Chatbot />
      <div className="row">
        <div className="col-3" style={{ marginLeft: "6%" }}>
          <PostCard />
        </div>
        <div
          className="containercol-8"
          style={{
            backgroundColor: "#ECDCFF",
            width: "auto",
            padding: "2%",
            height: "100%",
            marginLeft: "4%",
            boxShadow: "0px 0px 15px rgba(204, 199, 199, 0.25)",
          }}
        >
          <Media />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentCommunity;
