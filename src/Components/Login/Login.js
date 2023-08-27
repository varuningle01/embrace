import { useState, useContext } from "react";
import embrace_logo from "../../assets/_em_brace.png";
import embrace_logo1 from "../../assets/Group 158.png";
import userData from "../../userData.json";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/login",
        formData
      );
      const token = response.data.token;
      const studentID = response.data.studentID;
      if (token && studentID) {
        login(token, studentID);
        navigate("/home"); // Redirect to home page after successful login
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
    <div className="container-fluid row justify-content-between">
      <div className="col-5" style={{ marginRight: "100px", marginTop: "13%" }}>
        <img className="img-fluid float-start" src={embrace_logo} />
        {/* <img
          className=""
          src={embrace_logo1}
          style={{ height: "400px", width: "500px" }}
        /> */}
        <Player
          autoplay
          loop
          src="https://lottie.host/f19a504e-41a0-49a1-87bb-479eda6aa210/xXOvZb1BXa.json"
          style={{
            height: "90%",
            width: "90%",
            // marginRight: "20%",
            // marginTop: "-10%",
          }}
        ></Player>
      </div>

      <div className="col-5" style={{ marginTop: "5%" }}>
        <text style={{ color: "#4D00AF", fontSize: "80px" }}>Sign In</text>
        <form className="form" onSubmit={handleSubmit}>
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
          <button
            className="btn mt-3 mb-2"
            style={{ color: "white", backgroundColor: "#4D00AF" }}
            type="submit"
          >
            Sign In
          </button>
          <br />
          <text>
            To Create an account click{" "}
            <span style={{ color: "red" }} onClick={() => navigate("/signup")}>
              here!
            </span>
          </text>
        </form>
      </div>
    </div>
  );
};

export default Login;
