import React from "react";
import Navbar from "../Navbar/Navbar";
import Media from "../Media/Media";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Chatbot from "../ChatBot/ChatBot";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileEditModal from "./ProfileEditModal";
import UserGrievanceCard from "./UserGrievanceCard";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function StudentProfile() {
  const navigate = useNavigate();
  const { logout, accessToken, studentID, isLoggedIn } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState(null);
  const [studentGrievances, setStudentGrievances] = useState([]);
  const [userMedia, setUserMedia] = useState([]);
  useEffect(() => {
    // Fetch student data when component mounts
    if (!isLoggedIn) {
      // If user is not logged in, redirect to sign-in page
      navigate("/signin");
    } else if (studentID && accessToken) {
      const fetchStudentData = async () => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:5000/api/${studentID}/grievances/`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setStudentData(response.data);
          setStudentGrievances(response.data.grievances);
          setLoading(false); // Set the fetched student data
          const mediaResponse = await axios.get(
            `http://127.0.0.1:5000/api/${studentID}/community/`, // Adjust the endpoint accordingly
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setUserMedia(mediaResponse.data.communities); // Set user's media
        } catch (error) {
          console.error("Error fetching student data:", error);
        }
      };

      fetchStudentData();
    }
  }, [studentID, accessToken]);
  console.log(userMedia);
  const handleSignOut = () => {
    logout();
    console.log(accessToken);
    navigate("/signin");
  };
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };
  const myStyles = {
    height: "60vh",
    width: "45vw",
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE and Edge */,
    overflow: "-moz-scrollbars-none" /* Firefox */,
    overflow: "-webkit-scrollbars-none" /* Safari and Chrome */,
    overflow: "scroll" /* needed to make the scrollbar appear in Firefox */,
    WebkitOverflowScrolling:
      "touch" /* optional: improve scrolling performance on mobile */,
  };
  return (
    <div>
      <Navbar />
      <Chatbot />
      <div className="row">
        <div className="col-7 mt-5">
          <div
            style={{
              borderRadius: "10px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              marginLeft: "10%",
              width: "70%",
            }}
          >
            <div
              style={{
                marginLeft: "90%",
                marginBottom: "3%",
                paddingTop: "3%",
              }}
            >
              <i
                class="bi bi-pen-fill mb-5"
                style={{ color: "#814AC6" }}
                onClick={openEditModal}
              ></i>
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : studentData && studentData.student ? ( // Conditionally render only if studentData is available
              <div className="d-flex justify-content-around">
                <div>
                  {studentData.student.profilePic ? (
                    <img
                      src={studentData.student.profilePic}
                      alt="Profile"
                      style={{
                        width: "200px",
                        height: "180px",
                        borderRadius: "50%",
                        boxShadow:
                          "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)", // Add a subtle shadow
                      }}
                    />
                  ) : (
                    <i
                      style={{ fontSize: "100px" }}
                      className="bi bi-person-circle"
                    ></i>
                  )}
                </div>
                <div>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Name : </span>
                    {studentData.student.name}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Institution ID :</span>
                    {studentData.student.institutionId}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Email : </span>
                    {studentData.student.email}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Mobile No : </span>
                    {studentData.student.mobileNo}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Branch :</span>
                    {studentData.student.branch}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Semester : </span>
                    {studentData.student.semester}
                  </p>
                </div>
              </div>
            ) : (
              <p>No Student Data Available</p>
            )}
          </div>
        </div>
        <div className="col-5">
          <Player
            autoplay
            loop
            src="https://lottie.host/59ee4259-5f18-48f8-87e6-c74b381c93d6/9cg48pKS01.json"
            style={{
              height: "auto",
              width: "80%",
              marginRight: "80%",
              marginTop: "-10%",
            }}
          ></Player>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="d-flex">
          <h1 style={{ marginLeft: "7%" }}>Community Posts</h1>
          <h1 style={{ marginLeft: "30%" }}>Grievances</h1>
        </div>
        <div
          className="container col-5 "
          style={
            ({
              marginLeft: "7%",
              borderRadius: "10px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
            },
            myStyles)
          }
        >
          <Media posts={userMedia} />
        </div>

        <div className="container col-6" style={myStyles}>
          {studentGrievances.map((grievance) => (
            <UserGrievanceCard
              key={grievance._id}
              grievance={grievance}
              // You need to pass appropriate functions for openModal, onUpdate, onDelete
            />
          ))}
        </div>
      </div>
      <ProfileEditModal
        isOpen={editModalIsOpen}
        closeModal={closeEditModal}
        studentData={studentData}
        setStudentData={setStudentData}
      />
      <Footer />
    </div>
  );
}

export default StudentProfile;
