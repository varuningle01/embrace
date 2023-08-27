import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

function GrievanceForm() {
  const navigate = useNavigate();
  const { studentID, accessToken } = useContext(AuthContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selected, setSelected] = useState("Type");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const changeSelectOptionHandler = (selected) => {
    setSelected(selected);
  };
  const changeCategoryOptionHandler = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const academic = [
    "Fee",
    "Library and Lab",
    "Examination",
    "Faculty",
    "Training and Placement",
    "Scholarship",
    "Other",
  ];
  const nonacademic = [
    "Mental Health",
    "Anti-Ragging",
    "Transportation",
    "Club Activities",
    "Lost and Found Items",
    "Parking Issues",
    "Maintenance",
    "Sanitation",
    "Hostel Facilities",
    "Canteen",
    "Sports and NCC",
    "Other",
  ];

  let type = null;
  let categoryoptions = null;

  if (selected === "Academic") {
    type = academic;
  } else if (selected === "Non Academic") {
    type = nonacademic;
  }

  if (type) {
    categoryoptions = type.map((el) => (
      <li key={el}>
        <a
          class="dropdown-item"
          onClick={() => changeCategoryOptionHandler(el)}
        >
          {el}
        </a>
      </li>
    ));
  }
  let [grievanceText, setGrievanceText] = useState("");
  const handleGrievanceChange = (event) => {
    setGrievanceText(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentID) {
      console.log("User is not authenticated");
      navigate("/signin");
      return;
    }
    const newGrievance = {
      description: grievanceText,
      type: selected,
      category: selectedCategory,
    };

    try {
      // Make a POST request to submit the grievance
      const response = await axios.post(
        `http://127.0.0.1:5000/api/${studentID}/grievances`,
        newGrievance,
        {
          headers: {
            // Add your authorization token or other headers here
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 201) {
        console.log("Grievance submitted successfully");
        // Optionally, you can show a success message or redirect to a confirmation page
        setIsSubmitted(true);
        setSelected("Type"); // Reset the selected type
        setSelectedCategory("Category"); // Reset the selected category
        setGrievanceText("");
      } else {
        console.log("Error submitting grievance", response);
        // Handle error, show an error message, etc.
      }
    } catch (error) {
      console.log(error);
      console.error("An error occurred:", error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div className="d-flex  justify-content-center container">
      <form onSubmit={handleSubmit}>
        <text style={{ fontSize: "36px" }}>Report your grievance here:</text>
        <br />
        <br />
        <text style={{ fontSize: "20px", marginLeft: "3%" }}>
          Type of Complaint:{" "}
        </text>
        <div class="dropdown-center ms-1">
          <button
            style={{
              borderRadius: "50px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              color: "#4D00AF",
            }}
            class="btn dropdown-toggle w-75 mb-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selected}
          </button>
          <ul class="dropdown-menu" onChange={changeSelectOptionHandler}>
            <li>
              <a
                class="dropdown-item"
                onClick={() => changeSelectOptionHandler("Academic")}
              >
                Academic
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                onClick={() => changeSelectOptionHandler("Non Academic")}
              >
                Non-Academic
              </a>
            </li>
          </ul>
        </div>
        <text style={{ fontSize: "20px", marginLeft: "3%" }}>
          Select Category:
        </text>

        <div class="dropdown-center">
          <button
            style={{
              borderRadius: "50px",
              boxShadow:
                "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
              color: "#4D00AF",
            }}
            class="btn dropdown-toggle  w-75 mb-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedCategory}
          </button>
          <ul class="dropdown-menu">{categoryoptions}</ul>
        </div>
        <text style={{ fontSize: "20px", marginLeft: "3%" }}>
          Your Grievance:
        </text>
        <textarea
          placeholder="Grievance"
          className="form-control w-75 mb-2"
          onChange={handleGrievanceChange}
          style={{
            borderRadius: "50px",
            boxShadow:
              "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
            color: "#4D00AF",
          }}
        ></textarea>

        <button
          className="btn w-50"
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
          Submit
        </button>
        {isSubmitted && (
          <p style={{ marginTop: "10px", color: "green" }}>
            Grievance Submitted Successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default GrievanceForm;
