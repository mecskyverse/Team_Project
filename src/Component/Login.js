import React from 'react'
import "../signin.css";
import loginimg from "../Component/images/login-img.jpeg";
const Login = () => {
  return (
   <>
   <section className="container-fluid p-0" >
        <div >
          <div className="row    ">
            <div className="col-md-8 vh-100 col-lg-7 col-xl-6">
              <img className="p-0  my-signup-img" alt="" src={loginimg} style={{ width: "100%", height: "100%" }}/>
            </div>
            <div className="col-md-7 px-md-5 mt-3  p-md-0 mx-5 col-lg-5 col-xl-5 offset-xl-1">
              <h5 className="text-center mt-2 font-weight-bold mb-3">
                LOGO
              </h5>
              <h3 className="font-weight-bold px-md-5 mt-1 mb-3"> Welcome!</h3>
              <form className="px-md-5">
                {/* First Name input */}
                <div className="form-outline mb-3">
                <label className="form-label " htmlFor="form1">
                    First Name
                  </label>
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="text"
                    id="firstname"
                    className="form-control form-control-lg"
                    placeholder="Enter your Name"
                  />

                </div>
                {/* Last Name input */}
                <div className="form-outline mb-3">
                <label className="form-label " htmlFor="form1">
                    Last Name
                  </label>
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="text"
                    id="lastname"
                    className="form-control form-control-lg"
                    placeholder="Enter your Name"
                  />

                </div>
                {/* Phone number input */}
                <div className="form-outline mb-3">
                <label className="form-label " htmlFor="form1">
                    Phone number
                  </label>
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="tel"
                    id="phonenumber"
                    className="form-control form-control-lg"
                    placeholder="Phone number"
                  />

                </div>
                {/* Email input */}
                <div className="form-outline mb-3">
                <label className="form-label " htmlFor="form1">
                    Email address
                  </label>
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                  />

                </div>
                
                {/* Password input */}
                <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form1">
                    Password
                  </label>
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                  />

                </div>
                 {/* Confirm Password input */}
                 <div className="form-outline mb-3">
                 <label className="form-label " htmlFor="form1">
                  Confirm  Password
                  </label>
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                  />

                </div>
                <div className="d-flex justify-content-between mx-auto  mb-4">
                  {/* Checkbox */}
                 
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch1"
                        defaultChecked=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customSwitch1"
                      >
                        Remember me
                      </label>
                    </div>
                 

                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn font-weight-bolder btn-primary btn-lg btn-block"
                >
                  Sign Up
                </button>
     
              </form>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Login