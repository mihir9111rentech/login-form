import React, { useState } from "react";
import { TextField, Button, Box, Alert } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const UserLogin = () => {
   const [error, setError] = useState({
      status: false,
      msg: "",
      type: "",
   });
   const validate = (values) => {
      const error = {};
   };
   const navigate = useNavigate();

   // let data = JSON.parse(localStorage.getItem("persons"));
   // let person = {
   //    email: localStorage.getItem("email"),
   //    password: localStorage.getItem("password"),
   // };

   const formik = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validate,
      onSubmit: (values) => {
         let data = JSON.parse(localStorage.getItem("persons"));
         console.log(data);
         let person = {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password"),
         };

         console.log(values.email.toString())
         data.map((data) => {
            if (
               values.email === data.email &&
               values.password === data.password
            ) {
               console.log(values.email);
               document.getElementById("login-form").reset();
               setError({
                  status: true,
                  msg: "Login Successfully",
                  type: "success",
               });
               navigate("/dashboard");
            } else {
               setError({
                  status: true,
                  msg: "All Fields are Required",
                  type: "error",
               });
            }
         });
      },
   });

   return (
      <>
         <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="login-form"
            onSubmit={formik.handleSubmit}
         >
            <TextField
               margin="normal"
               required
               fullWidth
               id="email"
               name="email"
               label="Email Address"
               value={formik.values.email}
               onChange={formik.handleChange}
            />
            <TextField
               margin="normal"
               required
               fullWidth
               id="password"
               name="password"
               label="Password"
               type="password"
               value={formik.values.password}
               onChange={formik.handleChange}
            />
            <Box textAlign="center">
               <Button
                  className="btn btn-secondary"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, px: 5 }}
               >
                  Login
               </Button>
            </Box>
            {/* <NavLink to="/">Forgot Password</NavLink>
            {error.status ? <Alert severity={error.type} >{error.msg}</Alert> : ''} */}
         </Box>
      </>
   );
};

export default UserLogin;
