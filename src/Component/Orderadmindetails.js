import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../Orderadmindetail.css";
import Starating from "./Starrating";
import ColorSelector from "./ColorSelector";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  FaBook,
  FaCube,
  FaArrowCircleUp,
  FaTruck,
  FaHandshake,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import AdminNavbar from "./AdminNavbar";
import AdminNavbar2 from "./AdminNavbar2";
import userdata from "./Data";

function getIconForStatus(status) {
  switch (status) {
    case "Order Placed":
      return <FaBook />;
    case "Pickup":
      return <FaCube />;
    case "Processing":
      return <FaArrowCircleUp />;
    case "Out for Delivery":
      return <FaTruck />;
    case "Delivered":
      return <FaHandshake />;
    default:
      return null;
  }
}
{
  /* <FontAwesomeIcon icon="fa-solid fa-book" /> */
}
const Orderadmindetails = () => {
  const [orders, setOrders] = useState([]);
  const [weight, setWeight] = useState(0);
  const [items, setItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  //
  const [selectedStatus, setSelectedStatus] = useState(""); // Default status
  const [timelineData, setTimelineData] = useState([]);
  const [completedIndex, setCompletedIndex] = useState(-1);

  // const params=urlString.split
  // const urlquery=new URLSearchParams(params);
  const [queryParameters] = useSearchParams();
  const orderid = queryParameters.get("id");
  // console.log(queryParameters.get("id"));

  const [order, setorder] = useState({}); //userdata[orderid-1]
  console.log(orderid);
  console.log(order);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "https://laughnlaundry.in/api/order/" + orderid
      );

      const data = await response.json();
      console.log(data);
      setorder(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  // calculate amount
  useEffect(() => {
    // Recalculate total amount whenever weight or items change
    const result = weight * items;
    setTotalAmount(result);
    console.log(weight);
  
  }, [weight, items]);

  // const email=localStorage.getItem("email");

  // timeline
  useEffect(() => {
    // Initialize timeline data
    const initialTimelineData = [
      { status: "Order Placed", icon: <FaBook /> },
      { status: "Pickup", icon: <FaCube /> },
      { status: "Processing", icon: <FaArrowCircleUp /> },
      { status: "Out for Delivery", icon: <FaTruck /> },
      { status: "Delivered", icon: <FaHandshake /> },
    ];
    setTimelineData(initialTimelineData);
  }, []);

  const handleStatusChange = (newStatus) => {
    // Update the selectedStatus when the dropdown value changes
    setSelectedStatus(newStatus);

    // Find the index of the selected status in the timeline
    const selectedIndex = timelineData.findIndex(
      (item) => item.status === newStatus
    );

    // Update the completed index
    setCompletedIndex(selectedIndex);

  
  };

  const formData = {
    totalWeight: weight,
    totalItems: items,
    totalAmount: totalAmount,
    status: selectedStatus,
  };

  const handleAmountSave =async () =>{
    console.log(formData)
    UpdateOrders()
  }

  const UpdateOrders = async () => {
    try {
      const response = await fetch(
        "https://laughnlaundry.in/api/order/" + orderid,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  // const handleStatusChange = (newStatus) => {
  //   // Update the selectedStatus when the dropdown value changes
  //   setSelectedStatus(newStatus);
  // };

  return (
    <>
      <AdminNavbar2 />
      <AdminNavbar order={true} response={false} />
      <div className="container mt-5">
        <div className="row  mb-5">
          <h1 className="my-head ml-lg-0 ml-5">Order Details</h1>
          {/* price */}
          {order && (
            <div className="col-xl-12 m-4  mt-4 col-lg-12 my-first-container">
              <div className="row ">
                <div className="col-lg-8 align-items-start col-md-4 col-sm-12">
                  <ul className="mt-3 align-items-start text-start list-unstyled">
                    <li className="text-uppercase text-start py-1">
                      {order.id}
                    </li>
                    <li className="text-uppercase text-start py-1">
                      {order.services}: Order Placed in {order.date} at{" "}
                      {order.timing}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-8 col-sm-12 d-flex align-items-center justify-content-end">
                  <p className="my-price mt-2 mr-5 font-weight-bold">
                    ₹{totalAmount}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* timeline optional */}
        {/* <div className="row py-5 mt-5">
    <div className="col">
      <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
           
          >
            <div className="inner-circle" />
            <p className="h6 my-icons active mt-3 mb-1"><FaBook /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Order Placed</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
      
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaCube /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Pickup</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaArrowCircleUp /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Processing</p>
          </div>
        </div>
        <div className="timeline-step">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
          
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaTruck /></p>
            <p className="h6 mt-2  mb-0 mb-lg-0">Out for Delivery</p>
          </div>
        </div>
        <div className="timeline-step mb-0">
          <div
            className="timeline-content"
            data-toggle="popover"
            data-trigger="hover"
            data-placement="top"
            title=""
            
          >
            <div className="inner-circle" />
            <p className="h6 my-icons mt-3 mb-1"><FaHandshake /></p>
            <p className="h6 mt-2 mb-0 mb-lg-0">Delivered</p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
      </div>
      {/* timeline */}
      <div className="steps mb-5 px-5 d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
        {timelineData.map((item, index) => (
          <div
            className={`step ${index <= completedIndex ? "completed" : ""}`}
            key={index}
          >
            <div className="step-icon-wrap">
              <div className="step-icon text-white">
                <FaCheck />
              </div>
            </div>
            <div>
              <p className="h6 my-icons mt-3 mb-1">{item.icon}</p>
              <p
                className={`h6 mt-2 mb-0 mb-lg-0 ${
                  index === completedIndex
                    ? "text-dark font-weight-bold"
                    : "text-muted"
                }`}
              >
                {item.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* customer details and pickup details */}
      <div className="container">
        <div className="row py-lg-0 justify-content-between  px-5  py-3">
          {/* Customer Details Partition */}
          <div className="col-lg-6 container-customer-deatils  col-md-6 col-sm-12 col-12">
            <div className="px-lg-2 mt-3">
              <h5 className=" mb-3">Customer Details</h5>
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-unstyled">
                    <li className="font-weight-bold py-2">
                      Name:{" "}
                      <span className="ml-2 text-muted font-weight-light">
                        {" "}
                        {order.name}{" "}
                      </span>
                    </li>
                    <li className="font-weight-bold py-2">
                      Phone:{" "}
                      <span className="ml-2 text-muted font-weight-light">
                        {" "}
                        {order.phone}
                      </span>
                    </li>
                    <li className="font-weight-bold py-2">
                      Email:{" "}
                      <span className="ml-2 text-muted font-weight-light">
                        {" "}
                        {order.email}
                      </span>
                    </li>
                    <li className="font-weight-bold py-2">
                      Service:{" "}
                      <span className="ml-2 text-muted font-weight-light">
                        {" "}
                        {order.services}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Pickup Details Partition */}
          <div className="col-lg-5 mt-lg-0 mt-3 container-pick-deatils col-md-6 col-sm-12 col-12">
            <div className="px-lg-2 mt-3">
              <h5 className=" mb-3">PickUp Details</h5>
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-unstyled">
                    <li className="text-uppercase font-weight-bold pick-text py-2">
                      Pickup Date:{" "}
                      <span className="ml-2 text-dark font-weight-light">
                        {order.date}
                      </span>
                    </li>
                    <li className="text-uppercase font-weight-bold pick-text py-2">
                      Pickup Time:{" "}
                      <span className="ml-2 text-muted font-weight-light">
                        {order.timing}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-lg-5">
        <div className="row py-lg-0 justify-content-between  px-5  py-3">
          {/* order weight and price */}
          <div className="col-lg-6 container-customer-deatils  col-md-6 col-sm-12 col-12">
            <div className="px-lg-2 mt-3">
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-unstyled">
                    <li className="  px-0 py-2">
                      Total Weight: &nbsp;
                      <span className="ml-lg-5 mr-2">
                        <input
                          className="input-ad-wt w-50  px-lg-2 py-1"
                          id="myweight"
                          type="number"
                          name="weight"
                          placeholder="Enter Weight"
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </span>
                      KG
                    </li>
                    <li className=" py-2">
                      Total Items: &nbsp;{" "}
                      <span className="ml-lg-5 px-lg-2 mr-lg-3">
                        <label style={{ display: "unset" }}>
                          <input
                            className="input-ad-wt w-50 px-lg-2 py-1"
                            id="myitems"
                            type="number"
                            name="items"
                            placeholder="Number of Items"
                            onChange={(e) => setItems(e.target.value)}
                          />
                        </label>
                      </span>
                    </li>
                    <li className=" py-2">
                      Total Amount: &nbsp;₹
                      <span className="ml-lg-4 px-lg-3" id="result">
                        <input
                          className="input-ad-wt w-50 px-lg-2 py-1 text-success font-weight-bold"
                          type="number"
                          name="totalAmount"
                          id="totalAmount"
                          value={totalAmount} // Display the initial value
                          onChange={(e) => setTotalAmount(e.target.value)} // Update state on change
                        />
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="ml-5 col-5 mb-2 text-center">
                  <button
                    type="submit"
                    onClick={() => handleAmountSave()}
                    style={{
                      backgroundColor: "#FFF",
                      color: "#FA8232",
                      border: "1px solid #FA8232",
                      borderRadius: "43px",
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Change status */}
          <div className="col-lg-5 mt-lg-0 mt-3 py-3 container-pick-deatils col-md-6 col-sm-12 col-12">
            <div className="px-lg-2 mt-3">
              <h5 className=" mb-3">Change Status</h5>
              <div className="row ml-2">
                <div>
                  {/* Integrate ColorSelector component here */}
                  <select
                    id="colorSelector"
                    onChange={(e) => handleStatusChange(e.target.value)}
                    value={selectedStatus}
                    style={{
                      backgroundColor: "#FFF",
                      color: "#FA8232",
                      border: "1px solid #FA8232",
                      borderRadius: "43px",
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}
                  >
                    {[
                      "Order Placed",
                      "Pickup",
                      "Processing",
                      "Out for Delivery",
                      "Delivered",
                    ].map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="ml-4">
                  <button
                    type="submit"
                    onClick={() => handleAmountSave()}
                    style={{
                      backgroundColor: "#FFF",
                      color: "#FA8232",
                      border: "1px solid #FA8232",
                      borderRadius: "43px",
                      padding: "8px 16px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="row py-lg-0 justify-content-start   px-5  py-3">
          {/* shipping details */}
          <div className="col-lg-5  col-md-6 col-sm-12 ">
            <div className="px-lg-2 mt-3">
              <h5 className=" mb-3">Shipping Address</h5>
              <div className="row">
                <p className="font-weight-bold ml-3">{order.name}</p>
                <p className="text-muted ml-3">{order.address}</p>
                <div className="col-md-12">
                  <ul className="list-unstyled">
                    <li className=" font-weight-bold  py-2">
                      Phone number:{" "}
                      <span className="ml-2 text-muted font-weight-light">
                        {order.phone}
                      </span>
                    </li>
                    <li className=" font-weight-bold  py-2">
                      Email:{" "}
                      <span className="ml-2 text-muted font-weight-light">
                        {order.email}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* instructions*/}
          <div className="col-lg-4  col-md-6 col-sm-12 col-12">
            <div className="px-lg-2 mt-3">
              <h5 className=" mb-3">Order Instruction</h5>
              <p className="text-muted">
                Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare,
                eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam
                magna odio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5 ">
        <div className="row py-lg-0 justify-content-start   px-5  py-3">
          {/* shipping details */}
          <div className="col-lg-5  col-md-6 col-sm-12 ">
            <div className="px-lg-2 mt-3">
              <h5 className=" mb-3">Rating</h5>
              <div className="row">
                <div className="container">
                  <Starating />
                </div>
              </div>
            </div>
          </div>
          {/* instructions*/}
          <div className="col-lg-4  col-md-6 col-sm-12 col-12">
            <div className="px-lg-2 mt-3">
              <h5 className=" mb-3">Feedback</h5>
              <p className="text-muted">
                Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare,
                eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam
                magna odio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='col-lg-6'>

    </div>
    <div className='col-lg-6'>

    </div> */}

      <Footer />
    </>
  );
  // Helper function to get the corresponding icon for each status
  function getIconForStatus(status) {
    switch (status) {
      case "Order Placed":
        return <FaBook />;
      case "Pickup":
        return <FaCube />;
      case "Processing":
        return <FaArrowCircleUp />;
      case "Out for Delivery":
        return <FaTruck />;
      case "Delivered":
        return <FaHandshake />;
      default:
        return null;
    }
  }
};
// Export timelineData
export const timelineData = [
  { status: "Order Placed", icon: getIconForStatus("Order Placed") },
  { status: "Pickup", icon: getIconForStatus("Pickup") },
  { status: "Processing", icon: getIconForStatus("Processing") },
  { status: "Out for Delivery", icon: getIconForStatus("Out for Delivery") },
  { status: "Delivered", icon: getIconForStatus("Delivered") },
];

export default Orderadmindetails;
