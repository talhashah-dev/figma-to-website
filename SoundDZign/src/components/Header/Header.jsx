/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

// eslint-disable-next-line no-unused-vars

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="hero-text">
          <p className="course-name">Sound Design Masterclass</p>
          <h1>Learn the Art of Sound Design</h1>
          <button className="demo-btn">Demo Lesson</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
