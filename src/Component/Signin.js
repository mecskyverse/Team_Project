import React from "react";
import "../signin.css";
import signupimg from "../Component/images/Signup.jpeg";
const Signin = () => {
  return (
    <>
   

      <section className="container-fluid p-0" >
        <div >
          <div className="row    ">
            <div className="col-md-8 vh-100 col-lg-7 col-xl-6">
              <img className="p-0  my-signup-img" alt="" src={signupimg} style={{ width: "100%", height: "100%" }}/>
            </div>
            <div className="col-md-7 px-md-5 mt-5  p-md-0 mx-5 col-lg-5 col-xl-5 offset-xl-1">
              <h5 className="text-center mt-3 font-weight-bold mb-5">
                LOGO
              </h5>
              <h3 className="font-weight-bold px-md-5 mt-5 mb-4">  Nice To see you again</h3>
              <form className="px-md-5">
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email or Phone number"
                  />
                  <label className="form-label mt-2" htmlFor="form1">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input style={{ backgroundColor: "#E5E5E5" }}
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label mt-2" htmlFor="form1">
                    Password
                  </label>
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
                 

                  <a href="#!">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn font-weight-bolder btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>
                <div className="d-flex justify-content-center my-4">
  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
</div>

                <a
                  className="btn btn-dark font-weight-bolder btn-lg btn-block"
                  style={{ backgroundColor: "black" }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f me-2" />
                  or Sign In with Google
                </a>
                <div className="d-flex justify-content-center my-4">
  <p className="text-center fw-bold mx-3 mb-0 ">Don't have an account? <a className="text-primary">Signup</a> </p>
</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
