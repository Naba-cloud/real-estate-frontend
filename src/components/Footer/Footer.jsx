import { Grid, Typography } from '@mui/material'
import React from 'react'
import Vector from "../../assets/Vector.png"
const Footer = () => {
  return (
    <footer>
        <img src={Vector}/>
        <Typography variant="h6" component={"div"}>
            Real Estate
        </Typography>
    </footer>
  )
}

export default Footer