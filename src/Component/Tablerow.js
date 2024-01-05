import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function Tablerow(props) {
  
  
  const [id, Order_No, Customer_Name, Date, Time, Service, Weight, Amount,status] =props.data;
  const [selectedValue, setSelectedValue] = useState(status);
  const handleChange = (event) => {
    event.preventDefault();
    const prevvalue = selectedValue;
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  useEffect(() => {
    setSelectedValue(status);
  }, [status])
  

  
  // const [selectedValue, setSelectedValue] = useState(status);
  return (
    <tr>
      <th className="srid" scope="row">{id}</th>
      <td className="td-red">{Order_No}</td>
      <td className="td-style-maxi">{Customer_Name}</td>
      <td className="td-style-maxi">{Date}</td>
      <td className="td-style-maxi">{Time}</td>
      <td className="td-style-service"  >{Service}</td>
      <td className="td-style-maxi">{Weight}</td>
      <td className="td-style-maxi">{Amount}</td>
      <td>
        <select
          onChange={handleChange}
          className={selectedValue}
          value={selectedValue}
        >
          <option value="order-placed" className="order-placed">
            Order Placed
          </option>
          <option value="picked" className="picked">
            Picked
          </option>
          <option value="processing" className="processing">
            Processing
          </option>
          <option value="out-for-delivery" className="out-for-delivery">
            Out for Delivery
          </option>
          <option value="delivered" className="delivered">
            Delivered
          </option>
        </select>
      </td>
    </tr>
  );
}
