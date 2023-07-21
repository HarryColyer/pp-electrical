import React, { useEffect, useState } from "react";
import logo from "../images/pp-ele-logo.png";
import logo2 from "../images/logo-2.png";
import { Link } from 'react-router-dom' 
import './css/navbar.css'

function NavBar() {

  const [clicked, setClicked] = useState(false) 

  const handleClick = () => setClicked(!clicked)

  useEffect(() => setClicked(false),[])

  return (
      <nav className="nav-bar">
        <div className="logos">
          <img className="logo" src={logo} alt="PP Electrical Logo" />
          <img
            className="logo-text"
            src={logo2}
            alt="PP Electrical Logo"
          />
        </div>
        <ul className="page-links">
          <li className="page"><Link to="/" className="Link">Home</Link></li>
          <li className="page"><Link to="/services" className="Link">Services</Link></li>
          <li className="page"><Link to="/clients" className="Link">Clients</Link></li>
          <li className="page"><Link to="/about" className="Link">About Us</Link></li>
          <Link to="/contact" className="Link"><li className="contact-btn">Contact Us</li></Link>
        </ul>
        <div className="dropdown">
          <i className="icon fa-sharp fa-solid fa-bars" onClick={() => handleClick()}></i>
          <ul className={clicked ? "dropdown-links" : "dropdown-links hidden"}>
            <li className="link">Home</li>
            <li className="link">Services</li>
            <li className="link">Clients</li>
            <li className="link">About Us</li>
            <li className="link">Contact Us</li>
          </ul>
        </div>
      </nav>
  );
}

export default NavBar;
