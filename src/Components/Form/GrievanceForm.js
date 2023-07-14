import React from "react";

function GrievanceForm() {
  return (
    <div className="d-flex  justify-content-center container">
      <form >
        <text style={{fontSize:"36px"}}>Report your grievance here:</text>
        <br/>
        <br/>
        <text style={{fontSize:"20px", marginLeft:"3%"}}>Type of Complaint: </text>
        <div class="dropdown-center ms-1">
          <button
          style={{borderRadius:"50px", boxShadow:"2px 2px 2px 2px #4D00AF",color:"#4D00AF"}}
            class="btn dropdown-toggle w-75 mb-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Type
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Action two
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Action three
              </a>
            </li>
          </ul>
        </div>
        <text style={{fontSize:"20px", marginLeft:"3%"}}>Select Category:</text>

        <div class="dropdown-center">
          <button
          style={{borderRadius:"50px", boxShadow:"2px 2px 2px 2px #4D00AF", color:"#4D00AF"}}
            class="btn dropdown-toggle  w-75 mb-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Category
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Action two
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Action three
              </a>
            </li>
          </ul>
        </div>
        <text style={{fontSize:"20px", marginLeft:"3%" }}>Your Grievance:</text>
        <textarea placeholder="Grievance" className="form-control w-75 mb-2" style={{borderRadius:"50px", boxShadow:"2px 2px 2px 2px #4D00AF", color:"#4D00AF"}}></textarea>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label mb-3" for="flexCheckDefault">
    Submit Anonymously
  </label>
</div>
<button className="btn w-50" type="submit" style={{borderRadius:"50px", boxShadow:"2px 2px 2px 2px #4D00AF", backgroundColor:"#4D00AF", color:'white', marginLeft:"13%"}}>Submit</button>
      </form>
      
    </div>

    
  );
}

export default GrievanceForm;
