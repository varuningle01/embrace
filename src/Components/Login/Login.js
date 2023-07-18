import { useState } from "react";
import embrace_logo from "../../assets/_em_brace.png";
import embrace_logo1 from "../../assets/Group 158.png";
import userData from "../../userData.json";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData.admin);
    const user_data = userData.users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    const admin_data = userData.admin.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (admin_data) {
      navigate("/admin");
    } else if (user_data) {
      navigate("/home");
    } else {
      console.log("Error Ocuured");
    }
  };

  return (
    <div className="container-fluid row justify-content-between">
      <div className="col-5" style={{ marginRight: "100px", marginTop: "13%" }}>
        <img className="img-fluid float-start" src={embrace_logo} />
        <img
          className=""
          src={embrace_logo1}
          style={{ height: "400px", width: "500px" }}
        />
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
            <span style={{ color: "red" }}>here!</span>
          </text>
        </form>
      </div>
    </div>
  );
};

export default Login;
