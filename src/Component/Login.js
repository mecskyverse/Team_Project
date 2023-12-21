import React, { useState } from "react";
import "../signin.css";
import loginimg from "../Component/images/Signup.jpeg";
import image11 from "../Component/images/eyeimg.png";
import image12 from "../Component/images/Googleimg.png";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [rememberMe, setRememberMe] = useState(false);

  const handleToggleRememberMe = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using formData
    console.log("Login submitted:", formData);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="LoginForm">
      <div className="loginimg">
        <img src={loginimg} alt=""></img>
      </div>

      <div className="loginform">
        <div className="toppara">
          <p>LOGO & Name of the company</p>
        </div>

        <div className="medpara">
          <p>Nice to see you again</p>
        </div>
        <br></br>
        <div className="loginform23">
          <form onSubmit={handleSubmit}>
            <label style={{display:"unset"}}>
              <p>Login</p>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Email or phone number"
              />
            </label>

            <label style={{display:"unset"}}>
              <p>Password</p>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <img src={image11} alt="Show Password" />
                  ) : (
                    <img src={image11} alt="Hide Password" />
                  )}
                </button>
              </div>
            </label>
          </form>
          <div className="tog_rem_forget">
            <label style={{display:"unset"}} className="toggle-switch">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
            <h4>Remember me</h4>
            <button type="button"> Forgot password?</button>
          </div>
          <br />
          <div className="signin_button">
            <button type="button">Sign in</button>
          </div>
          <br />
          <hr />
          <br />
          <div className="signin_button_with_google">
            <button type="button" className="flexing_google">
              <img   src={image12} alt="" /> <p style={{marginBottom: "1px"}}>  Or sign in with Google</p>
            </button>
          </div>

          <div className="last_para">
            <p style={{marginBottom: "0px"}}>Dont have an account?</p>
            <button type="button">Sign up now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
