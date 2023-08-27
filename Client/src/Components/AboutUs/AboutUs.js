import React from "react";
import Navbar from "../Navbar/Navbar";
import aboutus from "../../assets/aboutus.jpg";
import Footer from "../Footer/Footer";
import Chatbot from "../ChatBot/ChatBot";
import { Player } from "@lottiefiles/react-lottie-player";
function AboutUs() {
  return (
    <div>
      <Navbar />
      <Chatbot />
      <p style={{ fontSize: "40px", marginLeft: "6%" }}>About Us</p>
      <div className="row container-fluid align-items-center">
        <div className="col-5 p-5 pt-0 ms-5" style={{ fontSize: "20px" }}>
          <p>
            Dear Students, While the institution strives to establish an
            environment for you all to be able to pursue your path of education
            without any difficulties, we are mindful of the fact, that sometimes
            due to the sheer magnitude of operations or even lack of
            information, you do occasionally face problems. Thus, to facilitate,
            a base for communication, &lt;em&gt;brace, a platform to brace all
            your, academic and non-academic queries.
          </p>
          <p>
            Our objective is to redress all your queries and provide each
            student with a support system.
          </p>
        </div>
        <div className="col-6 ms-5">
          {/* <img src={aboutus} /> */}
          <Player
            autoplay
            loop
            src="https://lottie.host/436a5291-3192-42ab-bef2-927c3e39034a/7fJU1GmvOE.json"
            style={{
              height: "auto",
              width: "auto",
              marginRight: "20%",
              // marginTop: "-10%",
            }}
          ></Player>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
