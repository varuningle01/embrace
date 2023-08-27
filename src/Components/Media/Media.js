import React, { useEffect, useState } from "react";
import axios from "axios";
function Media({ posts }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            width: "40vw",
            marginTop: "1%",
            backgroundColor: "white",
            marginLeft: "7%",
            borderRadius: "10px",
            boxShadow:
              "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
            borderRadius: "5px",
            padding: "15px",
            paddingBottom: "12px",
            marginBottom: "20px",
          }}
        >
          <div className="row ms-2 align-items-center">
            <div className="col-1">
              {/* {console.log(post)} */}
              {post.author.profilePic ? (
                <img
                  src={post.author.profilePic}
                  alt="Profile"
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <i
                  style={{ fontSize: "35px" }}
                  className="bi bi-person-circle"
                ></i>
              )}
            </div>
            <div className="col-4" style={{ paddingTop: "10px" }}>
              <p style={{ fontSize: "20px" }}>{post.author.name}</p>
              <p style={{ fontSize: "10px", marginTop: "-20px" }}>
                {formatDate(post.timestamp)}
              </p>
            </div>
            <div className="col-7">
              <i
                class="bi bi-three-dots"
                style={{ fontSize: "20px", marginLeft: "90%" }}
              ></i>
            </div>
          </div>
          <p className="ms-3">{post.textContent}</p>
          {post.imageContent && (
            <div
              style={{
                backgroundColor: "#E9F2FF",
                // padding: "14%",
                textAlign: "center",
                alignContent: "center",
                height: "auto",
              }}
            >
              <img
                src={post.imageContent}
                // style={{ height: "20vh", width: "100%" }}
                style={{ width: "100%", maxHeight: "25vh", objectFit: "cover" }}
                alt="Post Image"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Media;
