import React from "react";
import Navbar from "../Navbar/Navbar";

function StudentProfile() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-7">
          <div
            className="w-75"
            style={{
              borderRadius: "10px",
              boxShadow: "2px 2px 2px 2px #4D00AF",
              marginLeft: "10%",
            }}
          >
            <div
              style={{
                marginLeft: "90%",
                marginBottom: "3%",
                paddingTop: "3%",
              }}
            >
              <i class="bi bi-pen-fill mb-5"></i>
            </div>
            <div className="d-flex justify-content-evenly">
              <div>
                <i
                  style={{ fontSize: "100px" }}
                  class="bi bi-person-circle"
                ></i>
              </div>
              <div>
                <p>Name</p>
                <p>Institution Name4</p>
                <p>Email</p>
                <p>Mob No.</p>
                <p>Branch Semester</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column" style={{marginLeft:"-20%"}}>
            <button className='btn text-white mb-3 mt-5' style={{backgroundColor:"#D587FE", width:"100%", height:"20% "}}>
        <text>Selected Grievance</text>
        </button>
        <button className='btn text-white mb-3' style={{backgroundColor:"#D587FE", width:"100%", height:"20% "}}>
        <text>Pending Grievance</text>
        </button>
        <button className='btn text-white' style={{backgroundColor:"#D587FE", width:"100%", height:"20% "}}>
        <text>Bookmark Grievance</text>
        </button>
            </div>
            <div style={{marginLeft:"40%", marginTop:"8%"}}>
            <button className='btn text-white' style={{backgroundColor:"#D587FE", width:"100%", height:"20% "}}>
        <text>Sign Out</text>
        </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
