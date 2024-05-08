/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbar.css";
import { Menu_Icon, Menu_Icon_Close } from "../../assets";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav>
        <a href="" className="logo">
          Sound<span>DZign</span>
        </a>

        <ul className="menu-items">
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setIsActive(true)}>
          <img src={Menu_Icon} alt="" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div className="menu-icon-close" onClick={() => setIsActive(false)}>
          <img src={Menu_Icon_Close} alt="" />
        </div>
        <ul className="menu-items">
          <li>
            <a href="#info" onClick={() => setIsActive(false)}>About</a>
          </li>
          <li>
            <a href="#topics" onClick={() => setIsActive(false)}>Course Details</a>
          </li>
          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>Blog</a>
          </li>
          <li>
            <a href="#testimonial" onClick={() => setIsActive(false)}>Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
