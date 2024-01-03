import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Feedback1 from './Feedback1';
import AdminNavbar from './AdminNavbar';
const Responses = () => {
  return (
   <>
   <Navbar/>
   <AdminNavbar/>
   <section >

  <div className="container my-3 py-5">
    <h2>Responses</h2>
    <div className="row d-flex mt-4 justify-content-center">
        
      <div className="col-md-12 col-lg-10 col-xl-8">
      <h3>Commends</h3>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
      </div>
    </div>
  </div>
</section>

   <Footer/>
   </>
  )
}

export default Responses