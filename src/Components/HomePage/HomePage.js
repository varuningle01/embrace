import React from "react";
import Navbar from "../Navbar/Navbar";
import GrievanceForm from "../Form/GrievanceForm";
import homeimg from "../../assets/Layer 1 1.png";
import img1 from "../../assets/mental-health 1.png"
import img2 from "../../assets/fees 1.png"
import img3 from "../../assets/lost-and-found 1.png"
import img4 from "../../assets/public-transport 1.png"
import img5 from "../../assets/stop-violence 1.png"
import img6 from "../../assets/study 1.png"
import Card from "../Card/Card";
import Footer from "../Footer/Footer";


function HomePage() {
    const data=[{
        img:img1,
        text:"Mental Health Support"
    },{
        img:img2,
        text:"Fees Related Issues"
    },{
        img:img3,
        text:"Lost and Found"
    },{
        img:img4,
        text:"Transportation Issues"
    },{
        img:img5,
        text:"Anti Ragging"
    },{
        img:img6,
        text:"Lab Issues"
    }]
  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="row">
        <div className=" col-6" style={{marginLeft:"6%"}}>
          <p>
            This Web Application is developed to provide students with a
            platform where an easy, user-friendly interface serves the purpose
            of lodging complaints in a more formal pattern.
          </p>
          <p>
            It allows users to put forward their grievances belonging to any of
            the specified categories either academic or non-academic. The
            college admin would then review the lodged complaints and solve the
            issues accordingly in the best interest of the student.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <GrievanceForm />
        </div>
        <div className="col-5">
          <img src={homeimg} className="img-fluid" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <p style={{ fontSize: "48px", marginLeft:"4%" }}>Know More:</p>
        <div className="row mb-5">
        <div className="col-4"><Card data={data[0]}/></div>
          <div className="col-4"><Card data={data[1]}/></div>
          <div className="col-4"><Card data={data[2]}/></div>
        </div>
        <div className="row mb-5">
          <div className="col-4"><Card data={data[3]}/></div>
          <div className="col-4"><Card data={data[4]}/></div>
          <div className="col-4"><Card data={data[5]}/></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
