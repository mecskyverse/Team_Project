
import './App.css';
import React, {useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './Component/Home';
import Services from './Component/Services';
import AdminDashboard from './Component/AdminDashboard';
import Contact from './Component/Contact';
import Myorder1 from './Component/Myorder1';
import SchedulePickup from './Component/SchedulePickup';
import Adminorder from './Component/Orderadmindetails';
import Userorder from './Component/Orderuserdetails';
import Responses from './Component/Responses';
import Offerpopup from './Component/Offerpopup';


function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the server
        const response = await fetch('https://laughnlaundry.onrender.com/'); // Adjust the URL and port accordingly

        // Check if the response status is OK (200)
        if (response.ok) {
          // Parse the response JSON or text
          const data = await response.json(); // If the response is JSON
          console.log(data)
        } else {
          console.error('Failed to fetch server data');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <Router>
      <div>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/pickup" element={<SchedulePickup/>}/>
          <Route exact path="/myorder1" element={<Myorder1/>}/>
          <Route exact path="/userorder" element={<Userorder/>}/>
          <Route exact path="/adminorder" element={<Adminorder/>}/>
         <Route exact path="/responses" element={<Responses/>}/>
         <Route exact path="/admin" element={<AdminDashboard/>}/>
         <Route exact path="/offerpopup" element={<Offerpopup/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
