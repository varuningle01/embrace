import React from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

function PostCard({ updatePosts }) {
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const { accessToken, studentID } = useContext(AuthContext);
  const [textContent, setTextContent] = useState("");
  const [imageContent, setImageContent] = useState("");
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64File = await convertToBase64(file);
      setImageContent(base64File);
    }
  };
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!studentID) {
      console.log("User is not authenticated");
      return;
    }
    const formData = {
      textContent: textContent,
      imageContent: imageContent,
    };
    console.log(formData);

    try {
      // You need to replace 'studentId' with the actual student ID of the user
      // Fetch this from your app's state or context
      const response = await axios.post(
        `http://127.0.0.1:5000/api/${studentID}/community`,
        formData,
        {
          headers: {
            // Add your authorization token or other headers here
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status === 201) {
        console.log("Post Created successfully");
        updatePosts();
        setTextContent("");
        setImageContent("");
        // Optionally, you can show a success message or redirect to a confirmation page
      } else {
        console.log("Error creating post", response);
        // Handle error, show an error message, etc.
      }
      // Refresh posts after successful submission
      // You can do this by updating the state or fetching posts again
    } catch (error) {
      console.log(error);
      console.error("Error creating post:", error);
    }
  };
  return (
    <div
      className="container p-3"
      style={{
        borderRadius: "10px",
        minHeight: "200px",
        marginLeft: "7%",
        borderRadius: "10px",
        boxShadow:
          "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
      }}
    >
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="form-control mb-2"
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder="What's on your mind?"
          style={{ height: "15vh" }}
        />
        <div className="d-flex justify-content-center form-control align-items-center">
          <text style={{ marginRight: "30%" }}>
            {imageContent ? "Image Selected !!" : "Add to your Post"}
          </text>
          <label
            htmlFor="imageInput"
            className="bi bi-images"
            style={{
              fontSize: "35px",
              cursor: "pointer",
              color: "#814AC6",
              marginLeft: "-10%",
            }}
          ></label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <br />
        <button
          className="btn w-75"
          type="submit"
          style={{
            borderRadius: "50px",
            boxShadow:
              "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
            backgroundColor: "#814AC6",
            color: "white",
            marginLeft: "13%",
          }}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PostCard;
