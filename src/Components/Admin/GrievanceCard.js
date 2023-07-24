import React from "react";

function GrievanceCard(props) {
  console.log(props);
  return (
    <div className="bg-white p-3 m-3" style={{ borderRadius: "20px" }}>
      <div className="d-flex align-items-center">
        <text>Grievance ID :{props.grievance.grievanceID} </text>
        <i class="bi bi-bookmark me-5" style={{ marginLeft: "50%" }}></i>
        <i class="bi bi-file-earmark me-5"></i>

        <i
          class="bi bi-check2 me-5"
          style={{ fontSize: "25px" }}
          onClick={props.onUpdate}
        ></i>
        <i class="bi bi-trash-fill" onClick={props.onDelete}></i>
      </div>
      <p className="mt-3">Name : Varun Ingle</p>
      <p className="mt-2">
        Good afternoon sir/mam <br />
        {props.grievance.grievance}
      </p>
      <div className="d-flex">
        <p>Reported On : {props.grievance.date}</p>

        <p style={{ marginLeft: "40%" }}>Status :{props.grievance.status}</p>
      </div>
    </div>
  );
}

export default GrievanceCard;
