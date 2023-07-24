import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GrievanceForm() {
  const navigate = useNavigate();

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

  let [grievanceData, setGrievanceData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGrievance = {
      grievanceID: Math.floor(Math.random() * 10000000000),
      grievance: grievanceText,
      date: new Date().toUTCString().slice(5, 16),
      type: selected,
      category: selectedCategory,
      status: "pending",
    };
    let newGrievanceData = [...grievanceData, newGrievance];
    setGrievanceData(newGrievanceData);
    localStorage.setItem("grievances", JSON.stringify(newGrievanceData));
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
        {/* <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label mb-3" for="flexCheckDefault">
            Submit Anonymously
          </label>
        </div> */}
        <button
          className="btn w-50"
          type="submit"
          style={{
            borderRadius: "50px",
            boxShadow:
              "0px 5px 17px rgba(86, 19, 170, 0.2), 0px 10px 33px 4px rgba(86, 19, 170, 0.25)",
            backgroundColor: "#4D00AF",
            color: "white",
            marginLeft: "13%",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default GrievanceForm;
