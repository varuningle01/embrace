import React from "react";

function UserGrievanceCard({ grievance }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div
      className="bg-white p-3 m-3"
      style={{
        marginLeft: "7%",
        borderRadius: "10px",
        boxShadow:
          "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
      }}
    >
      <div className="d-flex align-items-center">
        <text>Grievance ID : {grievance._id} </text>
        {/* <i class="bi bi-bookmark me-5" style={{ marginLeft: "30%" }}></i>
        <i class="bi bi-file-earmark me-5" onClick={openModal}></i> */}

        {/* <i
          class="bi bi-check2 me-5"
          style={{ fontSize: "25px" }}
          //   onClick={props.onUpdate}
        ></i>
        <i class="bi bi-trash-fill" ></i> */}
      </div>
      {/* <p className="mt-3">Name :{grievance.student.name} </p> */}
      {/* <p className="mt-2">{grievance.description}</p> */}
      <p>Grievance Type : {grievance.type}</p>
      <p>Grievance Category : {grievance.category}</p>
      <div className="d-flex">
        <p>Reported On : {formatDate(grievance.date)}</p>

        <p style={{ marginLeft: "40%" }}>Status :{grievance.status}</p>
      </div>
    </div>
  );
}

export default UserGrievanceCard;
