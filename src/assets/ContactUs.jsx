import "./contactus.css";

function ContactUs() {
  return (
    <>
      <div className="contactSection">
        <h1 className="contact-heading">We are happy to hear you, here is how you can contact us</h1>

        <div className="box-row">
          <div className="row-item">
          <img
              className="contactLogo"
              src="assets/address2.png"
              alt="address-logo"
            />

            <div className="contact-text">
            <h3>Address</h3>
            <p>P.O. Tilwara Ghat, Near Bargi Hills, Jabalpur 482003</p>
             
            </div>
            
          </div>
          <div className="row-item">
            <img
              className="contactLogo"
              src="assets/contact2.png"
              alt="contact-logo"
            />
            <div className="contact-text">
              <h3>Contact</h3>
              <p>9425323089, 9893556449</p>
            </div>
            
            
          </div>
        </div>

        <div className="box-row">
          <div className="row-item">
            <img
              className="contactLogo"
              src="assets/email2.png"
              alt="email-logo"
            />
            <div className="contact-text">
              <h3>E-Mail</h3>
              <p>contact@ggits.org</p>
            </div>
            
          </div>
            
          <div className="row-item">
            <img
              className="contactLogo"
              src="assets/website2.png"
              alt="website-logo"
            />

            <div className="contact-text">
              <h3>Website</h3>
              <p>http://ggits.org</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;