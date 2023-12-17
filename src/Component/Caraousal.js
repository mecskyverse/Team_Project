import React from 'react'
import '../caraousalbottom.css'
import Item from "./Items";
import Carousal from "@itseasy21/react-elastic-carousel";
// import img1 from "./images/img1.jpeg";
// import img2 from "./images/img2.jpeg";
// import img3 from "./images/img3.jpeg";
// import img4 from "./images/img4.jpeg";
// import btn from "./images/right-arrow.png"

import img1 from "../Component/images/pexels-amina-filkins-5414061 1.png"
import img2 from "../Component/images/pexels-tima-miroshnichenko-8774564 1.png"
import img3 from "../Component/images/Rectangle 71.png"
import img4 from "../Component/images/step4.jpeg"
import img5 from "../Component/images/Component 1.png"
import img6 from "../Component/images/Component 2.png"
import img7 from "../Component/images/Component 3.png"

const CaraousalBottom = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2},
        { width: 1200, itemsToShow: 3},
      ];
  return (
    <div className="BottomCaraousal">
    <h1>Why Laugh N Laundry?</h1>
    
      <Carousal breakPoints={breakPoints}  isRTL={false}  showArrows={false} pagination={false}>
      
       <Item>
        <div className="item">
          <img src={img1} alt="ueis"  />
          <div id="comp">
          <img  src={img5} alt="ueis"  />
          </div>
          <div id="cont">
          <p>Availabe On Weekends</p>
          </div>
         
         
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img2} alt="ueis"  />
          <div id="comp">
          <img  src={img6} alt="ueis"  />
          </div>
          
          <div id="cont">
          <p>Affordable per Kilo price</p>
          </div>
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img3} alt="ueis"  />
          <div id="comp">
          <img  src={img7} alt="ueis"  />
          </div>
          
          <div id="cont">
          <p>Certified Professional Cleaners</p>
          </div>
         
        </div>
       </Item>
       {/* <Item>
        <div className="item">
          <img src={img4} alt="ueis"  />
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img1} alt="ueis"  />
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img2} alt="ueis"  />
          
        </div> */}
       {/* </Item> */}
      </Carousal>
    </div>
  )
}

export default CaraousalBottom