import React from "react";

function Card(props) {
  return (
    <div
      onClick={props.onclick}
      className="container w-75"
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
      <img
        className="img-fluid"
        src={props.data.img}
        alt=".."
        style={{ width: "50%", height: "50%" }}
      />
      <br />
      <p style={{ fontSize: "150%" }}>{props.data.text}</p>
    </div>
  );
}

export default Card;
