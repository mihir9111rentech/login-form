import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import React, { useState } from "react";
import loginpic from "../../../images/loginpic.svg";
import Registration from "./Registration";
import UserLogin from "./UserLogin";
 const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
       <div role="tabpanel" hidden={value !== index}>
          {value === index && <Box>{children}</Box>}
       </div>
    );
 };
const LoginReg = () => {
   const [value, setValue] = useState(0);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <>
         <Grid container sx={{ height: "90vh" }}>
            <Grid
               item
               lg={7}
               sm={5}
               sx={{
                  backgroundImage: `url(${loginpic})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: { xs: "none", sm: "block" },
               }}
            ></Grid>
            <Grid item lg={5} sm={7} xs={12}>
               <Card sx={{ width: "100%", height: "100%" }}>
                  <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
                     <Tabs
                        value={value}
                        textColor="secondary"
                        indicatorColor="secondary"
                        onChange={handleChange}
                     >
                        <Tab
                           label="Login"
                           sx={{ textTransform: "none", fontWeight: "bold" }}
                        />
                        <Tab
                           label="Registration"
                           sx={{ textTransform: "none", fontWeight: "bold" }}
                        />
                     </Tabs>
                  </Box>
                   <TabPanel value={value} index={0}>
                      <UserLogin /> 
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                     <Registration/>
                  </TabPanel> 
               </Card>
            </Grid>
         </Grid>
      </>
   )
};

export default LoginReg;
