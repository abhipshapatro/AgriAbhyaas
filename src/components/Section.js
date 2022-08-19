import React from "react";
import Carousel from "./Carousel";
import FooterCarousel from "./FooterCarousel";

import "./Section.css";

function Section() {
  const [food, setFood] = React.useState("fruit");
  const [drink, setDrink] = React.useState("water");

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };

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
      <div className="sliders container">
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
          <div className="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Circles</a>
              <a href="#">Triangles</a>
              <a href="#">Quadrilaterals</a>
            </div>
          </div>
          <div className="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Circles</a>
              <a href="#">Triangles</a>
              <a href="#">Quadrilaterals</a>
            </div>
          </div>
          <div className="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Circles</a>
              <a href="#">Triangles</a>
              <a href="#">Quadrilaterals</a>
            </div>
          </div>
        </div>

        <div className="question-section-right">
          <form class="quiz-form" id="quiz-form">
            <div class="question-container">
              <h3>1.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                error modi consequuntur suscipit maxime voluptates totam nulla o
                mnis molestiae earum, ut tempore? Cum, dolor. Aliquid quae eaque
                adipisci rerum ipsa?
              </p>
            </div>
            <div className="options">
              <label>
                <input type="radio" name="question1" value="45°" />
                <span class="radio-value">45°</span>
              </label>
              <label>
                <input type="radio" name="question1" value="90°" />
                <span class="radio-value">90°</span>
              </label>
              <label>
                <input type="radio" name="question1" value="60°" />
                <span class="radio-value">60°</span>
              </label>
            </div>
            <div className="btns">
              <button id="ans-sol">Answer and Solution</button>
              <button id="discuss">Join the discussion</button>
              <button id="save">Save for later</button>
            </div>
            <div class="question-container">
              <h3>2.</h3>
              <p>
                If a triangle has an angle of 90 degrees, what is it called?
              </p>
            </div>
            <div className="options">
              <label>
                <input type="radio" name="question2" value="obtuse" />
                <span class="radio-value">obtuse</span>
              </label>
              <label>
                <input type="radio" name="question2" value="acute" />
                <span class="radio-value">acute</span>
              </label>
              <label>
                <input type="radio" name="question2" value="right angled" />
                <span class="radio-value">right angled</span>
              </label>
            </div>
            <div className="btns">
              <button id="ans-sol">Answer and Solution</button>
              <button id="discuss">Join the discussion</button>
              <button id="save">Save for later</button>
            </div>
            <div class="question-container">
              <h3>3.</h3>
              <p>
                If a triangle has an angle of 90 degrees, what is it called?
              </p>
            </div>
            <div className="options">
              <label>
                <input type="radio" name="question2" value="obtuse" />
                <span class="radio-value">obtuse</span>
              </label>
              <label>
                <input type="radio" name="question2" value="acute" />
                <span class="radio-value">acute</span>
              </label>
              <label>
                <input type="radio" name="question2" value="right angled" />
                <span class="radio-value">right angled</span>
              </label>
            </div>
            <div className="btns">
              <button id="ans-sol">Answer and Solution</button>
              <button id="discuss">Join the discussion</button>
              <button id="save">Save for later</button>
            </div>
            <div class="question-container">
              <h3>4.</h3>
              <p>
                If a triangle has an angle of 90 degrees, what is it called?
              </p>
            </div>
            <div className="options">
              <label>
                <input type="radio" name="question2" value="obtuse" />
                <span class="radio-value">obtuse</span>
              </label>
              <label>
                <input type="radio" name="question2" value="acute" />
                <span class="radio-value">acute</span>
              </label>
              <label>
                <input type="radio" name="question2" value="right angled" />
                <span class="radio-value">right angled</span>
              </label>
            </div>
            <div className="btns">
              <button id="ans-sol">Answer and Solution</button>
              <button id="discuss">Join the discussion</button>
              <button id="save">Save for later</button>
            </div>
          </form>
        </div>
      </div>

      <div className="sliders container">
            <h1 className='slider_title'>Checkout other packages</h1>
            <FooterCarousel />
         </div>
    </div>
  );
}

export default Section;
