import React from "react";
import "./css/Home.css";
import Picture from "../assets/pro.avif";
const Home = () => {
  return (
    <section id="Home" className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Hello!!, I'm Thiriloksha S</h1>
          <p className="home-subtitle">
            Full-Stack Enthusiast | Cloud Computing Explorer
          </p>
          
        </div>
        {/* <img src={Picture} alt="Profile" className="home-image" /> */}
      </div>
    </section>
  );
};

export default Home;
