import React from 'react'
import "../orderitem.css";
import { Link } from 'react-router-dom';

const Orderitem = () => {
  return (
    <>
<div className='container border main-cont-order  my-5'>
  
  <div className='row py-lg-0 py-3 my-order-header'>
      <div className='col-lg-3 ml-lg-5 ml-0 col-md-4 col-6'>
        <ul className='px-lg-2 mt-3 px-0 list-unstyled'>
          <li className='text-uppercase py-1'>order placed</li>
          <li className='text-uppercase py-1'>30 October 2023</li>
        </ul>
      </div>
      <div className='col-lg-3 col-md-4 col-6'>
        <ul className='px-lg-2 mt-3 px-0 list-unstyled'>
          <li className='text-uppercase py-1'>total</li>
          <li className=' py-1'>$485.00</li>
        </ul>
      </div>
      <div className='col-9  col-lg-3 d-flex justify-content-end mt-3'>
        <Link to='/pickup'>
          <button className="btn  border btn-overlay">View order details</button>
        </Link>
      </div>
    </div>
    <div className='row  py-lg-0 py-3'>
      <div className='col-lg-3 ml-lg-5 ml-0 col-md-4 col-6'>
      <ul className='px-lg-2 mt-3 px-0 list-unstyled'>
            <li className='text-uppercase py-2'>
            order #
            </li>
            <li className='text-uppercase py-2'>
            category
            </li>
            <li className='text-uppercase py-2'>
            Service
            </li>
            <li className='text-uppercase py-2'>
            no. Item
            </li>
        </ul>
      </div>
      <div className='col-lg-3 col-md-4 col-6'>
      <ul className='px-lg-2 mt-3 text-danger px-0 list-unstyled'>
            <li className='text-uppercase py-2'>
            408-254656-6512
            </li>
            <li className=' py-2'>
            Normal Washing
            </li>
            <li className=' py-2'>
            Wash & Fold
            </li>
            <li className='text-uppercase py-2'>
            17
            </li>
        </ul>
      </div>
      <div className='col-9  col-lg-3 d-flex justify-content-end mt-3'>
      <Link to='/pickup'>
        <button className="btn border  mt-lg-5 button-pick  px-5 py-2 text-primary font-weight-bold ">Picked</button>
      </Link>
      </div>
    </div>
 
</div>


  

    </>
  )
}

export default Orderitem