import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import Dashboard from "./Dashboard";
import SortingNav from "./SortingNav";

import GrievanceTab from "./GrievanceTab";
import GrievanceCard from "./GrievanceCard";
import axios from "axios";

function Admin() {
  const [grievanceData, setGrievanceData] = useState([]);
  const [showSolved, setShowSolved] = useState(false);

  useEffect(() => {
    fetchGrievanceData();
  }, []);
  const fetchGrievanceData = () => {
    axios
      .get("http://127.0.0.1:5000/api/grievances")
      .then((response) => {
        setGrievanceData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching grievance data:", error);
      });
  };
  const handleUpdateStatus = (grievanceID) => {
    const updatedGrievances = grievanceData.map((grievance) => {
      if (grievance._id === grievanceID) {
        return { ...grievance, status: "Solved" };
      }
      return grievance;
    });

    axios
      .put(`http://127.0.0.1:5000/api/${grievanceID}/grievances`, {
        status: "Solved",
      })
      .then((response) => {
        console.log("Grievance status updated:", response.data);
        setGrievanceData(updatedGrievances);
      })
      .catch((error) => {
        console.error("Error updating grievance status:", error);
      });
  };

  const handleDelete = (grievanceID) => {
    axios
      .delete(`http://127.0.0.1:5000/api/${grievanceID}/grievances`)
      .then((response) => {
        console.log("Grievance deleted:", response.data);
        fetchGrievanceData(); // Fetch updated data after deletion
      })
      .catch((error) => {
        console.error("Error deleting grievance:", error);
      });
  };
  const handleToggleSolved = () => {
    setShowSolved(!showSolved); // Toggle the state
  };
  const filteredGrievanceData = showSolved
    ? grievanceData.filter((grievance) => grievance.status === "Solved")
    : grievanceData;

  const myStyles = {
    height: "100vh",
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE and Edge */,
    overflow: "-moz-scrollbars-none" /* Firefox */,
    overflow: "-webkit-scrollbars-none" /* Safari and Chrome */,
    overflow: "scroll" /* needed to make the scrollbar appear in Firefox */,
    WebkitOverflowScrolling:
      "touch" /* optional: improve scrolling performance on mobile */,
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
          <Dashboard />
        </div>
        <div className="col-9" style={{ backgroundColor: "#F2EDF3" }}>
          <SortingNav />
          <div className="container-fluid d-flex row">
            <div className="col-10" style={myStyles}>
              {filteredGrievanceData.map((grievance) => (
                <GrievanceCard
                  key={grievance._id}
                  grievance={grievance}
                  onUpdate={() => handleUpdateStatus(grievance._id)}
                  onDelete={() => handleDelete(grievance._id)}
                />
              ))}
            </div>
            <div className="col-2 d-flex justify-content-end">
              <GrievanceTab onToggleSolved={handleToggleSolved} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
