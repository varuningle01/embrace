import React from "react";
import GrievanceForm from "../Form/GrievanceForm";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Faq from "react-faq-component";
import dropIcon from "../../assets/DropDown.png";
import Chatbot from "../ChatBot/ChatBot";

function MentalHealthSupport() {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "1. What does it mean to have mental health issues?",
        content:
          "Mental health issues take many forms. Some are mild and only interfere with daily life, such as certain phobias (abnormal fears). Other mental health conditions could become so severe that a person may need care in a hospital. Mental illnesses are health conditions involving changes in emotion, thinking or behaviours. Mental illnesses are associated with distress and/or problems functioning in social, work or family activities.",
      },
      {
        title: "2. How can I manage grief?",
        content:
          "Grief can come up whenever you lose something important (eg-job, Losing hope etc.)<br/><br/>a) Acknowledge and express your feelings in a healthy way: such as by talking with a friend, writing in a journal, or making art.<br/><br/>b) Give yourself as much time as you need. Give yourself permission to use the time to take care of your well-being. Let go of expectations, that can wait.<br/><br/>c)Connect with a mental health professional if you're having a hard time. If you're having a hard time managing difficult thoughts, it's a good idea to seek help from a professional like a psychologist or counsellor.",
      },
      {
        title: "3. What is the difference between anxiety and stress?",
        content:
          "Stress focuses on mainly external pressures on us that we’re finding hard to cope with. When we are stressed, we usually know what we’re stressed about, and the symptoms of stress typically disappear after the stressful situation is over.<br/><br/>Anxiety, on the other hand, isn’t always as easy to figure out. Anxiety focuses on worries or fears about things that could threaten us. Anxiety is only an indicator of underlying disease when feelings become excessive, all-consuming and interfere with daily living.",
      },
      {
        title:
          "4. What should I do if someone appears to have the symptoms of mental disorder?",
        content:
          "a) Listen without making judgements and concentrate on their needs in that moment.<br/><br/>b)	Ask them what would help them.<br/><br/>c) Don't try to diagnose or second guess their feelings.<br/><br/>d) Offer them help in seeking professional support and provide information on ways to do this.",
      },
      {
        title: "5. What is the difference between sadness and depression?",
        content:
          "Sadness is a normal reaction to a loss, disappointment, problems, or other difficult situations. Feeling sad from time to time is just another part of being human. In these cases, feelings of sadness go away quickly and you can go about your daily life.<br/><br/>Depression is a mental illness that affects your mood, the way you understand yourself, and the way you understand and relate to things around you. People who experience depression may feel worthless or hopeless. They may feel unreasonable guilty. Most people lose interest in things that they used to enjoy. Physical signs of depression include problems with sleep, appetite and. Some may experience difficult thoughts about death or ending their life (suicide).",
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
          Mental Health Support
        </h2>
        <p
          style={{
            textAlign: "left",
            padding: "15px",
            fontSize: "25px",
            marginLeft: "5%",
          }}
        >
          This section could help you in your state of distress, for we are here
          to help you thrive, and not just survive!
          <br />
          We understand the importance of a healthy mind and therefore we are
          here to hear you! Considering your reported query, we’ll provide you
          with the necessary one-to-one assistance.
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

export default MentalHealthSupport;
