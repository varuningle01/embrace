import React from "react";
import GrievanceForm from "../Form/GrievanceForm";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Faq from "react-faq-component";
import dropIcon from "../../assets/DropDown.png";
import Chatbot from "../ChatBot/ChatBot";

function LabIssues() {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "1. How many books will be issued for 5th sem students?",
        content: "Total 4 books will be issued.",
      },
      {
        title:
          "2. . Will the library function tomorrow on 2nd October 2021, if yes then what will be the timings?",
        content: "Yes, Timings will be 11am to 05pm.",
      },
      {
        title: "3. Can I access the library on 15th OCT, at the noon time? ",
        content: "Yes, the library will be functional.",
      },
      {
        title: "4.Where is the library situated in out institution?",
        content: "It is situated near the main entrance gate.",
      },
      {
        title:
          "5. After issuing, when the books need to be reissued or returned?",
        content:
          "After issuing the book needs to be reissued within 15 days and need to be returned within 6 months from the date of first issue.",
      },
      {
        title: "6. Where is the chemistry lab situated?",
        content: "It is situated near the library, on 1st floor.",
      },
      {
        title: "7. Who is the lab attendant of BME lab?",
        content: "Mr Venkatesh Anand is the lab attendant of BME lab.",
      },
      {
        title:
          "8. How many students can be accommodated in the CL7 lab at once?",
        content: "Maximum 45 students can access the lab at once.",
      },
      {
        title: "9. How many labs are there in our Institution?",
        content:
          "5 computer labs, 1 lab for physics, chemistry, civil, Electronics, BME overall 11 labs are there.",
      },
      {
        title:
          "10. What are the precautions need to be followed while accessing the labs?",
        content: `a) Proper use of instruments of the lab.<br/>
            b) Safety precautions like gloves, eyeglasses in the lab of chemistry, workshops.<br/>
            c) Maintaining the same state of the lab items/computers as it were after accessing.`,
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
          Lab Issues
        </h2>
        <p
          style={{
            textAlign: "left",
            padding: "15px",
            fontSize: "25px",
            marginLeft: "5%",
          }}
        >
          In this section, you can post enquires regarding the institution’s
          library and labs. For instance, library related enquiries could
          include, issue of a new library card, library timings, exchange or
          return of any book or any other related queries. For lab, you can post
          to enquire about lab timings, lab functionality rules and norms laid
          down by the institution. The solutions to your query shall be
          reverted.
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

export default LabIssues;
