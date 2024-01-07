import React from 'react'
import "../Orderuserdetails.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import snowflake from "../Component/images/snowflakes.png";
import deliveryman from "../Component/images/delivery_man1.png";
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
    <div className='col-lg-3 mt-5 mt-lg-5'>

  {/* Customer Details Partition */}
  <div className='px-lg-1 ml-lg-5 ml-4'>
  <div className='row  py-lg-0 '>
      <div className='col-lg-12   col-md-12 col-12'>
      <ul className='  px-0 list-unstyled'>
      <li className='font-weight-bold py-2'>
          Order No.: <span className='ml-3 text-muted font-weight-light'> 408-254656-6512</span> 
          </li>
          <li className='font-weight-bold py-2'>
          Order Placed: <span className='ml-3 text-muted font-weight-light'> 03\12\23 - 01:23 PM</span> 
          </li>
          <li className='font-weight-bold py-2'>
          Service: <span className='ml-3 text-muted font-weight-light'> Normal Washing (Wash & Fold)</span> 
          </li>
          <li className='font-weight-bold py-2'>
          Total Item: <span className='ml-3 text-muted font-weight-light'> 17</span> 
          </li>
          <li className='font-weight-bold py-2'>
          Total Weight: <span className='ml-3 text-muted font-weight-light'> 33KG</span> 
          </li>
          <li className='font-weight-bold py-2'>
          Total Amount: <span className='ml-3 text-muted font-weight-light'> ₹39.00</span> 
          </li>
        </ul>
      </div>
      {/* <div className='col-lg-6 px-0 col-md-6 col-6'>
      <ul className=' mt-3 text-danger px-0 list-unstyled'>
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
      </div> */}
     
    </div>
    {/* <div className="row">
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
      <div className="col-md-4 col-lg-8 col-sm-4">
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
    </div> */}
  </div>
{/* shipping details */}
  <div className='px-lg-1 ml-lg-5 mt-5 ml-4'>
  <h5 className=" mb-3">Shipping Address</h5>
  <p className='font-weight-bold'>Rohan Sharma</p>
        <p className='text-muted '>125, Road No. 13/x, Morden valley, Kharar, Punjab, India.
        </p>
    <div className="row">
        
      <div className="col-md-12">
        <ul className='list-unstyled'>
          <li className='font-weight-bold py-2'>
          Phone: <span className='ml-3 text-muted font-weight-light'> +91- 7245-124632</span> 
          </li>
          <li className='font-weight-bold py-2'>
          Email: <span className='ml-3 text-muted font-weight-light'> xyz@gmail.com</span> 
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
  <h3 className='px-3 ml-lg-3'>Feedback</h3>
<div className='row py-lg-3 mt-2 justify-content-start   px-lg-5  py-3'>
      <textarea 
      className='my-feedback-area p-3'
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
    backgroundColor: '#FA8232',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s', // Add a smooth transition effect
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#F57C1E'} // Darker orange on hover
  onMouseOut={(e) => e.target.style.backgroundColor = '#FA8239'} // Return to original color on mouse out
>
  Submit Review
</button>

</div>

</div>
 

    </div>
    <div className='col-lg-3'>
    <img className="w-100  mt-4 d-inline-block my-card-main-img" alt="" src={deliveryman} />
    </div>
    {/* timeline */}
    <div className='col-lg-3  col-sm-12'>
    {/* <div className="card-body"> */}
    <div class="container py-0">
    <div class="page-header mt-0">
   
  </div>
  <ul class="timeline">
    <li class="timeline-inverted">
      <div class="timeline-badge">1</div>
      <div class="timeline-panel">
          <p className="h6 mt-4 font-weight-bold  mb-0 mb-lg-0">Order Placed</p>
          <p className='date-time text-muted' >21/12/23 - 01:00 PM</p>
      </div>
    </li>
    <li class="timeline-inverted">
      <div class="timeline-badge">2</div>
      <div class="timeline-panel">
      <p className="h6 mt-4 font-weight-bold  mb-0 mb-lg-0">Picked</p>
          <p className='date-time text-muted' >21/12/23 - 01:00 PM</p>
      </div>
    </li>
    <li class="timeline-inverted">
      <div class="timeline-badge">3</div>
      <div class="timeline-panel">
      <p className="h6 mt-4  font-weight-bold mb-0 mb-lg-0">Processing</p>
          <p className='date-time text-muted' >21/12/23 - 01:00 PM</p>
      </div>
    </li>
    <li class="timeline-inverted">
      <div class="timeline-badge">4</div>
      <div class="timeline-panel">
      <p className="h6 mt-4 font-weight-bold mb-0 mb-lg-0">Out for Delivery</p>
          <p className='date-time text-muted' >21/12/23 - 01:00 PM</p>
      </div>
    </li>
    <li class="timeline-inverted">
      <div class="timeline-badge">5</div>
      <div class="timeline-panel">
      <p className="h6 mt-4  font-weight-bold mb-0 mb-lg-0">Delivered</p>
          <p className='date-time text-muted' >21/12/23 - 01:00 PM</p>
      </div>
    </li>
  
  </ul>
</div>

  {/* </div> */}
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