import React from "react";
import Carousel from "./Carousel";
import "./Section.css";

function Section() {
  return (
    <div className="section">
      <div className="welcome-section">
        <div className="welcome-text">
          <h1 className="welcome-heading">Welcome to Agribhyaas</h1>
          <p className="welcome-para">
            As they say, practice makes you perfect. AgriAbhyaas is your one
            stop platform to practice and excel in challenging subjects.
          </p>
          <h4 className="welcome-footer">KNOW YOUR SELF TESTS</h4>
        </div>
        <div className="welcome-image">
          <img src="images/welcome.png" alt="" />
        </div>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
      <div className="hr"></div>
      <div className="info">
        Explore various topics for quiz to know where you stand. WLorem ipsum
        dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent
        libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per conubia nostra,
        per inceptos himenaeos. ante dapibus diam. Sed nisi. Nbcnt per conubia
        nostra.
      </div>
      <div className="question-section">
        <div className="question-section-left">
          
        </div>
        <div className="question-section-right"></div>
      </div>
    </div>
  );
}

export default Section;
