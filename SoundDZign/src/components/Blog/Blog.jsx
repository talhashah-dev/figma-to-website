/* eslint-disable no-unused-vars */
import React from "react";
import "./Blog.css";
import { Thumbnail1, Thumbnail2, Thumbnail3 } from "../../assets";

function Blog() {
  return (
    <section id="blog" className="pink">
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          <div className="card">
            <div className="tag">DAW</div>
            <a href="#">
              <img src={Thumbnail1} className="thumbnail"></img>
            </a>
            <a href="#">
              <h3 className="title">How To Mix Guitars Effectively</h3>
            </a>
          </div>

          <div className="card">
            <div className="tag">Mixing</div>
            <a href="#">
              <img src={Thumbnail2} className="thumbnail"></img>
            </a>
            <a href="#">
              <h3 className="title">How To Mix Guitars Effectively</h3>
            </a>
          </div>

          <div className="card">
            <div className="tag">Vox</div>
            <a href="#">
              <img src={Thumbnail3} className="thumbnail"></img>
            </a>
            <a href="#">
              <h3 className="title">How To Mix Guitars Effectively</h3>
            </a>
          </div>
        </div>
        <a href="#" className="post-btn">
          All Posts
        </a>
      </div>
    </section>
  );
}

export default Blog;
