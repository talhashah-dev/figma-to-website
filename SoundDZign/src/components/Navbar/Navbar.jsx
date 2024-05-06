/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <a href="" className="logo">
        Sound<span>DZign</span>
      </a>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">CourseDetails</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
