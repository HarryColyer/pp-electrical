import React from "react";
import "./css/about.css";

function About() {
  return (
    <div className="about-comp">
      <header className="about-header">
        <div className="shape"></div>
        <h2>About Us And Our Mission.</h2>
        <p>
          With 40 years of experience, we have established ourselves as a
          trusted name in delivering top-tier services to our clients in the UK
          and beyond.
        </p>
        <p>
          We are dedicated to providing innovative, reliable, and sustainable
          solutions that propel our clients' projects towards success. Through
          our commitment to quality workmanship, safety, and customer
          satisfaction, we strive to exceed expectations and foster long-lasting
          partnerships with our clients.
        </p>
      </header>
      <main className="about-main">
        <div className="panel">
          <h4>Team of Experts</h4>
          <p>
            Our success is driven by our exceptional team of skilled
            professionals. Each member of our team brings a wealth of knowledge
            and experience to the table, ensuring that every project is met with
            precision and expertise. From our certified electricians to our
            accomplished mechanical engineers, we take pride in our diverse
            skill set that enables us to tackle projects of any complexity with
            confidence.
          </p>
        </div>
        <div className="panel">
          <h4>Client-Centric Approach</h4>
          <p>
            At PP Electrical, our clients are at the heart of everything we do.
            We believe in building strong relationships based on trust, open
            communication, and a deep understanding of our clients' unique
            requirements. We listen attentively to your needs and collaborate
            closely with you to develop tailored solutions that align with your
            objectives and budget.
          </p>
        </div>
        <div className="panel">
          <h4>Commitment to Safety</h4>
          <p>
            Safety is our topmost priority. We maintain rigorous safety
            protocols throughout every project, ensuring the well-being of our
            team, clients, and the communities we serve. Our commitment to
            safety extends beyond compliance; it reflects our genuine concern
            for the people impacted by our work.
          </p>
        </div>
        <div className="panel">
          <h4>Sustainability and Environmental Responsibility</h4>
          <p>
            Our success is driven by our exceptional team of skilled
            professionals. Each member of our team brings a wealth of knowledge
            and experience to the table, ensuring that every project is met with
            precision and expertise. From our certified electricians to our
            accomplished mechanical engineers, we take pride in our diverse
            skill set that enables us to tackle projects of any complexity with
            confidence.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
