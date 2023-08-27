import React from "react";
import GrievanceForm from "../Form/GrievanceForm";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Faq from "react-faq-component";
import dropIcon from "../../assets/DropDown.png";
import Chatbot from "../ChatBot/ChatBot";

function LostAndFound() {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "1. What should I do if I have lost a piece of property?",
        content: `If you lost property on the  Campus, please contect your class incharge to check if it has been turned in.<br/>
            If you believe you lost an item in a library or a building with a front desk, we encourage you to go to that front desk and see if it has been turned in.<br/>
            All items turned into Campus Safety as "lost property" will be kept for 90 days.  After that time items are donated to various charities or destroyed.  
            `,
      },
      {
        title: "2. How do I acquire my lost item?",
        content:
          "Come to our Exam cell office and describe your lost item as best you can and the time that you lost it. We will search through our inventory and inform you if we have your lost item. You’re required to show a picture ID and sign the item out.",
      },
      {
        title: "3. When do you usually receive lost items?",
        content:
          "We usually receive the previous’ days lost items on campus before 9 a.m. each morning.",
      },
      {
        title: "4. I lost my ID. What should I do?",
        content:
          "You should immediately report the loss of a card so that it can be deactivated to prevent any unauthorized use of the card. this can be done by going to the Campus Card office.",
      },
    ],
  };

  const styles = {
    bgColor: "white",
    titleTextColor: "black",
    titleTextSize: "40px",
    rowTitleColor: "black",
    rowTitleTextSize: "large",
    rowContentColor: "black",
    rowContentTextSize: "15px",
    rowContentPaddingTop: "10px",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
    rowContentPaddingRight: "150px",
    arrowColor: "purple",
    transitionDuration: "0.4s",
    timingFunc: "ease",
  };

  const config = {
    animate: true,
    arrowIcon: <img src={dropIcon} />,
  };
  return (
    <div>
      <Navbar />
      <Chatbot />
      <div>
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            marginLeft: "6%",
            marginTop: "40px",
          }}
        >
          Lost and Found
        </h2>
        <p
          style={{
            textAlign: "left",
            padding: "15px",
            fontSize: "25px",
            marginLeft: "5%",
          }}
        >
          In this section, you can post queries regarding any lost and/or found
          item in the college premises. Provide the description of the item lost
          or found to ensure it reaches the rightful owner. Considering your
          reported enquiry/query, the administration would get back to you.
        </p>
      </div>
      <div style={{ marginLeft: "-50%", marginBottom: "5%" }}>
        <GrievanceForm />
      </div>
      <div style={{ marginLeft: "6%", marginRight: "6%" }}>
        <Faq data={data} styles={styles} config={config} />
      </div>
      <Footer />
    </div>
  );
}

export default LostAndFound;
