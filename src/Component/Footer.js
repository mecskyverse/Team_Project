import React from 'react'
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <div>
         <footer className="text-center text-lg-start my-footer bg-body-tertiary ">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-3">
      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container  text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4  col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h2 className="text-uppercase  font-weight-bold mb-4">Laundry</h2>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bolder mb-4">
              Company Address
            </h6>
            <p>
              <Link href="/#!" className="text-reset">
                Address of the company
              </Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bolder mb-4">
              Operating Hours
            </h6>
            <p>Mon -Fri: 8am-8pm</p>
            <p>Saturday: 9am-7pm</p>
            <p>Sunday: 9am-6pm</p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bolder mb-4">
              Check us out
            </h6>
            <p>
              <i className="fas fa-home me-3" />{" "}
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
            </p>
            <p>
              <i className="fas fa-phone me-3" />
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    {/* Copyright */}
  </footer>
  <div
    className="text-center p-1 mt-3"
    style={{ backgroundColor: "rgba(254, 254, 254, 0.05)" }}
  >
    <p className="font-weight-bolder">Design &amp; Developed by Appenius</p>
  </div>
  
    </div>
  )
}

export default Footer