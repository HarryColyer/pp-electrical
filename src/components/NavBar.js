import React, { useEffect, useState } from "react";
import logo from "../images/pp-ele-logo.png";
import logo2 from "../images/logo-2.png";
import './css/navbar.css'

function NavBar() {

  const [clicked, setClicked] = useState(false) 

  const handleClick = () => setClicked(!clicked)

  useEffect(() => setClicked(false), [])

  return (
    <div>
      <nav className="nav-bar">
        <div className="logos">
          <img className="logo" src={logo} alt="PP Electrical Logo" srcset="" />
          <img
            className="logo-text"
            src={logo2}
            alt="PP Electrical Logo"
            srcset=""
          />
        </div>
        <ul className="page-links">
          <li className="page">Home</li>
          <li className="page">Services</li>
          <li className="page">Clients</li>
          <li className="page">About Us</li>
          <li className="contact-btn">Contact Us</li>
        </ul>
        <div className="dropdown">
          <i class="icon fa-sharp fa-solid fa-bars" onClick={() => handleClick()}></i>
          <ul className={clicked ? "dropdown-links" : "dropdown-links hidden"}>
            <li>Home</li>
            <li>Services</li>
            <li>Clients</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
