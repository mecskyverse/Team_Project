import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import serviceimg from "../Component/images/services.jpeg";
const Services = () => {
  return (
   <>
<Navbar/>
<div className="bg-image" >
<img className="w-100" alt="" src={serviceimg} />
</div>
<div className='container-fluid mt-5 mb-5'>
<div className='row'>
  <div className='col-lg-4 rounded col-md-4 col-sm-12'>
  <div className="bg-image rounded " >
  <img
    src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.webp"
    className="w-100"
  />
  <div
    className="mask rounded text-light d-flex justify-content-center flex-column  "
    style={{ backgroundColor: "black" }}
  >
    <h4 className='text-start mx-5'>Pricing</h4>
    <p className="m-0">paragraph</p>
  </div>
</div>
  </div>

</div>
</div>


<Footer/>
   </>
  )
}

export default Services