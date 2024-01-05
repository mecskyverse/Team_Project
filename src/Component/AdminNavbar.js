import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import house from "../Component/images/House.png";
export default function AdminNavbar() {
    
    useEffect(() => {
        const currentURL = window.location.href;
        const currentpath = currentURL.split('/').reverse()[0];
        const x = document.getElementById(currentpath);
        if (x!==undefined)
            document.getElementById(currentpath).style.color = "blue";
    }, [])
    
  return (
    // <div>
        <nav className="navbar navbar-expand-lg admindash-navbar">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="nav-img-dashboard">
            <Link className="nav-img" to="/">
              <img src={house} />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link   nav-dash-bar" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link id='home' className="nav-link nav-dash-bar" to="/">
                  User Account
                </Link>
              </li>
              <li className="nav-item ">
                <Link id='admin' className="nav-link  nav-dash-bar" to="/admin">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item ">
                <Link id='adminorder' className="nav-link  nav-dash-bar" to="/adminorder" >
                  OrderDetails
                </Link>
              </li>

              <li className="nav-item ">
                <Link id='responses' className="nav-link  nav-dash-bar" to="/responses">
                  Response
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    //   </div>
  )
}
