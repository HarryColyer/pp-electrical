import React from "react";
import "./css/home.css";
// images
import nic from "../images/nic.png";
import candg from "../images/candg.png";
import chas from "../images/chas.jpg";
import paxton from "../images/paxton.jpg";
import podpoint from "../images/podpoint.png";
import safeContract from "../images/SafeContractor.webp";
import trustmark from "../images/trustmark.png";

function Home() {
  return (
    <div className="home-comp">
      <header className="welcome-header">
        <h1>Welcome to PP Electrical</h1>
        <h2>
          Your Trusted
          <br />
          Mechanical and Electrical
          <br />
          Solutions Provider
        </h2>
      </header>
      <div className="credentials">
        <div>
          <img src={nic} alt="NIC EIC" />
        </div>
        <div>
          <img src={candg} alt="City and Guilds" />
        </div>
        <div>
          <img src={chas} alt="CHAS" />
        </div>
        <div>
          <img src={paxton} alt="Paxton" />
        </div>
        <div>
          <img src={podpoint} alt="Podpoint" />
        </div>
        <div>
          <img src={safeContract} alt="safe contractor" />
        </div>
        <div>
          <img src={trustmark} alt="Trustmark" />
        </div>
      </div>
      <main className="home-main"> 
        <section className="section">
          <h3 className="title">About Us</h3>
          <p className="content">
            At PP Electrical, we are a leading mechanical and electrical company
            committed to delivering exceptional solutions for your industrial,
            commercial and domestic needs. With 40 years of experience in the
            industry, we have earned a reputation for reliability, efficiency,
            and technical excellence. Our team of skilled professionals is
            dedicated to providing innovative solutions that meet and exceed our
            clients' expectations.
          </p>
        </section>

        <div className="section-img">
          <img src="" alt="" />
        </div>

        <div className="section-img">
          <img src="" alt="" />
        </div>

        <section className="section">
          <h3 className="title">Our Services</h3>
          <p className="content">
            As a comprehensive mechanical and electrical solutions provider, we
            offer a wide range of services tailored to meet the unique
            requirements of your projects. Our core services include:
          </p>
          <ul className="section-list">
            <li>
              <h4>Electrical Installations</h4>
            </li>
            <p>
              Our certified electricians are equipped to handle electrical
              installations, repairs, and maintenance for industrial,
              commercial, and residential properties. From power distribution
              systems to lighting solutions, we ensure seamless electrical
              functionality.
            </p>
            <li>
              <h4>Mechanical Engineering</h4>
            </li>
            <p>
              Our team of mechanical engineers specializes in designing and
              implementing efficient mechanical systems. From HVAC installations
              to plumbing and ventilation, we ensure optimal performance and
              energy efficiency.
            </p>
            <li>
              <h4>EV Charger Installers</h4>
            </li>
            <p>
              As the electric vehicle revolution accelerates, nPP Electrical is
              leading the charge in sustainable transportation solutions. Our EV
              charger installation service empowers businesses and individuals
              to embrace electric mobility seamlessly. With expert site
              assessments, customized solutions, and future-proof installations,
              we're your trusted partner in building a cleaner and greener
              tomorrow.
            </p>

            <li>
              <h4>Energy Solutions</h4>
            </li>
            <p>
              With a focus on sustainability, we offer energy-efficient
              solutions that minimize environmental impact while maximizing cost
              savings for your facility.
            </p>
          </ul>
        </section>

        <section className="section">
          <h3 className="title">Our Projects</h3>
          <p className="content">
            PP Electrical takes immense pride in our successful projects that
            span various industries. Our portfolio includes projects in
            manufacturing plants, commercial buildings, healthcare facilities,
            educational institutions, and more. Every project we undertake
            reflects our unwavering commitment to excellence and attention to
            detail. Client satisfaction is at the heart of our success, and we
            continuously strive to exceed expectations with our quality
            workmanship, reliable solutions, and timely project completion.
          </p>
        </section>

        <div className="section-img">
          <img src="" alt="" />
        </div>

        <div className="section-img">
          <img src="" alt="" />
        </div>

        <section className="section">
          <h3 className="title">Why Choose Us?</h3>
          <ul className="section-list">
            <li>
              <h4>Expert Team</h4>
            </li>
            <p>
              Our team consists of highly skilled and certified professionals
              who bring years of experience to every project, ensuring superior
              craftsmanship and reliable service.
            </p>
            <li>
              <h4>Customer-Centric Approach</h4>
            </li>
            <p>
              We prioritize our clients' needs and preferences, working closely
              with them to deliver customized solutions that align with their
              specific goals.
            </p>
            <li>
              <h4>Quality Assurance</h4>
            </li>
            <p>
              From the selection of materials to the execution of projects, we
              maintain rigorous quality control standards to ensure the highest
              level of excellence.
            </p>
            <li>
              <h4>Timely Delivery</h4>
            </li>
            <p>
              We understand the value of time in the business world. Our
              streamlined processes and project management expertise ensure
              timely delivery without compromising on quality.
            </p>
            <li>
              <h4>Safety First</h4>
            </li>
            <p>
              Safety is at the core of everything we do. We adhere to strict
              safety protocols to protect our clients, our team, and the
              communities we serve.
            </p>
          </ul>
        </section>

        <section className="section">
          <h3 className="title">Get in Touch</h3>
          <p className="content">
            We look forward to partnering with you on your next mechanical and
            electrical project. Whether you require electrical installations,
            mechanical engineering expertise, industrial automation, or
            energy-efficient solutions, we have the knowledge and resources to
            deliver outstanding results. Explore our website to learn more about
            our successful projects and what sets us apart. Contact us today for
            a consultation or to request a quote.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
