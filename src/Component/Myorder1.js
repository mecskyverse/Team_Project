import React from 'react'
// import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Orderitem from "./Orderitem";
import orderimg from "../Component/images/order.jpeg"

const Myorder1 = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-image-main" >
    <img className="w-100" alt="" src={orderimg} />
    </div>
    <div className='container'>
    <Orderitem/>
   <Orderitem/>
   <Orderitem/>
    </div>
   
    <Footer/>
       </>
  )
}

export default Myorder1