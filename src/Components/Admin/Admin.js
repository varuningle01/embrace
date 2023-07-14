import React from "react";
import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";
import SortingNav from "./SortingNav";

import GrievanceTab from "./GrievanceTab";
import GrievanceCard from "./GrievanceCard";

function Admin() {
    const myStyles = {
        height:"480px",
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* IE and Edge */
        overflow: '-moz-scrollbars-none', /* Firefox */
        overflow: '-webkit-scrollbars-none', /* Safari and Chrome */
        overflow: 'scroll', /* needed to make the scrollbar appear in Firefox */
        WebkitOverflowScrolling: 'touch', /* optional: improve scrolling performance on mobile */
      };
  return (
    <div className="container-fluid">
      <AdminNav />
      <div className="row">
        <div className="col-3">
          <div className="container d-flex align-items-center ms-5 mt-5">
            <i style={{ fontSize: "40px" }} class="bi bi-person-circle"></i>
            <text className="ms-4">Sharmila</text>
          </div>
         <Dashboard/>
        </div>
        <div className="col-9" style={{backgroundColor:"#F2EDF3"}}>
            <SortingNav/>
            <div className="container-fluid d-flex row ">
                <div className="col-10" style={myStyles}>
                    <GrievanceCard/>
                    <GrievanceCard/>
                    <GrievanceCard/>


                </div>
                <div className="col-2 d-flex justify-content-end">
<GrievanceTab/>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
