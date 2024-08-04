import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const CustomInput = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '22ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField sx={{height:"55px"}} id="outlined-basic" label="Your e-mail address" variant="outlined" />
  </Box>
  )
}

export default CustomInput 