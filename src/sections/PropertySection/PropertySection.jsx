import React from 'react'
import PropertyCard from '../../components/Card/Card'
import { Grid } from '@mui/material'
const PropertySection = () => {
 return(<Grid container spacing={3}>
    {[1,2,3,4,5,6,7,8,9,10,11,12].map(()=>(
  <Grid item xs={6} lg={4} md={6}>
  <PropertyCard/></Grid>))}</Grid>)
}

export default PropertySection