import React from "react";
import './css/footer.css'


function Footer() {
  return (
    <footer>
      <div className="business-info">
        <h5>Business Info</h5>
        <p>address</p>
        <p>phone</p>
        <p>email</p>
      </div>
      <div className="overview">
        <h5>Overview</h5>
          <p>Services</p>
          <p>Clients</p>
          <p>About Us</p>
          <p>Contact Us</p>
        
      </div>      
      <div className="social-media">
        <h5>Social Media</h5>
        <p>linkedin</p>
        <p>facebook</p>
        <p>instagram</p>
        <p>twiiter</p>
      </div>
    </footer>
  );
}

export default Footer;
