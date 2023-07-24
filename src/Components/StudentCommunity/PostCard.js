import React from "react";

function PostCard() {
  return (
    <div
      className="container"
      style={{
        boxShadow: "0px 0px 15px rgba(204, 199, 199, 0.25)",
        borderRadius: "10px",
        height: "200px",
      }}
    >
      <div className="row">
        <div className="col mt-3">
          <p>Post Something to Community</p>
          <i class="bi bi-card-image" style={{ fontSize: "25px" }}></i>
          <i class="bi bi-ui-radios ms-3" style={{ fontSize: "25px" }}></i>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
