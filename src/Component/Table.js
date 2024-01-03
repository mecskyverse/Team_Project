import React from "react";
import DatePick from "./Datepicker";
import TableRow from "./Tablerow";
export default function Table() {
  return (
    <div className="table-content">
      <div className="table-head">
        <div>
          <h3 className="customer-head">All Customers</h3>
        </div>

        <DatePick />
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
              <th scope="col"  style={{width: "148px",justifyContent:"center",textAlign:"center"}}>Service</th>
              <th scope="col">Weight</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <TableRow data={[1, "408-254656-6512", "Rohan Kumar", "3/10/23", "01:23 PM", "Normal Washing (Wash & Fold)", "2.5 Kg","$485.00"]} />
            <TableRow data={[2, "408-254656-6512", "Sharma", "3/10/23", "01:23 PM", "Normal Washing (Wash & Fold)", "2.5 Kg","$485.00"]} />
            <TableRow data={[3, "408-254656-6512", "Krish", "3/10/23", "01:23 PM", "Normal Washing (Wash & Fold)", "2.5 Kg","$485.00"]} />
            <TableRow data={[4, "408-254656-6512", "Jone", "3/10/23", "01:23 PM", "Normal Washing (Wash & Fold)", "2.5 Kg","$485.00"]} />
            <TableRow data={[5, "408-254656-6512", "Rohan Kumar", "3/10/23", "01:23 PM", "Normal Washing (Wash & Fold)", "2.5 Kg","$485.00"]} />
            <TableRow data={[6, "408-254656-6512", "Billo", "3/10/23", "01:23 PM", "Normal Washing (Wash & Fold)", "2.5 Kg","$485.00"]} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
