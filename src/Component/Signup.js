import React, { useState } from "react";

import image10 from "../Component/images/login-img.jpeg";
import image11 from "../Component/images/eyeimg.png";
import axios from 'axios'

import "../signup.css";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your signup logic here using formData
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      console.log("Signup successful:", response.data);
      // You can handle success, redirect, or any other logic here
    } catch (error) {
      console.error("Signup failed:", error.message);
      // Handle error appropriately, e.g., show an error message to the user
    }

    // console.log("Signup submitted:", formData);
  };

  return (
    <div className="LoginForm1">
      <div className="loginimg1">
        <img src={image10} alt="" />
      </div>

      <div className="loginform1">
        <div className="toppara1">
          <p>LOGO & Name of the company</p>
        </div>

        <div className="medpara1">
          <p>Welcome!!</p>
        </div>
        <br></br>
        <div className="loginform231">
          <form onSubmit={handleSubmit}>
            <label style={{display:"unset"}}>
              <p>First Name</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </label>
            <label  style={{display:"unset"}}>
              <p>Last Name</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your name"
              />
            </label>
            <label style={{display:"unset"}}>
              <p>Phone number</p>
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone number"
              />
            </label>
            <label  style={{display:"unset"}}>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </label>

            <label  style={{display:"unset"}}>
              <p>Password</p>
              <div className="input-wrapper1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="eye-button1"
                  onClick={handleTogglePassword}
                >
                  <img src={image11} alt={showPassword ? "Show Password" : "Hide Password"} />
                </button>
              </div>
            </label>

            <label style={{display:"unset"}}>
              <p>Confirm Password</p>
              <div className="input-wrapper1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="eye-button1"
                  onClick={handleTogglePassword}
                >
                  <img src={image11} alt={showPassword ? "Show Password" : "Hide Password"} />
                </button>
              </div>
            </label>
            <div className="tog_rem_forget1">
              <label style={{display:"unset"}} className="toggle-switch1">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <span className="slider1"></span>
              </label>
              <h4>Remember me</h4>
            </div>
            <br />
            <div className="signin_button1">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;