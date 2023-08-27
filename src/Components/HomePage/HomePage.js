import React from "react";
import Navbar from "../Navbar/Navbar";
import GrievanceForm from "../Form/GrievanceForm";
import homeimg from "../../assets/Layer 1 1.png";
import img1 from "../../assets/mental-health 1.png";
import img2 from "../../assets/fees 1.png";
import img3 from "../../assets/lost-and-found 1.png";
import img4 from "../../assets/public-transport 1.png";
import img5 from "../../assets/stop-violence 1.png";
import img6 from "../../assets/study 1.png";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Chatbot from "../ChatBot/ChatBot";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function HomePage() {
  const data = [
    {
      img: "https://lottie.host/ff5261f8-34b5-4f2f-9df4-1be87fbf74de/wVC0GeHR2U.json",
      text: "Mental Health Support",
    },
    {
      img: "https://lottie.host/f95fcd24-6b34-490c-99b0-32074d5b5223/HdvWOakeCa.json",
      text: "Fees Related Issues",
    },
    {
      img: "https://lottie.host/3ed001c8-2ad1-4162-b57b-433a5eee3c4f/YMZvgBxDeR.json",
      text: "Lost and Found",
    },
    {
      img: "https://lottie.host/a8ba537a-0d99-4f8f-b0bb-44de53089ba5/pUWVScc3p1.json",
      text: "Transportation Issues",
    },
    {
      img: "https://lottie.host/8b01e473-fb73-46ba-87dc-f34020cfe7bb/j5pb7MA4AW.json",
      text: "Anti Ragging",
    },
    {
      img: "https://lottie.host/f6b7d1c5-b71b-45bf-9691-ead01270c1bd/UGw31ecQO4.json",
      text: "Lab Issues",
    },
  ];
  const navigate = useNavigate();
  const handleMentalHealthSupportClick = () => {
    navigate("/mentalhealthsupport");
  };
  const handleFeeRelatedIssuesClick = () => {
    navigate("/feerelatedissues");
  };
  const handleLostAndFoundClick = () => {
    navigate("/lostandfound");
  };
  const handleTransportationIssuesClick = () => {
    navigate("/transportationissues");
  };
  const handleAntiRaggingClick = () => {
    navigate("/antiragging");
  };
  const handleLabIssuesIssuesClick = () => {
    navigate("/labissues");
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <Chatbot />
      <div className="row">
        <div className=" col-6" style={{ marginLeft: "6%" }}>
          <p>
            This Web Application is developed to provide students with a
            platform where an easy, user-friendly interface serves the purpose
            of lodging complaints in a more formal pattern.
          </p>
          <p>
            It allows users to put forward their grievances belonging to any of
            the specified categories either academic or non-academic. The
            college admin would then review the lodged complaints and solve the
            issues accordingly in the best interest of the student.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <GrievanceForm />
        </div>
        <div className="col-5">
          {/* <img src={homeimg} className="img-fluid" /> */}
          <Player
            autoplay
            loop
            src="https://lottie.host/a3ec7fc9-d291-455c-96a2-9eee8d19d62f/jYJBDJmaHw.json"
            style={{
              height: "auto",
              width: "auto",
              // marginRight: "20%",
              // marginTop: "-10%",
            }}
          ></Player>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <p style={{ fontSize: "48px", marginLeft: "4%" }}>Know More:</p>
        <div className="row mb-5">
          <div className="col-4">
            <Card
              data={data[0]}
              onclick={() => handleMentalHealthSupportClick()}
            />
          </div>
          <div className="col-4">
            <Card
              data={data[1]}
              onclick={() => handleFeeRelatedIssuesClick()}
            />
          </div>
          <div className="col-4">
            <Card data={data[2]} onclick={() => handleLostAndFoundClick()} />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-4">
            <Card
              data={data[3]}
              onclick={() => handleTransportationIssuesClick()}
            />
          </div>
          <div className="col-4">
            <Card data={data[4]} onclick={() => handleAntiRaggingClick()} />
          </div>
          <div className="col-4">
            <Card data={data[5]} onclick={() => handleLabIssuesIssuesClick()} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
