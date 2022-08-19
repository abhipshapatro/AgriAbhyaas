import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

export default function Carousel() {
    let setting = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow:5,
        slidesToScroll:1,
        cssEase:"linear"
     }
  return (
    <div>
      <Slider {...setting}>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 425.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 444.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 425.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 444.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 425.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 425.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 425.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
      <div className="card-wrapper">
         <div className="card">
            <div className="card-image">
               <img src="images/Rectangle 425.png" alt="" />
            </div>
            <div className="card-title">
               <h5>Mathematics</h5>
            </div>
         </div>
      </div>
    </Slider>
    </div>
  )
}

