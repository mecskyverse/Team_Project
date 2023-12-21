import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
<nav
          style={{ background: "#dce9d2" }}
          className="navbar my-nav-bar navbar-expand-lg"
        >
          <Link className="navbar-brand ml-5 my-links" href="/#">
            LOGO
          </Link>
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
                <Link className="nav-link font-weight-bold my-links" href="/#">
                  Services
                </Link>
              </li>
              <li className="nav-item ml-5">
                <Link className="nav-link font-weight-bold my-links" href="/#">
                  Contact
                </Link>
              </li>
              <li className="nav-item ml-5">
              <Link to="/signup" className="btn py-1 px-4 my-nav-btn1 mt-1">
                  Signup
                  </Link>
              </li>
              <li className="nav-item ml-5 mr-5">
              <Link to="/login" className="btn py-1 px-4 my-nav-btn2 mt-1">
                  Login
                  </Link>
                
              </li>
            </ul>
          </div>
        </nav>

    </div>
  )
}

export default Navbar