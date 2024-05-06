/* eslint-disable no-unused-vars */
import React from "react";
import "./Info.css";
import { RedAngel, Student_Icon, Video_File_Icon } from "../../assets";

function Info() {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <img src={RedAngel} alt="" />
        <div className="content-container">
          <div className="info-box">
            <img src={Student_Icon} alt="" />
            <p className="amount">23,000+</p>
            <p className="type">Students</p>
          </div>
          
          <div className="info-box">
            <img src={Video_File_Icon} alt="" />
            <p className="amount">26 Hours</p>
            <p className="type">Video Content</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
