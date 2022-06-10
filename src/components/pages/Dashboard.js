import { CssBaseline, Grid, Table } from "@mui/material";
import React from "react";
import View from "./auth/View";

const Dashboard = () => {
   return (
      <>
       <div className="view-container">
            <div className="table-responsive">
               <table className="table">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     <View />
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
};

export default Dashboard;
