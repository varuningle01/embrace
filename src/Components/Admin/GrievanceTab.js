import React from "react";

function GrievanceTab(props) {
  return (
    <div>
      <button
        className="btn text-white mb-5 mt-4"
        style={{ backgroundColor: "#D587FE", width: "130%", height: "10vh " }}
      >
        <i class="bi bi-bookmark-star me-2"></i>
        <text>View Bookmark</text>
      </button>
      <button
        className="btn text-white mb-5"
        style={{ backgroundColor: "#D587FE", width: "130%", height: "10vh " }}
        onClick={props.onToggleSolved}
      >
        <i class="bi bi-book-half me-2"></i>
        <text>View Solved</text>
      </button>
      <br />
      <button
        className="btn  text-white mb-5 "
        style={{ backgroundColor: "#D587FE", width: "130%", height: "10vh " }}
      >
        <i class="bi bi-file-earmark me-2"></i>
        <text>Review</text>
      </button>
    </div>
  );
}

export default GrievanceTab;
