import React from "react";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import axios from "axios";

function GrievanceCard(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const grievance = props.grievance;
  const sendEmail = () => {
    window.location.href = `mailto:${grievance.student.email}`;
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <div className="bg-white p-3 m-3" style={{ borderRadius: "20px" }}>
      <div className="d-flex align-items-center">
        <text>Grievance ID : {grievance._id} </text>
        <i class="bi bi-bookmark me-5" style={{ marginLeft: "30%" }}></i>
        <i class="bi bi-file-earmark me-5" onClick={openModal}></i>

        <i
          class="bi bi-check2 me-5"
          style={{ fontSize: "25px" }}
          onClick={props.onUpdate}
        ></i>
        <i class="bi bi-trash-fill" onClick={props.onDelete}></i>
      </div>
      {/* <p className="mt-3">Name :{grievance.student.name} </p> */}
      {/* <p className="mt-2">{grievance.description}</p> */}
      <p>Grievance Type : {grievance.type}</p>
      <p>Grievance Category : {grievance.category}</p>
      <div className="d-flex">
        <p>Reported On : {formatDate(grievance.date)}</p>

        <p style={{ marginLeft: "40%" }}>Status :{grievance.status}</p>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
          },
        }}
        contentLabel="Grievance Modal"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title " style={{ marginLeft: "15%" }}>
              Grievance Details
            </h3>
            <button
              type="button"
              className="btn"
              style={{
                borderRadius: "50%",
                boxShadow:
                  "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
                backgroundColor: "#814AC6",
                color: "white",
              }}
              onClick={closeModal}
            >
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <box
              readOnly="true"
              className="form-control mb-2 mt-2"
              style={{
                boxShadow:
                  "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
                color: "#4D00AF",
              }}
            >
              <p className="mb-1">Student Name: {grievance.student.name}</p>
              <p className="mb-1">Student Branch: {grievance.student.branch}</p>
              <p className="mb-1">
                Student Semester: {grievance.student.semester}
              </p>
            </box>
            <box
              readOnly="true"
              className="form-control mb-3 mt-2"
              style={{
                boxShadow:
                  "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
                color: "#4D00AF",
              }}
            >
              {" "}
              <p className="mb-1">Grievance ID: {grievance._id}</p>
              <p className="mb-1">Grievance Type: {grievance.type}</p>
              <p className="mb-1">Grievance Category: {grievance.category}</p>
              <p className="mb-1">
                Grievance:
                <textarea
                  readOnly="true"
                  className="form-control mb-2"
                  // style={{
                  //   boxShadow:
                  //     "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
                  //   color: "#4D00AF",
                  // }}
                >
                  {grievance.description}
                </textarea>
              </p>
              <p className="mb-1">
                Grievance Date: {formatDate(grievance.date)}
              </p>
            </box>

            {/* ...other details... */}
            <button
              className="btn mr-2"
              style={{
                borderRadius: "50px",
                boxShadow:
                  "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
                backgroundColor: "#814AC6",
                color: "white",
                marginLeft: "40%",
              }}
              onClick={sendEmail}
            >
              Reply
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default GrievanceCard;
