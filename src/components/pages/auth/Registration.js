import React, { useEffect, useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { Dashboard } from "@mui/icons-material";
// import View from "./View";
// import UserLogin from "./UserLogin";

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
const Registration = () => {
   const [url, setUrl] = useState();
   const handleChangeImage = (e) => {
      const reader = new FileReader();
      console.log(e.target.file);
      reader.addEventListener("load", () => {
         localStorage.setItem("images", reader.result);
         setUrl(localStorage.getItem("images"));
         console.log(localStorage.getItem("images"));
      });
      reader.readAsDataURL(e.target.files[0]);
      console.log(e.target.files);
      // console.log(e.target.files);
      // setFile(URL.createObjectURL(e.target.file[0]))
      // localStorage.setItem('image',file)
   };

   const [persons, setpersons] = useState(getDatafromLS());

   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   //const [value, setValue] = useState(0);

   const [error, setError] = useState({
      status: false,
      msg: "",
      type: "",
   });

   const cancelHandle = () => {
      document.getElementById("registration-form").reset();
   };
   let data = JSON.parse(localStorage.getItem("persons"));
   console.log(data);
   let person = {
      email: localStorage.getItem("email"),
   };

   const handleAddNameSubmit = (e) => {
      e.preventDefault();
      let idForData = Math.floor(Math.random() * 1000);
      let person = {
         id: idForData,
         name: name,
         email: email,
         phone: phone,
         password: password,
         images: url,
      };

      var filteredData = data.filter((x) => x.email === email);
      if (filteredData.length > 0) {
         setError({
            status: true,
            msg: "Email Id already exists.",
            type: "error",
         });
      } else {
         setError({
            status: true,
            msg: "Registration Successfully",
            type: "success",
         });

         setpersons([...persons, person]);
         setName("");
         setEmail("");
         setPhone("");
         setPassword("");
      }

      // data.map((data) => {
      //    if (person.name && person.email && person.phone && person.password ) {
      //       if(person.email === data.email){
      //          setError({
      //             status:true,
      //             msg:"Email Id already exists.",
      //             type:"error"
      //          })
      //       }
      //       else{
      //          setError({
      //             status: true,
      //             msg: "Registration Successfully",
      //             type: "success",
      //          });
      //          navigate("/login");
      //       }
      //    } else {
      //       setError({
      //          status: true,
      //          msg: "All Fields are Required",
      //          type: "error",
      //       });
      //    }
      // })
   };

   useEffect(() => {
      localStorage.setItem("persons", JSON.stringify(persons));
   }, [persons]);

   return (
      <div>
         <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="registration-form"
            //onSubmit={handleAddNameSubmit}
         >
            <TextField
               margin="normal"
               required
               fullWidth
               id="name"
               name="name"
               label="Name"
               onChange={(e) => setName(e.target.value)}
               value={name}
            />
            <TextField
               margin="normal"
               required
               fullWidth
               id="email"
               name="email"
               label="Email Address"
               onChange={(e) => setEmail(e.target.value)}
               value={email}
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

            <input type="file" name="inputimage" onChange={handleChangeImage} />

            <img src={url} alt="uploadimage" width={150} height={150}/>

            <Box textAlign="center">
               <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, mr: 1, px: 2 }}
                  onClick={handleAddNameSubmit}
               >
                  SUBMIT
               </Button>

               <Button
                  type="cancel"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 1, px: 2 }}
                  onClick={cancelHandle}
               >
                  CANCEL
               </Button>
            </Box>
            {error.status ? (
               <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
               ""
            )}
         </Box>
         {/* <div className="view-container">
            <div className="table-responsive">
               <table className="table">
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                     </tr>
                  </thead>
                  <tbody>
                     <View />
                  </tbody>
               </table>
            </div>
         </div> */}
      </div>
   );
};

export default Registration;
