import React from "react";

function Media() {
  return (
    <div
      style={{
        width: "40vw",
        backgroundColor: "white",

        borderRadius: "5px",
        padding: "15px",
        paddingBottom: "12px",
      }}
    >
      <div className="row ms-2 align-items-center">
        <div className="col-1">
          <i style={{ fontSize: "35px" }} class="bi bi-person-circle"></i>
        </div>
        <div className="col-4" style={{ paddingTop: "10px" }}>
          <p style={{ fontSize: "20px" }}>Varun Ingle</p>
          <p style={{ fontSize: "10px", marginTop: "-20px" }}>15 mins ago</p>
        </div>
        <div className="col-7">
          <i
            class="bi bi-three-dots"
            style={{ fontSize: "20px", marginLeft: "90%" }}
          ></i>
        </div>
      </div>
      <p className="ms-3">Any Description</p>
      <div
        style={{
          backgroundColor: "#E9F2FF",
          padding: "14%",

          textAlign: "center",
          alignContent: "center",
          height: "25vh",
        }}
      >
        <text>Any Image</text>
      </div>
    </div>
  );
}

export default Media;
