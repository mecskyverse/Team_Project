import React, { useState } from "react";
import "../schedulepickup.css";
import {
  FaHouseUser,
  FaArrowRight,
  FaCircleNotch,

  FaCheckCircle,
} from "react-icons/fa";
import image1 from "../Component/images/truck_img.png";
import img2 from "../Component/images/background_image_pickup.png"

import { Link } from "react-router-dom";
//api

import Footer from "./Footer";
import Navbar from "./Navbar";


import ServiceDropdown from "./ServiceDropdown";


const SchedulePickup = () => {
 


  const [selectedOptionTiming, setSelectedOptionTiming] = useState("");





  const handleSelectChangeTiming = (event) => {
    setSelectedOptionTiming(event.target.value);
  };

  return (
    <>
      <Navbar />
      

      <section className="container-fluid py-5 ">
      <div className="backgroundimg">
        <img src={img2}/>
      </div>
        <div className="PickUpForm">
          
          <div className="content">
            <div className="toplogo">
              <h2>Schedule A Pick Up</h2>
              <img src={image1} alt="" />
            </div>

           
              <div className="grid-container-pickup">
                <div>
                  <p style={{ marginBottom: "0px" }}>Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                   
                   
                  />
                </div>
                <div>
                  <p style={{ marginBottom: "0px" }}>Phone</p>
                  <input
                    type="number"
                    placeholder="+91"
                    name="phone"
                    
                  />
                </div>
              </div>

              <div className="items_input">
                <p style={{ marginBottom: "0px" }}>Services</p>

                
                <div>
               <ServiceDropdown/>
                </div>



              </div>
              <div className="grid-container-pickup">
                <div className="date-input-container">
                  <p style={{ marginBottom: "0px" }}>Date</p>
                  <input type="date" placeholder="Date" />
                </div>
                <div>
                  <p style={{ marginBottom: "0px" }}>Time</p>
                  <select
                    id="input9"
                    onChange={handleSelectChangeTiming}
                    value={selectedOptionTiming}
                    name="timing"
                  >
                    <option id="input2" hidden >
                      Timing
                    </option>
                    <option value="Timing 1">Timing 1</option>
                    
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>

              <div className="Address_pickup">
                <p style={{ marginBottom: "0px" }}>Address</p>
                <input type="text" placeholder="Address"  name="address"/>
              </div>

              <div>
                {/* <p style={{marginBottom: "0px"}}>Special Instruction</p> */}
                <input
                  type="text"
                  placeholder="Special Instruction (Optional)"
                  name="specialinstruction"
                />
              </div>

              <div className="pickup-textarea-schedule">
                <p
                  className="note-text-area"
                  style={{
                    color: "#111",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "150%", // or lineHeight: 1.5
                  }}
                >
                  NOTE
                </p>
                <p    style={{


width: '100%',
    flexShrink: 0,
 
    background: 'rgb(220, 203, 186)',
    color: 'var(--Gray-Scale-Gray-600, #666)',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '150%',
    border: '0px solid red',
    textAlign: "left",

    

                }}className="write-text-pickup">
                  1. Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit.
                </p>
              </div>

              <div className="Submit_button">
                <button
                  type=""
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                 
                >
                  Submit
                </button>
              </div>
            

            {/* popup */}
            <div
              className="modal w-100 container-fluid"
              id="exampleModalCenter"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header no-underline text-center">
                    <div style={{ display: "block", margin: "auto" }}>
                      <h1 style={{ color: "green", marginBottom: "10px" }}>
                        <FaCheckCircle />
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h2
                      className="modal-title font-weight-cold text-center mx-auto"
                      id="exampleModalLongTitle"
                    >
                      Your order is successfully placed!
                    </h2>
                  </div>

                  <div className="modal-body text-center no-underline">
                    <p className="text-dark">
                      Pellentesque sed lectus nec tortor tristique accumsan quis
                      dictum risus. Donec volutpat mollis nulla non facilisis.
                    </p>
                  </div>

                  <div className="modal-footer text-center no-underline justify-content-center">
                    <Link  to="/pickup" className="d-inline-block mx-2">
                      <button className="btn btn-hom1 font-weight-bold">
                        <FaHouseUser className="mx-3" /> Home
                      </button>
                    </Link>
                    <Link  to="/pickup" className="d-inline-block mx-2">
                      <button className="btn btn-order1 font-weight-bold">
                        View Order <FaArrowRight className="mx-3" />{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SchedulePickup;
