import React from "react";
import Navbar from "../Component/Navbar";
import "../admindashboard.css";
import {Link} from "react-router-dom"

import { document } from "postcss";

import { useState } from "react";

import Table from "./Table";
import AdminNavbar from "./AdminNavbar";
const AdminDashboard = () => {
  
  return (
    <>
      <Navbar />
      <AdminNavbar/>

      <p className="dash-heading">Dashboard</p>

      <div className="navbar search-nav navbar-light">
        <div className="container-search">
          <div className="d-flex">
            <input
              className="form-control-searchbar  me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="btnn-container">
              <button className="search-btn" style={{ padding: "0px 0px" }}>
                Search
              </button>
            </div>

            {/* <i class="bi bi-search"></i> */}
            <div className="sr">
              <svg
                className="btn-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#C4C4C4"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="orderbtn">ORDERS</button>
        <button className="responsebtn">RESPONSES</button>
      </div>

      <div className="cards" style={{ display: "flex" }}>
        <div className="card">
          <div className="card-body">
            <p className="card-title prices">220</p>
            <p className="card-subtitle mb-2 today-order">Today's Orders</p>
          </div>
          <div className="card-msg">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="64"
                height="64"
                rx="32"
                fill="#F2994A"
                fill-opacity="0.2"
              />
              <path
                d="M44 17H20C18.35 17 17 18.35 17 20V47L23 41H44C45.65 41 47 39.65 47 38V20C47 18.35 45.65 17 44 17ZM44 38H21.8L20 39.8V20H44V38Z"
                fill="#F39C12"
              />
            </svg>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-title prices">100</p>
            <p className="card-subtitle mb-2 today-order">Today's Pickup</p>
          </div>
          <div className="card-msg">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="64"
                height="64"
                rx="32"
                fill="#F2994A"
                fill-opacity="0.2"
              />
              <path
                d="M44 17H20C18.35 17 17 18.35 17 20V47L23 41H44C45.65 41 47 39.65 47 38V20C47 18.35 45.65 17 44 17ZM44 38H21.8L20 39.8V20H44V38Z"
                fill="#F39C12"
              />
            </svg>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-title prices">120</p>
            <p className="card-subtitle mb-2 today-order">Today's Drop Off</p>
          </div>
          <div className="card-msg">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="64"
                height="64"
                rx="32"
                fill="#F2994A"
                fill-opacity="0.2"
              />
              <path
                d="M44 17H20C18.35 17 17 18.35 17 20V47L23 41H44C45.65 41 47 39.65 47 38V20C47 18.35 45.65 17 44 17ZM44 38H21.8L20 39.8V20H44V38Z"
                fill="#F39C12"
              />
            </svg>
          </div>
        </div>






      </div>

      <Table/>

      <div className="page">
        <div class="pagination">
        <Link to="#/">&laquo;</Link>
        <Link to="#/">1</Link>
        <Link to="#/">2</Link>
        <Link to="#/">3</Link>
        <Link to="#/">&raquo;</Link>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
