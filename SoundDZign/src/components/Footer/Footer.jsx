/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { Facebook_Logo, Twitter_Logo, Instagram_Logo } from "../../assets";

function Footer() {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="" className="logo">
              Sound<span>DZign</span>
            </a>
            <div className="social-icons">
              <a href="#">
                <img src={Facebook_Logo} alt="Facebook" />
              </a>
              <a href="#">
                <img src={Twitter_Logo} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Instagram_Logo} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:contact@gmail.com">contact@gmail.com</a>
              </li>
              <li>
                <a href="tel:+1 234-567-789">+1 234-567-789</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copy-right">
          This website is developed by{" "}
          <a href="https://www.linkedin.com/in/talhashah-dev/" target="_blank">
            {" "}
            &lt;Talha /&gt;
          </a>{" "}
          &#169; 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
