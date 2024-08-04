import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import defaultProperty from "../../assets/defaultProperty.jpg"
const AboutUsSection = () => {
    return (
      
        <Box sx={{ display: "flex", flexDirection: "row",alignItems:"center",justifyContent:"center" }}>
            <Box><img width={300} src={defaultProperty} /></Box>
            <Box width={"50%"} sx={{display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
                <Typography variant='h5'>About Us Content</Typography>
            <Typography  variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus autem incidunt dignissimos excepturi inventore quia commodi, tempore rerum facilis optio 
                rem! Delectus minus accusantium aut quo pariatur aliquam ad ratione!</Typography>
            </Box>
            </Box>
           
  )
}

export default AboutUsSection