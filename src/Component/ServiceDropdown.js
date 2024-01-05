import React, { useState } from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';

const ServiceDropdown = ({handleChangeService}) => {
  const [selectedOptionServices, setSelectedOptionServices] = useState("");

  const handleSelectChangeServices = (eventKey, event) => {
    // Use eventKey to get the selected value
    setSelectedOptionServices(eventKey);
    console.log(eventKey)
    handleChangeService(eventKey)
  };

  return (

    
    <div>


<style>
        {`
          .custom-dropdown {
            width: 1870px; /* Set the desired width */
          }
        `}



        {

            `
            .rs-dropdown-toggle, .rs-dropdown-toggle.rs-btn {
                display: inline-block;
                padding-right: 32px;
                position: relative;
                z-index: 5;
                width: 100%;
                height:50px;
                text-align: left;
                background: white;`
        }
      </style>



      <Dropdown
     
        title={selectedOptionServices || "Service"}
        id="input1"
        onSelect={handleSelectChangeServices}  // Use onSelect instead of onChange
        activeKey={selectedOptionServices}
        name="services"
        classPrefix="custom-dropdown"
        
      >
       
        <Dropdown.Menu title="Normal Washing">
          <Dropdown.Item   eventKey="Normal Washing (Wash & Fold)">Wash & Fold</Dropdown.Item>
          <Dropdown.Item eventKey="Normal Washing (Wash & Iron)">Wash & Iron</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Premium Washing">
          <Dropdown.Item   eventKey="Premium Washing (Wash & Fold)">Wash & Fold</Dropdown.Item>
          <Dropdown.Item eventKey="Premium Washing (Wash & Iron)">Wash & Iron</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Dry Cleaning">
          <Dropdown.Item   eventKey="Dry Cleaning (Shirt & Pants)">Shirt & Pants</Dropdown.Item>
          <Dropdown.Item eventKey="Dry Cleaning (Jacket & Hoodie)">Jacket & Hoodie</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Ironing">
          <Dropdown.Item   eventKey="Ironing (Normal Iron)">Normal Iron</Dropdown.Item>
          <Dropdown.Item eventKey="Ironing (Steam Iron)">Steam Iron</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Shoes Washing">
          <Dropdown.Item   eventKey="Shoes Washing (Pair Of Shoes)">Pair Of Shoes</Dropdown.Item>
        
        </Dropdown.Menu>

        <Dropdown.Menu title="Blanket Washing">
          <Dropdown.Item   eventKey="Blanket Washing (Light Weight)">Light Weight</Dropdown.Item>
          <Dropdown.Item eventKey="Blanket Washing (Single Bed)">Single Bed</Dropdown.Item>
          <Dropdown.Item eventKey="Blanket Washing (Double Bed)">Double Bed</Dropdown.Item>
          <Dropdown.Item eventKey="Blanket Washing (Heavy Weight)">Heavy Weight</Dropdown.Item>
          
        </Dropdown.Menu>








      </Dropdown>
    </div>
  );
};

export default ServiceDropdown;
