import React from "react";
import DatePick from "./Datepicker";
import TableRow from "./Tablerow";
import { useState } from "react";
import Tablerow from "./Tablerow";
import { useEffect } from "react";
export default function Table({data}) {
  const [startdate, setstartdate] = useState("01/01/1970");
  const [enddate, setenddate] = useState("01/01/1970");

  var d1 = startdate.split("/");
  var d2 = enddate.split("/");

  var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
  var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);

  return (
    <div className="table-content">
      <div className="table-head">
        <div>
          <h3 className="customer-head">All Customers</h3>
        </div>

        <DatePick setstartdate={setstartdate} setenddate={setenddate} />
      </div>

      <div className="table-container">
        <table className="table caption-top">
          <thead>
            <tr className="tr-sub">
              <th scope="col">S.No</th>
              <th scope="col">Order No</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th
                scope="col"
                style={{
                  width: "148px",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Service
              </th>
              <th scope="col">Weight</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              let parts = e[3].split("/");
              let date = new Date(parts[2], parseInt(parts[1]) - 1, parts[0]);
              if (
                startdate === "01/01/1970" ||
                enddate === "01/01/1970" ||
                (date >= from && date <= to)
              )
                return <TableRow data={e}/>;
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
