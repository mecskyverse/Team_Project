import React from 'react'
import {Link} from "react-router-dom"
import "../Project.css";
import { FaBars } from 'react-icons/fa';
import logo from "../Component/images/nav-logo.png";

const AdminNavbar2 = () => {
  return (
    // <div>
<nav
          style={{ background: "#dce9d2" }}
          className="navbar my-nav-bar navbar-expand-lg"
        >
          <Link className="navbar-brand ml-3 w-50 my-links" to="/">
              <img
                className="  my-logo-nav"
                alt=""
                src={logo}
              />
              </Link>
          {/* <Link className="navbar-brand ml-lg-5 ml-4 my-links" to="/">
            LOGO
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><FaBars /></span>
            {/* <span className="navbar-toggler-icon" /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
          </div>
        </nav>

    // </div>
  )
}

export default AdminNavbar2