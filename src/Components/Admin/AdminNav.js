import React from "react";
import embrace_logo from "../../assets/_em_brace.png";

function AdminNav() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-start"
      style={{ paddingLeft: "4%" }}
    >
      <div className="navbar" style={{ width: "20%" }}>
        <img
          className="img-fluid"
          src={embrace_logo}
          style={{ paddingLeft: "2%" }}
        />
      </div>
      <text
        className="navbar ms-5"
        style={{ fontSize: "30px", marginTop: "5px" }}
      >
        Welcome, Sharmila Charles
      </text>
      <i
        style={{ fontSize: "40px", marginLeft: "30%" }}
        class="bi bi-person-circle"
      ></i>
      <i
        style={{ fontSize: "40px", marginLeft: "5%", color: "red" }}
        class="bi bi-power"
      ></i>
    </div>
  );
}

export default AdminNav;
