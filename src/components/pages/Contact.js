import { Grid } from '@mui/material'
import React from 'react'
import contactpic from '../../images/contactpic.svg'
import View from './auth/View'
const Contact = () => {
  return (
    <Grid container sx={{height:'75vh'}}>
      <Grid item lg={7} sm={5} sx={{
          backgroundImage:`url(${contactpic})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'right'
      }}>
      </Grid>
      <h1>Contact</h1>
      
    </Grid>
  )
}

export default Contact