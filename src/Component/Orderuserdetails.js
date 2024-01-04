import React from 'react'
import "../Orderuserdetails.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import snowflake from "../Component/images/snowflakes.png";
import deliveryman from "../Component/images/delivery.jpeg";
import Starating from "./Starrating";
import ColorSelector from './ColorSelector';
// import {Fastar } from "react-icons/fa";
import { FaBook, FaCube, FaArrowCircleUp, FaTruck, FaHandshake,FaCheck, FaStar} from 'react-icons/fa';
const Orderuserdetails = () => {
  return (
  <>
  <Navbar/>
<div className="container-fluid padding-bottom-3x py-5 mb-1">
  <h2 className='text-center'>Order Details</h2>
  <div className='row mt-lg-5'>
    <div className='col-lg-4 mt-lg-5'>

  {/* Customer Details Partition */}
  <div className='px-lg-1 mt-3 ml-5'>
    <div className="row">
      <div className="col-md-4 col-lg-4 col-sm-5">
        <ul className='list-unstyled'>
          <li className='font-weight-bold py-2'>
          Order No.:
          </li>
          <li className='font-weight-bold py-2'>
          Order Placed:
          </li>
          <li className='font-weight-bold py-2'>
          Service:
          </li>
          <li className='font-weight-bold py-2'>
          Total Item:
          </li>
          <li className='font-weight-bold py-2'>
          Total Weight:
          </li>
          <li className='font-weight-bold py-2'>
          Total Amount:
          </li>
        </ul>
      </div>
      <div className="col-md-8 col-lg-8 col-sm-6">
        <ul className='list-unstyled'>
          <li className='text-muted py-2'>
          408-254656-6512
          </li>
          <li className='text-muted py-2'>
          03\12\23  -  01:23 PM
          </li>
          <li className='text-muted py-2'>
          Normal Washing (Wash & Fold)
          </li>
          <li className='text-muted py-2'>
          17
          </li>
          <li className='text-muted py-2'>
          33KG
          </li>
          <li className='text-muted py-2'>
          ₹39.00
          </li>
        </ul>
      </div>
    </div>
  </div>
{/* shipping details */}
  <div className='px-lg-1 mt-5 ml-5'>
  <h5 className=" mb-3">Shipping Address</h5>
    <div className="row">
        <p className='font-weight-bold ml-3'>Rohan Sharma</p>
        <p className='text-muted ml-3'>
        125, Road No. 13/x, Morden valley, Kharar, Punjab, India.
        </p>
      <div className="col-md-4">
        <ul className='list-unstyled'>
          <li className=' py-2'>
          Phone:
          </li>
          <li className=' py-2'>
          Email:
          </li>  
        </ul>
      </div>
      <div className="col-md-8">
        <ul className='list-unstyled'>
        <li className='text-muted py-2'>
        +91- 7245-124632
          </li>
          <li className='text-muted py-2'>
          xyz@gmail.com
          </li>
         
         
        </ul>
      </div>
    </div>
  </div>

  <div className='container mt-5 mb-5 '>
  <div className='row py-lg-0 justify-content-start   px-4  py-3'>
    {/* shipping details */}
    <div className='col-lg-5  col-md-6 col-sm-12 '>
  <div className='px-lg-2 mt-3'>
    <div className="d-inline">
    <h5 className=" d-inline mb-3">Rating</h5>
<Starating />  
    </div>
  </div>
</div>


  </div>
</div>
<div className='container mt-3 mb-5'>
  <h3 className='px-3 ml-3'>Feedback</h3>
<div className='row py-lg-3 mt-2 justify-content-start   px-5  py-3'>
      <textarea
        id='feedback'
        name="postContent"
        rows={4}
        cols={40}
        placeholder='Write down your feedback about our product & services'
      />
</div>
<div className='px-4 ml-2 justify-content-start  py-3'>
<button
      type="submit" 
      style={{
        backgroundColor: '#FA8232', // Orange background color
        color: '#fff',             // White text color
        padding: '10px 20px',      // Adjust padding as needed
        border: 'none',            // Remove border
        borderRadius: '5px',       // Add border radius for rounded corners
        cursor: 'pointer',         // Show pointer cursor on hover
        fontWeight: 'bold',
      }}
    >
      Submit Review
    </button>
</div>

</div>
 

    </div>
    <div className='col-lg-3'>
    <img className="w-75 d-inline-block my-card-main-img" alt="" src={deliveryman} />
    </div>
    <div className='col-lg-2 col-sm-12'>
    <div className="card-body">
    <div className="vertical-timeline custom-timeline">
      <div className="custom-step completed">
        <div className="custom-step-icon-wrap">
          <div className="custom-step-icon text-white">
          <FaCheck/>
          </div>
        </div>
        <div>
          <p className="h6 custom-icons active mt-3 mb-1"><FaBook /></p>
          <p className="h6 mt-2 mb-0 mb-lg-0">Order Placed</p>
        </div>
      </div>
      <div className="custom-step completed">
        <div className="custom-step-icon-wrap">
          <div className="custom-step-icon text-white">
            <FaCheck/>
          </div>
        </div>
        <div>
          <p className="h6 custom-icons mt-3 mb-1"><FaCube /></p>
          <p className="h6 mt-2 mb-0 mb-lg-0">Pickup</p>
        </div>
      </div>
      <div className="custom-step completed">
        <div className="custom-step-icon-wrap">
          <div className="custom-step-icon text-white">
            <FaCheck/>
          </div>
        </div>
        <div className='text-muted'>
          <p className="h6 custom-icons mt-3 mb-1"><FaArrowCircleUp /></p>
          <p className="h6 mt-2 mb-0 mb-lg-0">Processing</p>
        </div>
      </div>
      <div className="custom-step">
        <div className="custom-step-icon-wrap">
          <div className="custom-step-icon text-white">
            <FaCheck/>
          </div>
        </div>
        <div className='text-muted'>
          <p className="h6 custom-icons mt-3 mb-1"><FaTruck /></p>
          <p className="h6 mt-2  mb-0 mb-lg-0">Out for Delivery</p>
        </div>
      </div>
      <div className="custom-step">
        <div className="custom-step-icon-wrap">
          <div className="custom-step-icon text-white">
            <FaCheck/>
          </div>
        </div>
        <div className='text-muted'>
          <p className="h6 custom-icons mt-3 mb-1"><FaHandshake /></p>
          <p className="h6 mt-2 mb-0 mb-lg-0">Delivered</p>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div className='col-lg-3 my-snow-img'>
    <img className="w-100 my-snow-img  d-inline-block " alt="" src={snowflake} />
    </div>
  </div>
  
</div>


<Footer/>
  </>
  )
}

export default Orderuserdetails