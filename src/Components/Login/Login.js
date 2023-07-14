import embrace_logo from "../../assets/_em_brace.png";
import embrace_logo1 from "../../assets/Group 158.png";

const Login = () => {
  return (
    <div className="container-fluid row justify-content-between" >
      <div className="col-5" style={{marginRight:'100px',marginTop:'13%'}}>
        <img className="img-fluid float-start" src={embrace_logo}  />
        <img className="" src={embrace_logo1} style={{height:'400px', width:'500px'}}  />
      </div>

      <div className="col-5" style={{marginTop:'5%'}}>
        <text style={{color:'#4D00AF', fontSize:'80px'}}>Sign In</text>
        <form className="form">
          <text style={{color:'#4D00AF', fontSize:'30px'}}>Email</text>
          <input className="form-control" type="email" />
          <text style={{color:'#4D00AF', fontSize:'30px'}}>Password</text>
          <input className="form-control" type="password" />
          <button className="btn mt-3 mb-2" style={{color:'white', backgroundColor:'#4D00AF'}}>Sign In</button>
          <br/>
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
