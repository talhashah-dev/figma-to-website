/* eslint-disable no-unused-vars */
import React from "react";
import "./Testimonial.css";

import { Peter, Robert, Emily } from "../../assets";

function Testimonial() {
  return (
    <section className="dark-gray" id="testimonial">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          <div className="info-box">
            <img src={Peter} alt="" />
            <h5 className="name">Peter Adams</h5>
            <p>This is a great course. I got to learn a lot.</p>
          </div>

          <div className="info-box">
            <img src={Robert} alt="" />
            <h5 className="name">Robert Fox</h5>
            <p>
              I got to learn a lot about Music Production with this course.
              Thanks :)
            </p>
          </div>

          <div className="info-box">
            <img src={Emily} alt="" />
            <h5 className="name">Emily Smith</h5>
            <p className="review">Awesome! Great job!!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
