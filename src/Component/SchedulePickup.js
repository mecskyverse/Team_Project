import React, { useState, useEffect } from "react";
import "../schedulepickup.css"
import image1 from "../Component/images/truck_img.png"
import image11 from "../Component/images/google_icon.png"


const SchedulePickup = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [selectedOptionCategory, setSelectedOptionCategory] = useState("");
    const [selectedOptionServices, setSelectedOptionServices] = useState("");
    const [selectedOptionTiming, setSelectedOptionTiming] = useState("");
    

    const handleSelectChangeCategory = (event) => {
      setSelectedOptionCategory(event.target.value);
    };
  
  
    const handleSelectChangeServices = (event) => {
      setSelectedOptionServices(event.target.value);
    };
  
  
    const handleSelectChangeTiming = (event) => {
      setSelectedOptionTiming(event.target.value);
    };


 
    return (
      <div className="PickUpForm">
        <div className="backgroundimg"></div>
        <div className="content">
          <div className="toplogo">
            <h2>Schedule A Pick Up</h2>
            <img src={image1} alt="" />
          </div>
  
          <div className="NameInput">
            <p style={{marginBottom: "0px"}}>Name</p>
            <div className="grid-container-pickup">
              <div>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>
  
          <div className="grid-container-pickup">
            <div>
              <p style={{marginBottom: "0px"}}>Email</p>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <p style={{marginBottom: "0px"}}>Phone</p>
              <input type="number" placeholder="+91" />
            </div>
          </div>
  
          <div className="grid-container-pickup">
            <div>
              <p style={{marginBottom: "0px"}}>Category</p>
              <select
                id="input1"
                onChange={handleSelectChangeCategory}
                value={selectedOptionCategory}
              >
                <option value="" disabled hidden>
                  Category
                </option>
                <option value="option1">Normal Washing</option>
                <option value="option2">Premium Washing</option>
                <option value="option3">Dry Cleaning</option>
                <option value="option3">Ironing</option>
                <option value="option3">Shoes Washing</option>
                <option value="option3">Blanket</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <p style={{marginBottom: "0px"}}>Services</p>
              <select
                id="input1"
                onChange={handleSelectChangeServices}
                value={selectedOptionServices}
              >
                <option value="" disabled hidden>
                  Services
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
  
          <div className="items_input">
            <p style={{marginBottom: "0px"}}>Number of items</p>
            <input
              type="text"
              placeholder="Items"
              
            />
          </div>
          <div className="grid-container-pickup">
            <div className="date-input-container">
              <input type="date" placeholder="Date"  />
            </div>
            <div>
              <select
                id="input1"
                onChange={handleSelectChangeTiming}
                value={selectedOptionTiming}
              >
                <option id='input2'value="" disabled hidden>
                  Timing
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                <option value="option3">Option 3</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div>
            <p style={{marginBottom: "0px"}}>Address</p>
            <div className="grid-container-pickup">
              <div>
                <input type="text" placeholder="Street Address" />
              </div>
              <div>
                <input type="text" placeholder="Area" />
              </div>
            </div>
            <div className="grid-container-pickup" style={{ marginTop: "10px" }}>
              <div>
                <input type="text" placeholder="City" />
              </div>
              <div>
                <input type="number" placeholder="Zip Code" />
              </div>
            </div>
          </div>
  
          <div>
            <p style={{marginBottom: "0px"}}>Google location</p>
            <div className="pickup-input-wrapper">
              <input type="text" placeholder="Google location" />
              <button type="button" className="pickup-eye-button">
              <img  src={image11} style={{ height: '20px', width: '20px' }} />
  
              </button>
            </div>
          </div>
          <div>
            <p style={{marginBottom: "0px"}}>Special Instruction</p>
            <input type="text" placeholder="Special Instruction" />
          </div>
  
          <div className="Submit_button">
            <button type="">Submit</button>
          </div>
        </div>
      </div>
    );
}

export default SchedulePickup