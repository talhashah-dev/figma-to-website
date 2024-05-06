/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Topics.css";
import {
  Frequencies,
  DAW,
  VocalProcessing,
  Mixing,
  MixingConsole,
  Mastering,
  YellowAngel,
} from "../../assets";

function Topics() {
  const [currentImg, setCurrentImg] = useState(Frequencies);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topic-list">
            <li onMouseEnter={() => setCurrentImg(Frequencies)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImg(DAW)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImg(VocalProcessing)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImg(Mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImg(MixingConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImg(Mastering)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImg} alt="Guy Mixing Sounds"/>
          </div>
        </div>
        <img src={YellowAngel} alt="" className="element-yellow" />
      </div>
    </section>
  );
}

export default Topics;
