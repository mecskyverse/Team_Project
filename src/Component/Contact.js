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
      <li className='mb-3'>
        <img className="my-logo-contact mb-2" alt="" src={location} />
        <p>Show Room no.14,15 Darpan Residency Chindsa Colony Khanpur, Kharar, 140301</p>
      </li>
      <hr />

      <li className='mb-3'>
        <img className="my-logo-contact mb-2" alt="" src={mail} />
        <p>laughnlaundary@gmail.com</p>
      </li>
      <hr />
      <li className='mb-3'>
        <img className="my-logo-contact mb-2" alt="" src={phone} />
        <p>77079-13579</p>
      </li>
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
 
  {/*Section: Contact v.2*/}
  <Footer/>
</>

 </>
  )
}

export default Contact