import React from 'react'
import {Link} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import contactimg from "../Component/images/conatct_form.jpeg";
import location from "../Component/images/Map Pin.png";
import mail from "../Component/images/Email.png";
import phone from "../Component/images/PhoneCall.png";
import "../Contact.css";
// import { FaLOcation, FaPhone, FaVoicemail } from 'react-icons/fa';
const Contact = () => {
  return (
 <>
 <>
 <Navbar/>
 <div className="bg-image-main" >
<img className="w-100" alt="" src={contactimg} />
</div>
  {/*Section: Contact v.2*/}
  <div className='container px-4 px-lg-0 py-3'>
  <section className="mb-4">
  
    <div className="row mt-5">
        {/*Grid column*/}
        <div className="col-md-3 mb-5 text-start">
  <div className="d-flex flex-column align-items-center">
    <ul className="list-unstyled px-3 mb-0 text-center">
      <Link className='text-decoration-none' target='blank' to='https://maps.app.goo.gl/UN4CCqPbg4dnBaz67'>
      <li className='mb-3'>
        <img className="my-logo-contact mb-2 text-decoration-none" alt="" src={location} />
        <p className='text-decoration-none text-dark'>Show Room no.14,15 Darpan Residency Chindsa Colony Khanpur, Kharar, 140301</p>
      </li>
      </Link>
      
      <hr />
<Link className='text-decoration-none' target='blank' to='mailto:laughnlaundary@gmail.com'>
<li className='mb-3'>
        <img className="my-logo-contact text-decoration-none mb-2" alt="" src={mail} />
        <p className='text-dark text-decoration-none'>laughnlaundary@gmail.com</p>
      </li>
</Link>
      
      <hr />
      <Link className='text-decoration-none ' to='tel:+9177079-13579'>
      <li className='mb-3'>
        <img className="my-logo-contact text-decoration-none text-dark mb-2" alt="" src={phone} />
        <p className='text-decoration-none text-dark'>77079-13579</p>
      </li>
      </Link>
      
    </ul>
  </div>
</div>


      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-md-8 ml-lg-5  mb-md-0 mb-5">
      <h2 className='my-heading-contact-form'>Just Say Hello!</h2>
            <p className='text-muted mt-2 sub-head-contact-form'>Feel free to contact us.</p>
        <form
          id="contact-form"
          name="contact-form"
          action="mail.php"
          method="POST"
        >
          {/*Grid row*/}
          <div className="row mt-3">
           
            {/*Grid column*/}
            <div className="col-md-6">
              <div className="md-form mb-3 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control contact-form-input p-4 text-dark"
                  placeholder='Your Name'
                />
               
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-6">
              <div className="md-form mb-3">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control contact-form-input p-4 text-dark"
                  placeholder='E-Mail / Phone No.'
                />
             
              </div>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
          {/*Grid row*/}
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-3">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder='Subjects'
                  className="form-control contact-form-input p-4 text-dark"
                />
                
              </div>
            </div>
          </div>
          {/*Grid row*/}
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-md-12">
              <div className="md-form mb-3">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows={2}
                  className="form-control md-textarea contact-form-input p-4 text-dark"
                  placeholder='Message'
                  defaultValue={""}
                />

              </div>
            </div>
          </div>
          {/*Grid row*/}
        </form>
        <div className="text-center mt-2  text-md-left">
          <Link  className="btn my-contact-btn px-3 py-2 font-weight-bold text-white"
            onclick="document.getElementById('contact-form').submit();">
          Send Message
          </Link>
          {/* <a
            className="btn my-contact-btn px-3 py-2 font-weight-bold text-white"
            onclick="document.getElementById('contact-form').submit();"
          >
           Send Message
          </a> */}
        </div>
        <div className="status" />
      </div>
      {/*Grid column*/}
    
    </div>
  </section>



  
  </div>
 <div className='container-fluid mb-5 p-0'>
  <Link to='https://maps.app.goo.gl/UN4CCqPbg4dnBaz67'>
  <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: '400px' }}>
 <iframe
    width="600"
    height="450"
   
    loading="lazy"
    allowfullscreen
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.907342859346!2d76.5935137201742!3d30.723829101383275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391afbd7c5be547f%3A0xd0b6013c1e16a839!2sShow%20Room%20no.14%2C15%20Darpan%20Residency%20Chindsa%20Colony%20Khanpur%2C%20Kharar%2C%20140301!5e0!3m2!1sen!2sin!4v1641492096615!5m2!1sen!2sin"
  ></iframe>
</div>
  </Link>
 

 </div>
  {/*Section: Contact v.2*/}
  <Footer/>
</>

 </>
  )
}

export default Contact