import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

const getDatafromLS = () => {
  let data = localStorage.getItem("persons");
  // let data = JSON.parse(localStorage.getItem("persons"))
  console.log(data);
  if (data) {
     return JSON.parse(data);
  } else {
     return [];
  }
};
const EditPage = () => {

  const [searchParams] = useSearchParams();
  let uid = searchParams.get('id')
  console.log(uid, "User id"); 

  const navigate = useNavigate();
   const[id,setId]=useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [persons, setpersons] = useState(getDatafromLS());

   

   useEffect(() => {
      setId(localStorage.getItem("Id"))
      setName(localStorage.getItem("Name"));
      setEmail(localStorage.getItem("Email"));
      setPhone(localStorage.getItem("Phone"));
      setPassword(localStorage.getItem("Password"));
   },[]);

   const handleAddNameSubmit = (e) => {
     e.preventDefault();
   //   let person = {
   //    id:id,
   //    name: name,
   //    email: email,
   //    phone: phone,
   //    password: password,
   // };
   let data = JSON.parse(localStorage.getItem("persons"));
   console.log(data);
   let tempArray = [];

   data.map(item => {
      
      if(item.id == id){
          let tempObj = {
              'id' : item.id,
              'name' : name,
              'email' : email,
              'phone' : phone,
              'password' : password
          }
          console.log(item.id === id)
         //  item.firstName =  name
         //  item.lastName = data.lastName
         //  item.email = data.email
         //  item.phone = data.phone

         
          console.log("Inside if -------------------------------------------------------------------------")
          console.log(tempObj, "Temo obj")
          tempArray.push(tempObj)
         //  localStorage.clear()
      }else{
          tempArray.push(item)
      }
  })
  console.log(tempArray,"TempArray")
  localStorage.setItem("persons", JSON.stringify(tempArray))

      navigate("/dashboard");

      setpersons([...persons, data]);
      setName("Name");
      setEmail("Email");
      setPhone("Phone");
      setPassword("Password");

   };
  //  console.log(name);
  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
 }, [persons]);
   return (
      <>
         <Box
            component="form"
            noValidate
            sx={{ mt: 5 ,width: 300, mx: 80}}
            id="registration-form"
            onSubmit={handleAddNameSubmit}
         >
            <TextField
               margin="normal"
               required
               fullWidth
               id="name"
               name="name"
               label="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               
            />
            {console.log(name)}
            <TextField
               margin="normal"
               required
               fullWidth
               id="email"
               name="email"
               label="Email Address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               
            />
            <TextField
               margin="normal"
               required
               fullWidth
               id="phonenumber"
               name="phonenumber"
               label="Phone Number"
               onChange={(e) => setPhone(e.target.value)}
               value={phone}
            />
            <TextField
               margin="normal"
               required
               fullWidth
               id="password"
               name="password"
               label="Password"
               type="password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
            />
            <Box textAlign="center">
               <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, mr: 1, px: 2 }}
                  // onClick={handleAddNameSubmit}
               >
                  UPDATE
               </Button>
            </Box>
         </Box>
      </>
   );
};

export default EditPage;
