import React, { Fragment } from "react";
import NavBar from "../components/NavBar";
import "./css/home.css";

function Home() {
  return (
    <Fragment>
      <NavBar />
      <header>
        <h1>Welcome to PP Electrical</h1>
        <h2>
          Your Trusted
          <br />
          Mechanical and Electrical
          <br />
          Solutions Provider
        </h2>
      </header>
      <main>
        <section></section>
      </main>
      
    </Fragment>
  );
}

export default Home;
