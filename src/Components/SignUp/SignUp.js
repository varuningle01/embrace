
import embrace_logo from "../../assets/_em_brace.png";
import embrace_logo1 from "../../assets/Group 158.png";


const SignUp = () => {
  return (
    <div className="container-fluid row justify-content-between">
      <div className="col-5" style={{ marginRight: "10%", marginTop: "13%" }}>
        <img className="img-fluid float-start" src={embrace_logo} />
        <img
          className="img-fluid"
          src={embrace_logo1}
          style={{ height: "400px", width: "500px" }}
        />
      </div>

      <div className="col-5" style={{ marginTop: "5%" }}>
        <text style={{ color: "#4D00AF", fontSize: "80px", fontWeight:'bold' }}>Sign Up</text>
        <form className="form">
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>Name</text>
          <input className="form-control" type="text" />
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>
            Institution Id
          </text>
          <input className="form-control" type="text" />
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>Email</text>
          <input className="form-control" type="email" />
          <text style={{ color: "#4D00AF", fontSize: "30px" }}>Password</text>
          <input className="form-control" type="password" />
          <div className="align-items-center d-flex">
            <button
              className="btn mt-3 me-2"
              style={{ color: "white", backgroundColor: "#4D00AF" }}
            >
              Submit
            </button>

            <text className="mt-2 ms-3">
              or
              <span style={{ color: "red", marginLeft: "6px" }}>Sign In</span>
              <i  style={{color:"red", marginLeft:"5px"}}class="bi bi-arrow-right"></i>
            </text>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
