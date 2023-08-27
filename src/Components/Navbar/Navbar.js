import React, { useContext } from "react";
import embrace_logo from "../../assets/_em_brace.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);
  const handleHomeClick = () => {
    navigate("/home");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };
  const handleAboutUSClick = () => {
    navigate("/aboutus");
  };
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleCommunityClick = () => {
    navigate("/community");
  };
  return (
    <div className="container-fluid  mt-5" style={{ paddingLeft: "4%" }}>
      <div className="navbar-brand">
        <img
          className="img-fluid"
          src={embrace_logo}
          width="25%"
          style={{ paddingLeft: "2%" }}
        />
      </div>
      <div className="navbar row">
        <div className="container-fluid col-9 ">
          <ul class="navbar-nav d-flex flex-row">
            <li class="nav-item me-5">
              <a class="nav-link" onClick={handleHomeClick}>
                Home
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" onClick={handleCommunityClick}>
                Student Community
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" onClick={handleAboutUSClick}>
                About Us
              </a>
            </li>
            <li class="nav-item me-5">
              <a class="nav-link" onClick={handleContactClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className=" col-2 align-items-center d-flex me-5">
          <text className="me-3" onClick={handleProfileClick}>
            Profile
          </text>
          <i
            style={{ fontSize: "50px", color: "#814AC6" }}
            onClick={handleProfileClick}
            class="bi bi-person-circle"
          ></i>
          {isLoggedIn ? (
            // Display Logout icon when logged in
            <i
              style={{
                fontSize: "50px",
                color: "red",
                cursor: "pointer",
                marginLeft: "10%",
              }}
              onClick={logout}
              className="bi bi-box-arrow-right"
            ></i>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
