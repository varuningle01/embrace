import React from "react";

function GrievanceCard(props) {
  console.log(props.grievance)
  return (
    <div className="bg-white p-3 m-3" style={{borderRadius:"20px"}}>
      <div className="d-flex">
        <text>Grievance ID :  </text>
        <i class="bi bi-bookmark me-5" style={{marginLeft:"60%"}}></i>
        <i class="bi bi-file-earmark"></i>
      </div>
      <p className="mt-3">Name : Varun Ingle</p>
      <p className="mt-2">
        Good afternoon sir/mam <br/>I am from 3rd sem EC branch studying in ggct.I
        have lost my library card hence im unable to issue books of this sem.
        Pls tell me who to consult regarding the regeneration of admit
        card.Also,the exams are coming near so is it possible that i could get
        the books beforehand and when i get the card back i’ll get them issued
        via the card.
      </p>
      <div className="d-flex">
      <p>Reported On : 10 Oct 21</p>

        <p style={{marginLeft:"40%"}}>Status : Pending</p>
      </div>

    </div>
  );
}

export default GrievanceCard;
