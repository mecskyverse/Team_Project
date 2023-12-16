import React from "react";
import "../Project.css";
import img1 from "../Component/images/smile.png";
import img2 from "../Component/images/Washing Maching.png";
import img3 from "../Component/images/step1.jpeg";
import img4 from "../Component/images/step2.jpeg";
import img5 from "../Component/images/step3.jpeg";
import img6 from "../Component/images/step4.jpeg";
import img7 from "../Component/images/section5.jpeg";
const Home = () => {
  return (
    <>
   
        {/* nav */}
        <nav
          style={{ background: "#dce9d2" }}
          className="navbar my-nav-bar navbar-expand-lg"
        >
          <a className="navbar-brand ml-5 my-links" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-5">
                <a className="nav-link font-weight-bold my-links" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link font-weight-bold my-links" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item ml-5">
                <a
                  className="btn py-1 px-4 my-nav-btn1 mt-1"
                  href="#"
                  role="button"
                >
                  Signup
                </a>
              </li>
              <li className="nav-item ml-5 mr-5">
                <a
                  className="btn py-1 px-4 my-nav-btn2 mt-1"
                  href="#"
                  role="button"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>

        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
        <div class="bubble x11"></div>
        <div class="bubble x12"></div>
        <div class="bubble x13"></div>
        <div class="bubble x14"></div>
        <div class="bubble x15"></div>
        <div class="bubble x16"></div>
        <div class="bubble x17"></div>

        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
        <div class="bubble x11"></div>
        <div class="bubble x12"></div>
        <div class="bubble x13"></div>
        <div class="bubble x14"></div>
        <div class="bubble x15"></div>
        <div class="bubble x16"></div>
        {/* section1 */}
        <section className="container-fluid my-section-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {/* <img className="img-smile mt-4 " src="images/smile.png" alt="" /> */}
              <img className="img-smile mt-4" alt="" src={img1} />
              <h1 className="my-main-heading text-center mt-1">
                Every Spin <br /> Tells A story
              </h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="mt-4 py-5 mt-sm-5 img-washing-machine"
                alt=""
                src={img2}
              />
            </div>
          </div>
        </section>
        {/* section2 */}
        
        {/* section3 */}
        <section className="container-fluid py-5 my-section-3">
          <h3 style={{ color: "#D76D6D" }} className="text-center pt-3 ">
            HOW IT WORKS
          </h3>
          <h1 className="text-center mb-5 mt-3">Get it done in 4 steps</h1>
          <div className="row">
            <div className="col-lg-3 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card ">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 1</h4>
                  <h3 className="text-center my-sub-heading">Pick Up</h3>
                  {/* <img className="img-step-1" src="images/step1.jpeg" alt="" /> */}
                  <img className="img-step-1" alt="" src={img3} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card  mb-sm-4 mb-md-4 ">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 2</h4>
                  <h3 className="text-center my-sub-heading">Wash &amp; Dry</h3>
                  <img className="img-step-1" alt="" src={img4} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-sm-5   mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card  mb-sm-5 mb-md-5">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 3</h4>
                  <h3 className="text-center my-sub-heading">Fold</h3>
                  <img className="img-step-1" alt="" src={img5} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card ">
                <div className="card-body ">
                  <h4 className="text-center text-uppercase my-step">Step 4</h4>
                  <h3 className="text-center my-sub-heading">Delivery</h3>
                  <img className="img-step-1" alt="" src={img6} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section5 */}
        <section className="container-fluid my-section-5">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6">
              {/* <img className="img-section5 mt-5" src="images/section5.jpeg" alt="" /> */}
              <img className="img-section5 mt-5" alt="" src={img7} />
              {/* <h1 class="my-main-heading ">Every Spin Tells A story</h1> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mt-5 py-5 w-75 m-5">
                <h1 className="font-weight-bold">Lorem Ipsum</h1>
                <p className="text-uppercase my-para-section5 mt-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat, adipisci recusandae nihil aspernatur asperiores
                  consectetur. Consequuntur quae tempore omnis et temporibus
                  fuga, quaerat obcaecati cumque explicabo alias facilis dolorum
                  harum aliquid culpa possimus, autem nam pariatur suscipit a?
                  Unde rem, doloremque inventore ratione quae optio iste sunt
                  dicta adipisci illo aperiam quibusdam hic tempore totam odio
                  sequi voluptatem exercitationem voluptas voluptate quia
                  delectus incidunt maxime. Doloribus est facere
                </p>
              </div>
            </div>
          </div>
        </section>
      
  {/* Footer */}
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
              <a href="#!" className="text-reset">
                Address of the company
              </a>
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
  {/* Footer */}

      </>
 
  );
};

export default Home;
