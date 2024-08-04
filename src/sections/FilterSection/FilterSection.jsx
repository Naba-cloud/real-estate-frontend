import React from 'react'
import DropDown from '../../components/DropDown/DropDown'
import Grid from "@mui/material/Grid"
const FilterSection = () => {
  return (<Grid container>
   
    {[1,2,3,4].map(()=><DropDown/>
    )}
    </Grid>
  )
}

export default FilterSection