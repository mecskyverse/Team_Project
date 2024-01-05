import React, { useEffect , useState } from 'react'
// import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Orderitem from "./Orderitem";
import orderimg from "../Component/images/order.jpeg"

const Myorder1 = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/order/user/6596c30cabab474ae8448833');
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
          console.log('Orders:', data);
        } else {
          console.error('Error fetching orders:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    };

    fetchOrders();
  }, [])
  return (
    <>
    <Navbar/>
    <div className="bg-image-main" >
    <img className="w-100" alt="" src={orderimg} />
    </div>
    {/* <button onClick={()=>getUserOrders()}>HelloHelloHelloHello</button> */}
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