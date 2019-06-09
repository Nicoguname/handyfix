import React, { Component } from "react";
import ImageElect from "../Assets/Icons/icons1-electrical.png";
import ImagePlumb from "../Assets/Icons/icons8-plumber-50.png";
import ImagePaint from "../Assets/Icons/icons8-paint-bucket-48.png";
import ImageBrick from "../Assets/Icons/icons8-trowel-48.png";
import ImageCarp from "../Assets/Icons/icons8-saw-48.png";
import ImageMech from "../Assets/Icons/icons8-car-service-48.png";
import { Link } from 'react-router-dom';
import Artisan from './Artisan/Artisan.js';
import ImageHero1 from "../Assets/Images/workgroup.jpg";
// import ImageHero2 from "../Assets/Images/Construction-Insurance.jpg";
import "./styles/Trade.scss";

export class Trade extends Component {
  render() {

//     var slideIndex = 0;
//     showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("trade__image--slide");
//   // var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;

//   // if (slideIndex > slides.length) {slideIndex = 1}    
//   // for (i = 0; i < dots.length; i++) {
//   //   dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex-1].style.display = "block";  
//   // dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

    return (
      <div className="trade">
        
        <div className="trade__image">
        <div className="trade__message">At HandyFix, total customer satisfaction is our ultimate goal. If it's broken, needs remodelling or a brand new project, call us and we'll fix it.</div>
        {/* <div className="trade__image--container">
          <img className="trade__image1" src={ImageHero1} alt="hero" />
        </div> */}
        <div className="trade__image--slide">
            <img className="trade__image1" src={ImageHero1} alt="hero" />
        </div>

        {/* <div className="trade__image--slide">
          <div className="trade__image--fade"> 2 / 2</div>
            <img className="trade__image1" src={ImageHero2} alt="hero" />
        </div> */}
        {/* <div style="text-align:center">
        <span class="dot"></span> 
        <span class="dot"></span> 
        <span class="dot"></span> 
      </div> */}
        </div>
        <div className="trade__message1">Please click the relevant icon to book a service request</div>
        <div className="trade__icon">
        <Link to="/artisan?type=electrical"><div className="trade__icon--1">
            <img src={ImageElect} alt="elect" />
            <div class="trade__icon--1--middle">
              {/* <div class="trade__icon--1--text">Electrical</div> */}
                <a href={Artisan}>Electrical </a>
              </div>
          </div>
        </Link>
       
        <Link to="/artisan?type=plumbing">  <div className="trade__icon--2">
            <img src={ImagePlumb} alt="plumb" />
            <div class="trade__icon--2--middle">
          <div class="trade__icon--2--text">Plumbing</div>
        </div>
          </div>
          </Link>
        <Link to="/artisan?type=painting">  <div className="trade__icon--3">
            <img src={ImagePaint} alt="paint" />
            <div class="trade__icon--3--middle">
          <div class="trade__icon--3--text">Painting</div>
        </div>
          </div>
          </Link>
        <Link to="/artisan?type=bricklaying"> <div className="trade__icon--4">
            <img src={ImageBrick} alt="brick" />
            <div class="trade__icon--4--middle">
          <div class="trade__icon--4--text">Bricklaying</div>
        </div>
          </div>
          </Link>
        <Link to="/artisan?type=carpentry">  <div className="trade__icon--5">
            <img src={ImageCarp} alt="carp" />
            <div class="trade__icon--5--middle">
          <div class="trade__icon-51--text">Carpentry</div>
        </div>
          </div>
          </Link>
        <Link to="/artisan?type=auto-mech">  <div className="trade__icon--6">
            <img src={ImageMech} alt="mech" />
            <div class="trade__icon--6--middle">
          <div class="trade__icon--6--text">Auto-Mech</div>
        </div>
          </div>
          </Link>
        </div>
        <div class="trade__notice">DISCLAIMER: At HandyFix we are always committed to very high standards of service delivery. Each field technician has undergone 
        a thorough background check for added assurance and integrity. However, while vouching for the professionalism of our workforce, we would like to remind our customers that if a real emergency arises (e.g. fire, security, medical), that they promptly contact 
        the approprate authorities via the emergency hotlines </div> 
      </div>
    );
  }
}

export default Trade;
