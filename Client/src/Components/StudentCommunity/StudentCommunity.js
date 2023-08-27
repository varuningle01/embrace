import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Media from "../Media/Media";
import PostCard from "./PostCard";
import Chatbot from "../ChatBot/ChatBot";
import { useState, useEffect } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

function StudentCommunity() {
  const myStyles = {
    height: "80vh",

    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE and Edge */,
    overflow: "-moz-scrollbars-none" /* Firefox */,
    overflow: "-webkit-scrollbars-none display-none" /* Safari and Chrome */,
    /* Safari and Chrome */
    overflow: "scroll",
    /* needed to make the scrollbar appear in Firefox */
    WebkitOverflowScrolling:
      "touch" /* optional: improve scrolling performance on mobile */,
  };
  const [posts, setPosts] = useState([]);
  const fetchPosts = () => {
    axios.get("http://127.0.0.1:5000/api/community").then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <Chatbot />
      <div className="row ">
        <div className="col-3 me-5">
          <div
            className="col-6 w-100"
            style={{ marginLeft: "6%", marginTop: "10px" }}
          >
            <PostCard updatePosts={fetchPosts} />
          </div>
          <div className="col-6 w-100 ms-5">
            <Player
              autoplay
              loop
              src="https://lottie.host/d2fdfe86-83f1-417b-b706-90ed2f133450/ikzraLeLuf.json"
              style={{
                height: "80%",
                width: "80%",
                // marginRight: "20%",
                // marginTop: "-10%",
              }}
            ></Player>
          </div>
        </div>

        <div
          className="container-fluid col-5"
          style={
            ({
              backgroundColor: "#ECDCFF",
              width: "auto",
              margin: "2%",
              height: "100%",
              boxShadow: "0px 0px 15px rgba(204, 199, 199, 0.25)",
            },
            myStyles)
          }
        >
          <Media posts={posts} />
        </div>
        <div className="container col-3">
          <Player
            autoplay
            loop
            src="https://lottie.host/b9963384-9b13-42ae-9f71-cdf73b5f87f1/cY8lKDbpZK.json"
            style={{
              height: "80%",
              width: "80%",
              // marginRight: "20%",
              marginTop: "30%",
            }}
          ></Player>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentCommunity;
