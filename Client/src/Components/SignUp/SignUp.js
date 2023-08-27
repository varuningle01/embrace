import embrace_logo from "../../assets/_em_brace.png";
import embrace_logo1 from "../../assets/Group 158.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    institutionId: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:5000/api/register", formData);
      navigate("/signin"); // Redirect to login page after successful registration
    } catch (error) {
      console.log(formData);
      console.log(error);
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="container-fluid row justify-content-between">
      <div className="col-5" style={{ marginRight: "10%", marginTop: "13%" }}>
        <img className="img-fluid float-start mb-5" src={embrace_logo} />
        {/* <img
          className="img-fluid"
          src={embrace_logo1}
          style={{ height: "400px", width: "500px" }}
        /> */}
        <Player
          autoplay
          loop
          src="https://lottie.host/c9332e66-8a41-4646-84b4-aaefbd9f1c1f/GG66jtyxoE.json"
          style={{
            height: "60%",
            width: "60%",
            // marginRight: "20%",
            // marginTop: "-10%",
          }}
        ></Player>
      </div>

      <div className="col-5" style={{ marginTop: "5%" }}>
        <text
          style={{ color: "#4D00AF", fontSize: "80px", fontWeight: "bold" }}
        >
          Sign Up
        </text>
        <form className="form" onSubmit={handleSubmit}>
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>Name</text>
          <input
            className="form-control"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>
            Institution Id
          </text>
          <input
            className="form-control"
            type="text"
            value={formData.institutionId}
            onChange={(e) =>
              setFormData({ ...formData, institutionId: e.target.value })
            }
          />
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>Email</text>
          <input
            className="form-control"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>Password</text>
          <input
            className="form-control"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <div className="align-items-center d-flex">
            <button
              className="btn mt-3 me-2"
              style={{ color: "white", backgroundColor: "#4D00AF" }}
              type="submit"
            >
              Submit
            </button>

            <text className="mt-2 ms-3">
              or
              <span
                style={{ color: "red", marginLeft: "6px" }}
                onClick={() => navigate("/signin")}
              >
                Sign In
              </span>
              <i
                style={{ color: "red", marginLeft: "5px" }}
                onClick={() => navigate("/signin")}
                class="bi bi-arrow-right"
              ></i>
            </text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
