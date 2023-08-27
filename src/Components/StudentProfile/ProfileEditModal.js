// import React, { useState } from "react";
// import Modal from "react-modal";
// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../../Context/AuthContext";

// function ProfileEditModal({ isOpen, closeModal, studentData, setStudentData }) {
//   function convertToBase64(file) {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);
//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };
//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   }
//   const { accessToken, studentID } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     name: "",
//     branch: "",
//     semester: "",
//     mobileNo: "",
//     profilePic: "",
//   });
//   useEffect(() => {
//     if (studentData && studentData.student) {
//       setFormData({
//         name: studentData.student.name,
//         branch: studentData.student.branch,
//         semester: studentData.student.semester,
//         mobileNo: studentData.student.mobileNo,
//         profilePic: studentData.student.profilePic,
//       });
//     }
//   }, [studentData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const base64File = await convertToBase64(file);
//       setFormData((prevData) => ({
//         ...prevData,
//         profilePic: base64File,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Perform API call to update user data with formData
//     const updateData = {
//       name: formData.name,
//       branch: formData.branch,
//       semester: formData.semester,
//       mobileNo: formData.mobileNo,
//       profilePic: formData.profilePic,
//     };
//     console.log(updateData.profilePic);
//     try {
//       // Perform API call to update user data with formData
//       const response = await axios.patch(
//         `http://127.0.0.1:5000/api/${studentID}/students/`,
//         updateData,
//         {
//           headers: {
//             // Add any necessary headers here
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       // Handle success or display message to the user
//       console.log("Profile updated:", response.data);
//       if (studentData && studentData.student) {
//         setStudentData((prevData) => ({
//           ...prevData,
//           student: {
//             ...prevData.student,
//             name: response.data.student.name,
//             branch: response.data.student.branch,
//             semester: response.data.student.semester,
//             mobileNo: response.data.student.mobileNo,
//             profilePic: response.data.student.profilePic,
//           },
//         }));
//       }

//       // Reset form data and close modal
//       setFormData({
//         name: "",
//         branch: "",
//         semester: "",
//         mobileNo: "",
//         profilePic: "",
//       });
//       closeModal();
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} onRequestClose={closeModal}>
//       <h2>Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <label>Branch:</label>
//         <input
//           type="text"
//           name="branch"
//           value={formData.branch}
//           onChange={handleChange}
//         />
//         <label>Semester:</label>
//         <input
//           type="text"
//           name="semester"
//           value={formData.semester}
//           onChange={handleChange}
//         />
//         <label>Mobile No:</label>
//         <input
//           type="text"
//           name="mobileNo"
//           value={formData.mobileNo}
//           onChange={handleChange}
//         />
//         <label>Profile Picture:</label>
//         <input
//           type="file"
//           name="profilePic"
//           accept=".jpeg, .png, .jpg"
//           onChange={handleImageChange}
//         />
//         <button type="submit">Save Changes</button>
//       </form>
//     </Modal>
//   );
// }

// export default ProfileEditModal;
import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";

function ProfileEditModal({ isOpen, closeModal, studentData, setStudentData }) {
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

  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    semester: "",
    mobileNo: "",
    profilePic: "",
  });
  useEffect(() => {
    if (studentData && studentData.student) {
      setFormData({
        name: studentData.student.name,
        branch: studentData.student.branch,
        semester: studentData.student.semester,
        mobileNo: studentData.student.mobileNo,
        profilePic: studentData.student.profilePic,
      });
    }
  }, [studentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [profpic, setProfpic] = useState(false);
  const handleImageChange = async (e, profpic) => {
    const file = e.target.files[0];
    if (file) {
      const base64File = await convertToBase64(file);
      setFormData((prevData) => ({
        ...prevData,
        profilePic: base64File,
      }));
      setProfpic(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform API call to update user data with formData
    const updateData = {
      name: formData.name,
      branch: formData.branch,
      semester: formData.semester,
      mobileNo: formData.mobileNo,
      profilePic: formData.profilePic,
    };

    try {
      // Perform API call to update user data with formData
      const response = await axios.patch(
        `http://127.0.0.1:5000/api/${studentID}/students/`,
        updateData,
        {
          headers: {
            // Add any necessary headers here
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Handle success or display message to the user
      console.log("Profile updated:", response.data);
      if (studentData && studentData.student) {
        setStudentData((prevData) => ({
          ...prevData,
          student: {
            ...prevData.student,
            name: response.data.student.name,
            branch: response.data.student.branch,
            semester: response.data.student.semester,
            mobileNo: response.data.student.mobileNo,
            profilePic: response.data.student.profilePic,
          },
        }));
      }

      // Reset form data and close modal
      setFormData({
        name: "",
        branch: "",
        semester: "",
        mobileNo: "",
        profilePic: "",
      });
      setProfpic(false);
      closeModal();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Profile"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "20%",
          left: "30%",
          right: "30%",
          bottom: "20%",
          border: "none",
          borderRadius: "30px",
          padding: "20px",
          overflow: "unset",
        },
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title" style={{ marginLeft: "30%" }}>
            Edit Profile
          </h3>
          <button
            type="button"
            className="btn"
            onClick={closeModal}
            style={{
              borderRadius: "50%",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              backgroundColor: "#814AC6",
              color: "white",
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <label>Name :</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label>Branch:</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label>Semester : </label>
              <input
                type="text"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label>Mobile No :</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="d-flex form-group align-items-center">
              <text style={{ marginRight: "30%" }}>Profile Picture : </text>
              <text style={{ marginRight: "30%" }}>
                {profpic ? "Image Selected !!" : "Add Profile Picture"}
              </text>
              <label
                htmlFor="imageInput"
                className="bi bi-images"
                style={{
                  fontSize: "35px",
                  cursor: "pointer",
                  color: "#814AC6",
                  marginLeft: "-20%",
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
            <button
              type="submit"
              className="btn mt-2"
              style={{
                borderRadius: "50px",
                boxShadow:
                  "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
                backgroundColor: "#814AC6",
                color: "white",
                marginLeft: "40%",
              }}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default ProfileEditModal;
