// import { Edit } from '@mui/icons-material'
import { Button } from "@mui/material";
import React from "react";
// import EditPage from '../EditPage'
import { NavLink } from "react-router-dom";

const View = () => {
   let data;
   data = JSON.parse(localStorage.getItem("persons"));
   console.log(data);
   let filteredData = [];

   const setData = (data) => {
      let { name, email, password, phone } = data;
      localStorage.setItem("Name", name);
      localStorage.setItem("Email", email);
      localStorage.setItem("Password", password);
      localStorage.setItem("Phone", phone);
      console.log(data);
   };

   return (
      <>
         {data.map((datas) => (
            <tr>
               <td>{datas.name}</td>
               <td>{datas.email}</td>
               <td>{datas.phone}</td>
               <td>{datas.password}</td>
               <td><img src={datas.images} alt="images" height={70} width={70}/></td>
               <td>
                  <Button
                     onClick={() => {
                        let { name, email, password, phone, id } = datas;
                        localStorage.setItem("Id", id);
                        localStorage.setItem("Name", name);
                        localStorage.setItem("Email", email);
                        localStorage.setItem("Password", password);
                        localStorage.setItem("Phone", phone);
                        console.log(data);
                     }}
                     component={NavLink}
                     to={`/edit?id=${datas.id}`}
                     style={({ isActive }) => {
                        return {
                           backgroundColor: isActive ? "#000000" : "#000000",
                        };
                     }}
                     sx={{ color: "green", textTransform: "none" }}
                  >
                     Edit
                  </Button>
               </td>
               <td>
                  <Button
                     onClick={() => {
                        console.log(datas.id);
                        filteredData = data.filter((x) => x.id !== datas.id);
                        console.log(filteredData);
                        localStorage.clear();
                        localStorage.setItem(
                           "persons",
                           JSON.stringify(filteredData)
                        );
                        window.location.reload(true);
                     }}
                     component={NavLink}
                     to="/dashboard"
                     style={({ isActive }) => {
                        return { backgroundColor: isActive ? "#000000" : "" };
                     }}
                     sx={{ color: "red", textTransform: "none" }}
                  >
                     Delete
                  </Button>
               </td>
            </tr>
         ))}
      </>
   );
   //   return  persons.map(person => {
   //     <tr key={person.name}>
   //         <td>{person.name}</td>
   //         <td>{person.email}</td>
   //         <td>{person.phonenumber}</td>
   //         <td>{person.password}</td>
   //     </tr>
   //   }

   //   )
};

export default View;
