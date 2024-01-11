import React from "react";
import { Button } from "rsuite";
import img1 from "./images/offerpopupimg.png";
import img2 from "./images/offerpopupdrop.png";
import img3 from "./images/offerpopupstripimg.png";
import "../offerpopup.css"

const Offerpopup = () => {
  return (
    <div className="popup-start">
    <div className="offerpopup">
      <div className="textname">
        <div className="hero-text">
        <p className="specialnew">Special New Year Offer</p>
        <p className="specialoff">40% OFF</p>
        <p className="specialwash">On your First wash hurry up!!</p>

       
        <button className="btn-popup">Book Now</button>

<img className="imagename2" src={img2} />
        <img className="imagename1" src={img3} />
      </div>
      </div>
      <div >
        <img className="imagename" src={img1} />
      </div>
    </div>

</div>
  );
};

export default Offerpopup;
