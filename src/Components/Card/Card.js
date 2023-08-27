import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Card(props) {
  return (
    <div
      onClick={props.onclick}
      className="container w-75 h-100 justify-content-end"
      style={{
        boxShadow:
          "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderRadius: "30px",
      }}
    >
      {/* <img
        className="img-fluid"
        src={props.data.img}
        alt=".."
        style={{ width: "50%", height: "50%" }}
      /> */}
      <Player
        autoplay
        loop
        src={props.data.img}
        style={{
          height: "120%",
          width: "65%",
          // marginRight: "20%",
          // marginTop: "-10%",
        }}
      ></Player>
      <br />
      <p style={{ fontSize: "150%" }}>{props.data.text}</p>
    </div>
  );
}

export default Card;
