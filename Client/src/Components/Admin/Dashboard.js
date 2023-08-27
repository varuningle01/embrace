import React from "react";

function Dashboard() {
  return (
    <div className="ms-5 mt-5">
      <h1>Dashboard</h1>
      <hr style={{ color: "red", border: "2px solid #FF0000" ,width:"80%"}} />
   
    <div >
<text>Home</text><i class="bi bi-house-door-fill" style={{marginLeft:"50%"}}></i>
    </div>
    <div >
<text>Edit Profile</text><i  style={{marginLeft:"40%"}} class="bi bi-pen-fill"></i>
    </div>
    <div class="dropdown-start">
          <button
          style={{backgroundColor:"#D587FE", color:"white"}}
            class="btn dropdown-toggle  w-75 mb-2 mt-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Specific Category
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Fee Related
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Transportation
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Anti Ragging
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Lost and Found
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Mental health
              </a>
            </li><li>
              <a class="dropdown-item" href="#">
                Library and lab issues
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Dashboard;
