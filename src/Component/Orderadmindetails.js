import React from 'react'
import "../Orderadmindetail.css";
import Starating from "./Starrating";
import ColorSelector from './ColorSelector';
import { FaBook, FaCube, FaArrowCircleUp, FaTruck, FaHandshake,FaCheck, FaStar} from 'react-icons/fa';
{/* <FontAwesomeIcon icon="fa-solid fa-book" /> */}
const Orderadmindetails = () => {
  return (
    <>
    <div className="container">
        <div className="row  mb-5">
            <h1 className='my-head ml-lg-0 ml-5'>Order Details</h1>
    {/* price */}
    <div className="col-xl-12 mt-4 col-lg-12 my-first-container">
  <div className="row">
    <div className="col-lg-8 align-items-start col-md-4 col-sm-12">
      <ul className="mt-3 align-items-start text-start list-unstyled">
        <li className="text-uppercase text-start py-1">#408-254656-6512</li>
        <li className="text-uppercase text-start py-1">Normal Washing: Order Placed in 03 Oct, 2023 at 01:23PM</li>
      </ul>
    </div>
    <div className="col-lg-4 col-md-8 col-sm-12 d-flex align-items-center justify-content-end">
      <p className="my-price mt-2 mr-5 font-weight-bold">₹485.00</p>
    </div>
  </div>
  </div>
  </div>
  {/* timeline optional */}
  {/* <div className="row py-5 mt-5">
    <div className="col">
      <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
           
          >
            <div className="inner-circle" />
            <p className="h6 my-icons active mt-3 mb-1"><FaBook /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Order Placed</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
      
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaCube /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Pickup</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaArrowCircleUp /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Processing</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
          
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaTruck /></p>
            <p className="h6 mt-2  mb-0 mb-lg-0">Out for Delivery</p>
          </div>
        </div>
        <div className="timeline-step mb-0">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaHandshake /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Delivered</p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  </div>
{/* timeline */}
<div className="container padding-bottom-3x mb-1">
    <div className="card-body">
      <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
        <div className="step completed">
          <div className="step-icon-wrap">
          <div className="step-icon text-white">
             <FaCheck/>
            </div>
          </div>
          <div >
          <p className="h6 my-icons active mt-3 mb-1"><FaBook /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Order Placed</p>
          </div>
        </div>
        <div className="step completed">
          <div className="step-icon-wrap">
          <div className="step-icon text-white">
             <FaCheck/>
            </div>
          </div>
          <div >
          <p className="h6 my-icons mt-3 mb-1"><FaCube /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Pickup</p>
          </div>
        </div>
        <div className="step completed">
          <div className="step-icon-wrap">
          <div className="step-icon text-white">
             <FaCheck/>
            </div>
          </div>
          <div className='text-muted'>
          <p className="h6 my-icons mt-3 mb-1"><FaArrowCircleUp /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Processing</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon-wrap">
          <div className="step-icon text-white">
             <FaCheck/>
            </div>
          </div>
          <div className='text-muted'>
          <p className="h6 my-icons mt-3 mb-1"><FaTruck /></p>
            <p className="h6 mt-2  mb-0 mb-lg-0">Out for Delivery</p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon-wrap">
            <div className="step-icon text-white">
             <FaCheck/>
            </div>
          </div>
          <div className='text-muted'>
          <p className="h6 my-icons mt-3 mb-1"><FaHandshake /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Delivered</p>
          </div>
        </div>
      </div>
    </div>

</div>
{/* customer details and pickup details */}
<div className='container'>
  <div className='row py-lg-0 justify-content-between  px-5  py-3'>
    {/* Customer Details Partition */}
    <div className='col-lg-6 container-customer-deatils  col-md-6 col-sm-12 col-12'>
  <div className='px-lg-2 mt-3'>
    <h5 className=" mb-3">Customer Details</h5>
    <div className="row">
      <div className="col-md-4">
        <ul className='list-unstyled'>
          <li className='font-weight-bold py-2'>
            Name:
          </li>
          <li className='font-weight-bold py-2'>
            Phone:
          </li>
          <li className='font-weight-bold py-2'>
            Email:
          </li>
          <li className='font-weight-bold py-2'>
            Service:
          </li>
        </ul>
      </div>
      <div className="col-md-8">
        <ul className='list-unstyled'>
          <li className='text-muted py-2'>
          Rohan Sharma
          </li>
          <li className='text-muted py-2'>
          +91- 7245-124632
          </li>
          <li className='text-muted py-2'>
          rohan.sharma@gmail.com
          </li>
          <li className='text-muted py-2'>
          Normal Washing (Wash & Fold)
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    {/* Pickup Details Partition */}
    <div className='col-lg-5 container-pick-deatils col-md-6 col-sm-12 col-12'>
  <div className='px-lg-2 mt-3'>
    <h5 className=" mb-3">PickUp Details</h5>
    <div className="row">
      <div className="col-md-6">
        <ul className='list-unstyled'>
          <li className='text-uppercase font-weight-bold pick-text py-2'>
          Pickup Date:
          </li>
          <li className='text-uppercase font-weight-bold pick-text py-2'>
          Pickup Time:
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <ul className='list-unstyled'>
          <li className='text-uppercase py-2'>
          03 Oct 2023
          </li>
          <li className='text-uppercase py-2'>
          01:23 PM
          </li>
        
        </ul>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
<div className='container mt-5'>
  <div className='row py-lg-0 justify-content-between  px-5  py-3'>
    {/* order weight and price */}
    <div className='col-lg-6 container-customer-deatils  col-md-6 col-sm-12 col-12'>
  <div className='px-lg-2 mt-3'>
   
    <div className="row">
      <div className="col-md-4">
        <ul className='list-unstyled'>
          <li className=' py-2'>
          Total Weight:
          </li>
          <li className=' py-2'>
          Total Items:
          </li>
          <li className='py-2'>
          Total Amount:
          </li>
          
        </ul>
      </div>
      <div className="col-md-8">
        <ul className='list-unstyled'>
          <li className='text-success font-weight-bold py-2'>
          8.00 <span className='text-muted'>KG</span>
          </li>
          <li className='text-success font-weight-bold py-2'>
          33
          </li>
          <li className='text-success font-weight-bold py-2'>
          ₹485.00
          </li>
         
        </ul>
      </div>
      <div className='ml-5 col-5 mb-2 text-center'>
      <button
      type="submit"
    
      style={{
        backgroundColor: '#FFF',
        color: '#FA8232', 
        border: '1px solid #FA8232', 
        borderRadius: '43px', 
        padding: '8px 16px', 
        cursor: 'pointer', 
      }}
    >
      Save
    </button>
      </div>
    </div>
  </div>
</div>
    {/* Change status */}
    <div className='col-lg-5 container-pick-deatils col-md-6 col-sm-12 col-12'>
  <div className='px-lg-2 mt-3'>
    <h5 className=" mb-3">Change Status</h5>
    <div className="row ml-2">
        <div>
        <ColorSelector/>
        </div>
        <div className='ml-4'>
        <button
      type="submit"
    
      style={{
        backgroundColor: '#FFF',
        color: '#FA8232', 
        border: '1px solid #FA8232', 
        borderRadius: '43px', 
        padding: '8px 16px', 
        cursor: 'pointer', 
      }}
    >
      Save
    </button>
        </div>
      
    </div>

  </div>
</div>

  </div>
</div>

<div className='container mt-5 '>
  <div className='row py-lg-0 justify-content-start   px-5  py-3'>
   
    {/* shipping details */}
    <div className='col-lg-5  col-md-6 col-sm-12 '>
  <div className='px-lg-2 mt-3'>
  <h5 className=" mb-3">Shipping Address</h5>
    <div className="row">
        <p className='font-weight-bold ml-3'>Rohan Sharma</p>
        <p className='text-muted ml-3'>
        125, Road No. 13/x, Morden valley, Kharar, Punjab, India.
        </p>
      <div className="col-md-4">
        <ul className='list-unstyled'>
          <li className=' py-2'>
          Total Weight:
          </li>
          <li className=' py-2'>
          Total Items:
          </li>  
        </ul>
      </div>
      <div className="col-md-8">
        <ul className='list-unstyled'>
        <li className='text-muted py-2'>
          Rohan Sharma
          </li>
          <li className='text-muted py-2'>
          +91- 7245-124632
          </li>
         
         
        </ul>
      </div>
    </div>
  </div>
</div>
    {/* instructions*/}
    <div className='col-lg-4  col-md-6 col-sm-12 col-12'>
  <div className='px-lg-2 mt-3'>
    <h5 className=" mb-3">Order Instruction</h5>
    <p className='text-muted'>
    Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.
    </p>

  </div>

    </div>


  </div>
</div>
<div className='container mt-5 '>
  <div className='row py-lg-0 justify-content-start   px-5  py-3'>
   
    {/* shipping details */}
    <div className='col-lg-5  col-md-6 col-sm-12 '>
  <div className='px-lg-2 mt-3'>
  <h5 className=" mb-3">Shipping Address</h5>
    <div className="row">
     
    <div className="container">
<Starating/>
  </div>
    
    </div>
  </div>
</div>
    {/* instructions*/}
    <div className='col-lg-4  col-md-6 col-sm-12 col-12'>
  <div className='px-lg-2 mt-3'>
    <h5 className=" mb-3">Feedback</h5>
    <p className='text-muted'>
    Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.
    </p>

  </div>

    </div>


  </div>
</div>

    {/* <div className='col-lg-6'>

    </div>
    <div className='col-lg-6'>

    </div> */}



    </>
  )
}

export default Orderadmindetails