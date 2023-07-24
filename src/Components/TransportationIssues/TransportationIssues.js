import React from "react";
import GrievanceForm from "../Form/GrievanceForm";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Faq from "react-faq-component";
import dropIcon from "../../assets/DropDown.png";
import Chatbot from "../ChatBot/ChatBot";

function TransportationIssues() {
  const data = {
    title: "FAQ",
    rows: [
      {
        title:
          "1. What type of transport facility is provided to the students for their location?",
        content:
          "The college provides Bus Facility to students for various routes, information of which is provided on the college website.",
      },
      {
        title: "2. How can the Bus Facility be Availed?",
        content:
          "For availing of bus facilities, students must fill a form providing necessary information to the college to get their bus cards printed. For further details, contact the office reception.",
      },
      {
        // title: "3. How much is the transport fee for 1st-year students?",
        // content: "The Bus fee is ₹12,000 for all the students of the college.",
        title: "3. Can the transport facility be withdrawn?",
        content:
          "No, once availed and paid for, the transport facility cannot be withdrawn unless a relevant excuse is provided.",
      },
      {
        title: "4. Can the transport fee be deposited in parts?",
        content:
          "The bus fee can be deposited in two installments for each semester, i.e., of ₹6,000 each.",
      },
      {
        title: "5. What will be the mode of payment for the transport fee?",
        content:
          "The transport fee can only be paid in two modes, i.e., cash and/or cheque.",
      },
      {
        title:
          "6. What document will be issued to the students after depositing transport charges?",
        content:
          "A bus card, which acts as an identity card would be provided to students which they must carry at all times while traveling on the bus.",
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
          Transportation Issues
        </h2>
        <p
          style={{
            textAlign: "left",
            padding: "15px",
            fontSize: "25px",
            marginLeft: "5%",
          }}
        >
          In this section, you can post queries regarding the transportation
          facilities provided by the institution. For instance, if you want to
          know about the bus timings, the routes covered or provide feedback
          regarding the bus facility, it can be posted here. Considering your
          reported grievance/query, the administration would resolve the matter
          accordingly.
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

export default TransportationIssues;
