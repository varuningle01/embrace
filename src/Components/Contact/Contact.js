import React from "react";
import Navbar from "../Navbar/Navbar";
import address from "../../assets/address2.png";
import contact from "../../assets/contact2.png";
import email from "../../assets/email2.png";
import website from "../../assets/website2.png";
import Footer from "../Footer/Footer";
import Chatbot from "../ChatBot/ChatBot";

function Contact() {
  return (
    <div>
      <Navbar />
      <Chatbot />
      <div className="row m-5">
        <div className="col" style={{ marginLeft: "10%" }}>
          <div
            className="container-fluid"
            style={{
              height: "250px",
              width: "250px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              borderRadius: "30px",
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "column",
              justifyContent: "space-around",
              alignContent: "space-between",
              padding: "30px",
            }}
          >
            <img
              src={address}
              style={{
                width: "105px",
                height: "105px",
                alignContent: "center",
                margin: "0 auto",
              }}
            />
            <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Address</h3>
            <p style={{ fontSize: "16px", textAlign: "center" }}>
              Phase 3, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057
            </p>
          </div>
        </div>
        <div className="col" style={{ marginRight: "15%" }}>
          <div
            className="container-fluid"
            style={{
              height: "250px",
              width: "250px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              borderRadius: "30px",
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "column",
              justifyContent: "space-around",
              alignContent: "space-between",
              padding: "30px",
            }}
          >
            <img
              src={contact}
              style={{
                width: "105px",
                height: "105px",
                alignContent: "center",
                margin: "0 auto",
              }}
            />
            <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Contact</h3>
            <p style={{ fontSize: "16px", textAlign: "center" }}>
              +91 7276886593
            </p>
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col" style={{ marginLeft: "10%" }}>
          <div
            className="container-fluid"
            style={{
              height: "250px",
              width: "250px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              borderRadius: "30px",
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "column",
              justifyContent: "space-around",
              alignContent: "space-between",
              padding: "30px",
            }}
          >
            <img
              src={email}
              style={{
                width: "105px",
                height: "105px",
                alignContent: "center",
                margin: "0 auto",
              }}
            />
            <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Email</h3>
            <p style={{ fontSize: "16px", textAlign: "center" }}>
              cognizant@gmail.com
            </p>
          </div>
        </div>
        <div className="col" style={{ marginRight: "15%" }}>
          <div
            className="container-fluid"
            style={{
              height: "250px",
              width: "250px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              borderRadius: "30px",
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: "column",
              justifyContent: "space-around",
              alignContent: "space-between",
              padding: "30px",
            }}
          >
            <img
              src={website}
              style={{
                width: "105px",
                height: "105px",
                alignContent: "center",
                margin: "0 auto",
              }}
            />
            <h3 style={{ textAlign: "center", fontWeight: "bold" }}>Website</h3>
            <p style={{ fontSize: "16px", textAlign: "center" }}>
              www.cognizant.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
